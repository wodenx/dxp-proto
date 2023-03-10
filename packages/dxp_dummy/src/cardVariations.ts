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
const LeftRight = [
  'Left',
  'Right',
];
const ContentAlignment = [
  'ContentTop',
  'ContentCentered',
];

const ContentVariations = [
  'All',
  'NoTitle',
  'NoDescription',
  'NoEyebrow'
];

const LinkVariations = [
  'Link',
  'PrimaryButton',
  'SecondaryButton',
];
const BasicVariation = [
  ['Card'],
  [
    [
      LeftRight,
      ContentAlignment,
      ContentVariations
    ],
    [
      ['Vertical'],
      ContentVariations
    ],
  ]
];
const HeroVariation = [
  ['Hero'],
  [
    [
      LinkVariations,
      LeftRight,
      ContentAlignment,
    ]
  ]
];

const ProductVariation = [
  ['Product'],
  [
    'FullyClickable',
    ...LinkVariations
  ],
  [
    'All',
    'NoDescription',
    'NoEyebrow',
    'NoRatings',
  ],
];

const varyDesigns = (designs: any) => designs.reduce(
  (acc: any, element: any) => acc.flatMap((x: string) => element.map((y: string) => {
    if (typeof y === 'string') {
      return `${x}${y}`;
    }
    return (varyDesigns(y).map((z: string) => `${x}${z}`));
  })), ['']
).flat();

export default [
  ...varyDesigns(HeroVariation),
  ...varyDesigns(BasicVariation),
  ...varyDesigns(ProductVariation),
];
