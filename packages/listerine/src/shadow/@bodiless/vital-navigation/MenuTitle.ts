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

import { vitalMenuTitleBase, asMenuTitleToken } from '@bodiless/vital-navigation';
import { addProps } from '@bodiless/fclasses';
// import { listerineTypography } from '../../../components/Typography';

const Default = asMenuTitleToken(vitalMenuTitleBase.Default, {
  Behavior: {
    _: addProps({ 'data-shadowed-by': 'Listerine:MenuTitle' }),
  },
  Theme: {
    // NOTE: Applying styling to the "Link" slot applies selected classes
    // to the "Title" slot and vice versa...
    Link: 'pl-1 pr-1',
  },
});

const vitalMenuTitle: typeof vitalMenuTitleBase = {
  ...vitalMenuTitleBase,
  Default,
};

export default vitalMenuTitle;
