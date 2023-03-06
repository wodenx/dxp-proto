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

import { join } from 'path';
import { existsSync, readdirSync } from 'fs';
import { v4 } from 'uuid';
import type { CreateFlowContainerItem } from './types';

/**
 * Generates a random number between min and max (included)
 * @param {number} min Min random value.
 * @param {number} max Max random value.
 * @returns {number} Random value
 */
export const randomInteger = (min: number, max: number) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);
export const metasyntactic = [
  'foo',
  'bar',
  'baz',
  'qux',
  'and',
  'quux',
  'corge',
  'grault',
  'garply',
  'waldo',
  'fred',
  'plugh',
  'xyzzy',
  'thud'
];
let currentPageLevel = 1;
let generatedPages = 0;

const generatedMenu :Array<string>[] = [
  []
];

/**
 * Generates a unique random path.
 * @param {string} Object.destination The destination path where the files will be stored.
 * @param {number} Object.totalPages Total amount of pages the script is going to generate.
 * @returns {string} The generated path.
 */
export const generatePath = ({
  destination,
  totalPages
}:{destination: string, totalPages: number}) :string => {
  const itemsForLevel = 5;

  const path :string[] = [];
  const randomPath = metasyntactic[randomInteger(0, 13)];

  if (currentPageLevel > 1) {
    const parentCandidates = generatedMenu[currentPageLevel-2];
    const parent = parentCandidates[randomInteger(0, parentCandidates.length-1)];
    path.push(parent);
  }

  path.push(randomPath);
  generatedMenu[currentPageLevel-1].push(path.join('/'));

  if (existsSync(join(destination, ...path))) {
    return generatePath({destination, totalPages});
  }
  generatedPages+=1;
  if (itemsForLevel**currentPageLevel === generatedPages) {
    currentPageLevel+=1;
    generatedMenu.push([]);
  }

  return join(...path);
};

export const pickupRandomArrayItem = (Arr: any) => Arr[randomInteger(0, Arr.length -1)];

export const pickupRandomObjectProperty = (Obj: any) => {
  const rand = randomInteger(0, Object.keys(Obj).length -1);
  const key = Object.keys(Obj)[rand];
  return {
    obj: Obj[key],
    key
  };
};

export const generateUuid = () => v4();

export const createFlowContainerItem: CreateFlowContainerItem = ({
  type,
  uuid,
}) => ({
  uuid,
  wrapperProps: {
    className: 'w-full',
  },
  type,
});

export const jsonPrettyPrint = (json: object) => JSON.stringify(json, null, 2);

export const getDirectories = (source: string) => readdirSync(source, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);
