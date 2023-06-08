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

import { LoremIpsum } from 'lorem-ipsum';
import crypto from 'crypto';
import { metasyntactic, pickupRandomArrayItem } from './utilities';

import { createDefaultDeserializers } from './deserializers';
import { deserializeHtml, truncateHtml } from './serializer';

const generateHash = (str: string) => crypto.createHash('md5').update(str).digest('hex');

const richtextGenerator = ({maxLength}: {maxLength: number}) => {
  const numOfParagraphs = 30;

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 7,
      min: 4
    },
    wordsPerSentence: {
      max: 14,
      min: 4
    },
  }, 'html');
  const html=lorem.generateParagraphs(numOfParagraphs);

  return deserializeHtml(
    truncateHtml(html, maxLength),
    createDefaultDeserializers(),
  );
};

const textGenerator = ({maxLength}: {maxLength: number}) => {
  const numOfParagraphs = 10;

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 7,
      min: 4
    },
    wordsPerSentence: {
      max: 14,
      min: 4
    },
  }, 'plain');
  const text = lorem.generateParagraphs(numOfParagraphs).substring(0, maxLength);
  const lastSpace = text.lastIndexOf(' ');
  return text.substring(0, lastSpace);
};

const imageGenerator = ({
  width,
  height,
  baseNodeKey,
}: {width: number, height: number, baseNodeKey: string}) => `/images/pages/${generateHash(baseNodeKey)}/${pickupRandomArrayItem(metasyntactic)}.jpg`;

const youtubeVideos = [
  'https://www.youtube.com/watch?v=l2qpLSrtRH0',
  'https://www.youtube.com/watch?v=BU4wWXDLNlw',
  'https://www.youtube.com/watch?v=5T7Uda7bFmQ',
  'https://www.youtube.com/watch?v=JEIgSvfv1I0',
  'https://www.youtube.com/watch?v=h8Li97InUwI',
  'https://www.youtube.com/watch?v=3FUnlYAKExY',
  'https://www.youtube.com/watch?v=KnE1nNrULLQ',
  'https://www.youtube.com/watch?v=5SnAyYZ9FAY',
  'https://www.youtube.com/watch?v=ugDLpUAwZAM',
  'https://www.youtube.com/watch?v=pFidfMK1oS0',
];

const youtubeGenerator = () => pickupRandomArrayItem(youtubeVideos);
export {
  richtextGenerator,
  textGenerator,
  imageGenerator,
  youtubeGenerator
};
