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

import { vitalSubMenuBase, asSubMenuToken } from '@bodiless/vital-navigation';
import {
  addClasses,
  addProps, as, removeClasses
} from '@bodiless/fclasses';
import { listerineTypography } from '../../../components/Typography';

const Footer = asSubMenuToken(vitalSubMenuBase.Footer, {
  ...vitalSubMenuBase.Footer,
  Theme: {
    ...vitalSubMenuBase.Footer.Theme,
    Item: as(
      addClasses('font-gotham lg:text-base text-sm leading-5 font-bold'),
      removeClasses('mt-6 lg:first:mt-6'),
      listerineTypography.WhiteLink,
    ),
  },
  Spacing: {
    ...vitalSubMenuBase.Footer.Spacing,
    OuterWrapper: 'lg:mb-0',
    Wrapper: 'lg:mb-8',
    Item: 'mt-3.5 lg:first:mt-2.5 lg:mt-3'
  },
  Behavior: {
    _: addProps({ 'data-shadowed-by-2': 'Listerine:FooterSubMenu' }),
  },
});

export default {
  ...vitalSubMenuBase,
  Footer,
};
