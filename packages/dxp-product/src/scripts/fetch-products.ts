import * as fs from 'fs';
import * as path from 'path';
import { mkdirp, writeFile } from 'fs-extra';
import { createClient } from 'contentful';

require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV || 'development'}`,
});

// @todo Create more verbose error message
if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  console.error('\n Please ensure environment variables are set and try again. \n');
  process.exit(1);
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const SITE_DIR = `${process.cwd()}`;
const DATA_DIR = `${SITE_DIR}/src/data`;
const DATA_NODE_KEY = 'content';
const TEMPLATE_FILE = 'index.json';
// @todo Prefix will need to be configurable
const PAGES_DIR = `${DATA_DIR}/pages/products`;

const createProduct = async (data: any) => {
  try {
    const dir = path.join(PAGES_DIR, data.path);
    await mkdirp(dir);
    const index = {
      '#template': 'product',
    };
    const content = {
      contentful_id: data.contentful_id,
      revision_id: data.revision_id,
    };
    const indexJson = JSON.stringify(index, undefined, 2);
    const indexFile = path.join(dir, TEMPLATE_FILE);
    const indexPromise = writeFile(indexFile, indexJson);
    const dataJson = JSON.stringify(content, undefined, 2);
    const dataFile = path.join(dir, `${DATA_NODE_KEY}.json`);
    const dataPromise = writeFile(dataFile, dataJson);
    return await Promise.all([indexPromise, dataPromise]);
  } catch (error) {
    console.error('Error creating product:', data.path);
    return Promise.reject(new Error(error));
  }
};
type ProductFieldType = {
  name: string;
  id: string;
  slug: string;
};

const fetchProducts = async () => {
  const data = await client.getEntries<ProductFieldType>({
    content_type: 'product'
  });
  const promises = data.items.map(({ fields, sys }) => {
    const createData = {
      path: fields.slug,
      title: fields.name,
      type: sys.contentType.sys.id,
      contentful_id: sys.id,
      revision_id: sys.revision,
    };
    return createProduct(createData).then(() => fields.slug);
  });
  return Promise.all(promises);
};

const syncProducts = async () => {
  const fetchedProducts = await fetchProducts();

  console.log('Fetched Products', fetchedProducts);
  const productsInFileSystem = fs.readdirSync(PAGES_DIR);

  console.log('existing directories', productsInFileSystem);

  const directoriesToDelete = productsInFileSystem.filter(
    (dir: string) => !fetchedProducts.includes(dir),
  );

  console.log('directories marked for deletion', directoriesToDelete);

  return Promise.all(
    directoriesToDelete.map((dir: string) => fs.rm(
      path.join(PAGES_DIR, dir), { recursive: true }, (err: any) => console.log(err),
    ),),
  );
};

console.log('Fetching content...');
syncProducts();
