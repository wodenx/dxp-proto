/**
 * Copyright © 2022 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { resolve, join, dirname } from 'path';
import {
  existsSync,
  rmSync,
  writeFileSync,
  mkdirSync,
  createWriteStream,
  readFileSync
} from 'fs';
import Axios from 'axios';
import fg from 'fast-glob';
import * as fastq from 'fastq';
import * as dotenv from 'dotenv';
import type { queueAsPromised } from 'fastq';

import { imageGenerator } from '../generators';
import defaultMapping from '../defaultMapping';
import type {
  PageType,
  FlowContainerItem
} from '../types';

import {
  generatePath,
  pickupRandomObjectProperty,
  randomInteger,
  createFlowContainerItem,
  generateUuid,
  jsonPrettyPrint,
  getDirectories
} from '../utilities';

dotenv.config({ path: '.env.site' });

type Args = {
  [key: string]: any
};

const args: Args = {
  destination: process.env.DXP_GENERATED_CONTENT_DESTINATION || resolve('./src/data'),
  staticPath: `./${process.env.BODILESS_BACKEND_STATIC_PATH || resolve('./static')}`,
  clearData: process.env.BODILESS_BACKEND_CLEAR_DATA || true,
  numberOfPages: +(process.env.DXP_GENERATED_CONTENT_NUMBER_OF_PAGES || 10),
};

const castingArgs: Args = {
  clearData: (v: string) => (v === 'true' || v === '1'),
  numberOfPages: (v: string) => +(v),
};

process.argv.reduce((
  prev: string, value: string
) => {
  if (prev.startsWith('-')) {
    const searchRegExp = /-(\w){1}/g;

    const key = prev.substring(2).replace(searchRegExp, v => v.toUpperCase().replace('-', ''));
    if (Object.prototype.hasOwnProperty.call(args, key)) {
      const cast = Object.prototype.hasOwnProperty.call(castingArgs, key);
      args[key] = cast ? castingArgs[key](value) : value;
    }
  }
  return value;
});

const {
  destination,
  staticPath,
  clearData,
  numberOfPages
} = args;

const pagesPath = resolve(destination, './pages');
const sitePath = resolve(destination, './site');

if (!existsSync(destination)) {
  throw new Error(`The destination ${destination} doesn't exists. Provide an existing directory using the environment variable DXP_GENERATED_CONTENT_DESTINATION`);
}

const maxComponentNumber = 5;

if (clearData) {
  if (existsSync(pagesPath)) {
    try {
      rmSync(pagesPath, { recursive: true });
    } catch (error: any) {
      throw new Error('Unable to clear pages path');
    }
  }
  try {
    const mainMenuFiles = fg.sync(`${sitePath}/**/*$(main|footer)-menu($*)?.json`);
    mainMenuFiles.forEach(file => rmSync(file));
    // fs.rmdirSync(resolve(destination, pagesPath), { recursive: true });
  } catch (error: any) {
    throw new Error('Unable to clear pages path');
  }
  if (existsSync(resolve(staticPath, 'images/pages'))) {
    try {
      rmSync(resolve(staticPath, 'images/pages'), { recursive: true });
    } catch (error: any) {
      throw new Error('Unable to clear image path');
    }
  }
}

/**
 * Helper function which generate the image URL and add it to the download queue.
 * @param {Object} Object.params Image Component params.
 * @param {string} Object.src Image src.
 */
const addImageToQueue = ({params, src}: {params: any, src: string}) => {
  const picsum = 'https://picsum.photos';
  const { width = 1200, height = 1200 } = params;
  const url = `${picsum}/${width}/${height}`;
  const destination = `${staticPath}${src}`;

  imageQueue.push({
    url, destination
  }).catch((err) => console.error(err.status));
};

/**
 * Queue worker which download image to destination.
 * @param {string} Object.url - The image url to download.
 * @param {string} Object.destination - The directory where saving the file.
 */
const downloadImage = async ({
  url,
  destination
}: {url: string, destination: string}): Promise<void> => {
  const response = await Axios({
    url,
    method: 'GET',
    responseType: 'stream'
  });
  if (!existsSync(dirname(destination))) {
    mkdirSync(dirname(destination), {recursive: true});
  }
  response.data.pipe(createWriteStream(destination))
    .on('error', (e: any) => console.log(e.statusCode));
};

/**
 * Queue worker which create a new page.
 * @param {Boolean} Object.homePage Whatever create the home page or a subpage.
 */
const generatePage = async ({homePage}: {homePage: boolean}): Promise<void> => {
  const { obj, key } = <{ obj: PageType, key: string }>pickupRandomObjectProperty(defaultMapping);

  const path = homePage ? '' : generatePath({
    destination: pagesPath,
    totalPages: numberOfPages
  });
  const destination = join(pagesPath, path);

  mkdirSync(destination, { recursive: true });

  writeFileSync(
    join(destination, 'index.json'),
    jsonPrettyPrint({ '#template': key}),
  );

  // Random select a page type.
  const randomComponent = randomInteger(0, Object.keys(obj.components).length -1);
  const componentKey = Object.keys(obj.components)[randomComponent];
  if (obj.type === 'chameleon') {
    writeFileSync(join(destination, 'template.json'), jsonPrettyPrint({ component: componentKey}));
  }

  // Extract the regions from the page type.
  const regions = obj.components[componentKey];

  // Populate each region.
  Object.values(regions).forEach((item) => {
    const {
      obj: component,
      key: componentName
    } = <{ obj: any, key: string }>pickupRandomObjectProperty(
      item.components
    );

    switch (item.type) {
      case 'chameleon':
        generateChameleon({
          destination,
          baseNodeKey: item.nodeKey || '',
          componentName,
          component
        });
        break;
      case 'flowContainer':
        generateFlowContainer({
          destination,
          baseNodeKey: item.nodeKey || '',
          components: item.components
        });
        break;
      case 'component':
      default:
        // eslint-disable-next-line no-case-declarations
        const items = generateMultipleItems({
          destination,
          baseNodeKey: item.nodeKey || '',
          component,
          saveOnFile: true
        });
        items.forEach(nodeKey => generateComponent({
          destination,
          baseNodeKey: [item.nodeKey || '', nodeKey].filter(Boolean).join('$'),
          component,
          saveOnFile: true
        }));
        break;
    }
  });
};

/**
 * Creates the Menu files.
 * @param {string} Object.destination Destinationn Path.
 * @param {string} Object.parentPath The path of parent menu item.
 * @param {string} Object.parentUUID The UUID of parent menu item.
 */
const generateMenu = ({
  destination,
  parentPath,
  parentUUID
}: {destination: string, parentPath: string, parentUUID: string}) => {
  const directories = getDirectories(destination);
  directories.forEach(directory => {
    if (existsSync(join(destination, directory, 'index.json'))) {
      let uuid = '';
      ['header', 'footer'].forEach(component => {
        const menuType = component === 'header' ? 'main' : 'footer';
        const sublist = parentUUID ? 'sublist' : '';
        const baseNodeKey = [`${component}$${menuType}-menu`, parentUUID].filter(Boolean).join('$');
        const baseFilePath = join(sitePath, baseNodeKey);
        // If menu has a parent, create the cham-sublist file.
        if (parentUUID) {
          writeFileSync(
            `${[baseFilePath, 'cham-sublist'].filter(Boolean).join('$')}.json`,
            jsonPrettyPrint({
              component: 'List'
            })
          );
        }
        const baseItemFilePath = [baseFilePath, sublist].filter(Boolean).join('$');
        const indexFilePath = `${baseItemFilePath}.json`;
        // Retrieve existing Items list.
        const items = existsSync(indexFilePath)
          ? JSON.parse(readFileSync(indexFilePath, {encoding: 'utf-8'}))
          : { items: [] };
        // Generate the new uuid and add to the file.
        uuid = items.items.length ? generateUuid() : 'default';

        items.items.push(uuid);
        // Write items file.
        writeFileSync(indexFilePath, jsonPrettyPrint(items));

        const dataBaseFilePath = [baseItemFilePath, uuid].join('$');
        writeFileSync(
          `${[dataBaseFilePath, 'title', 'text'].join('$')}.json`,
          jsonPrettyPrint({
            text: directory
          })
        );
        writeFileSync(
          `${[dataBaseFilePath, 'title', 'link'].join('$')}.json`,
          jsonPrettyPrint({
            href: join(parentPath, directory),
            'aria-label': directory
          })
        );
      });
      generateMenu({
        destination: join(destination, directory),
        parentPath: join(parentPath, directory),
        parentUUID: uuid,
      });
    }
  });
};

// Initialize queues.
const imageQueue: queueAsPromised = fastq.promise(downloadImage, 10);
imageQueue.pause();

const pagesQueue: queueAsPromised = fastq.promise(generatePage, 10);
pagesQueue.drained()
  .finally(() => {
    generateMenu({
      destination: pagesPath,
      parentPath: '',
      parentUUID: ''
    });
    imageQueue.resume();
  });

/**
 * Creates the JSON files for a chameleon component.
 * @param {string} Object.destination Destinationn Path.
 * @param {string} Object.baseNodeKey Starting part of the nodeKey.
 * @param {string} Object.componentName Type of chameleon component.
 * @param {Object} Object.component Object defining the component.
 */
const generateChameleon = ({
  destination,
  baseNodeKey,
  componentName,
  component
}: {
  destination: string,
  baseNodeKey: string,
  componentName: string,
  component: any
}) => {
  writeFileSync(
    join(destination, `${baseNodeKey}$component.json`),
    jsonPrettyPrint({ component: componentName})
  );

  const multipleItems = generateMultipleItems({
    destination,
    baseNodeKey,
    component,
    saveOnFile: true
  });
  multipleItems.forEach(nodeKey => generateComponent({
    destination,
    baseNodeKey: [`${baseNodeKey}`, nodeKey].filter(Boolean).join('$'),
    component,
    saveOnFile: true
  }));
};

/**
 * Creates the JSON files for a flowContainer component.
 * @param {string} Object.destination Destinationn Path.
 * @param {string} Object.baseNodeKey Starting part of the nodeKey.
 * @param {Object} Object.component Object defining the component.
 */
const generateFlowContainer = ({
  destination,
  baseNodeKey,
  components
} : {
  destination: string,
  baseNodeKey: string,
  components: any
}) => {
  // Select a rundom number of components.
  const numberOfComponents = randomInteger(1, maxComponentNumber);
  const items:FlowContainerItem[] = [];
  for (let i = 0; i < numberOfComponents; i +=1) {
    const { obj: component, key } = <{ obj: any, key: string }>pickupRandomObjectProperty(
      components
    );
    const uuid = generateUuid();

    const multipleItems = generateMultipleItems({
      destination,
      baseNodeKey: `${baseNodeKey}$${uuid}`,
      component,
      saveOnFile: true
    });
    multipleItems.forEach(nodeKey => generateComponent({
      destination,
      baseNodeKey: [baseNodeKey, uuid, nodeKey].filter(Boolean).join('$'),
      component,
      saveOnFile: true
    }));

    items.push(createFlowContainerItem({
      type: key,
      uuid,
    }));
  }
  writeFileSync(join(destination, `${baseNodeKey}.json`), jsonPrettyPrint({ items }));
};

/**
 * Creates the JSON files for basic component.
 * @param {string} Object.destination Destinationn Path.
 * @param {string} Object.baseNodeKey Starting part of the nodeKey.
 * @param {Object} Object.component Object defining the component.
 * @param {Boolean} Object.saveOnFile Whatever save the json to file or just return it.
 */
const generateComponent = ({
  destination,
  baseNodeKey,
  component,
  saveOnFile
}: {
  destination: string,
  baseNodeKey: string,
  component: any,
  saveOnFile: boolean
}) => {
  const { componentDef, nodeKey = '' } = component;
  if (nodeKey === '__spread') {
    const result = Object.entries(componentDef).map((element: any) : Object => {
      const [key, c] = element;
      const component = {
        nodeKey: key,
        ...c
      };
      return {
        [key]: generateComponent({
          destination,
          baseNodeKey,
          component,
          saveOnFile
        })
      };
    });
    return Object.assign({}, ...result);
  }

  const json = (componentDef.callback && componentDef.params) ? componentDef.callback({
    ...componentDef.params,
    baseNodeKey
  }) : Object.create(componentDef);

  if (componentDef.callback && componentDef.callback === imageGenerator) {
    addImageToQueue({params: componentDef.params, src: json.src});
  }

  if (!componentDef.callback || !componentDef.params) {
    Object.entries(componentDef).forEach((entry) => {
      const [key, value] = <[ key: string, value: any ]>entry;
      if (typeof value === 'string') {
        json[key] = value;
      }
      if (value.callback && typeof value.callback === 'function') {
        json[key] = value.callback({
          ...value.params,
          baseNodeKey
        });
        if (value.callback === imageGenerator && key === 'src') {
          addImageToQueue({params: value.params, src: json.src});
        }
      }
    });
  }

  if (saveOnFile) {
    writeFileSync(join(destination, `${[baseNodeKey, nodeKey].filter(Boolean).join('$')}.json`), jsonPrettyPrint(json));
  }
  return json;
};

/**
 * Creates the JSON files for a component expecting multiple items.
 * @param {string} Object.destination Destinationn Path.
 * @param {string} Object.baseNodeKey Starting part of the nodeKey.
 * @param {Object} Object.component Object defining the component.
 * @param {Boolean} Object.saveOnFile Whatever save the json to file or just return it.
 */
const generateMultipleItems = ({
  destination,
  baseNodeKey,
  component,
  saveOnFile
}: {
  destination: string,
  baseNodeKey: string,
  component: any,
  saveOnFile: boolean
}) => {
  const { nodeKey = '', multiple } = component;
  if (multiple) {
    const itemNumbers = randomInteger(0, 4);
    const items = [
      'default',
      ...Array(itemNumbers).fill('').map(e => generateUuid())
    ];
    if (saveOnFile) {
      writeFileSync(
        join(destination, `${[baseNodeKey, (nodeKey !== '__spread' ? nodeKey : '')].filter(Boolean).join('$')}.json`),
        jsonPrettyPrint({items})
      );
    }
    return items;
  }
  return [''];
};

pagesQueue.push({homePage: true}).catch((err) => console.error(err));
for (let i = 1; i < numberOfPages; i+=1) {
  pagesQueue.push({}).catch((err) => console.error(err));
}
