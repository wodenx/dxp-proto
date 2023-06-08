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

export interface Component {
  componentDef: any,
  nodeKey?: string
  multiple?: boolean
}

export interface PageComponent {
  type: 'chameleon' | 'flowContainer' | 'component',
  components: {
    [key: string]: Component
  },
  nodeKey?: string
}

export interface PageRegion {
  [key: string]: PageComponent
}

export interface PageVariant {
  [key: string]: PageRegion
}

export interface PageType {
  type: 'chameleon' | 'plain',
  components: PageVariant
}

export interface dataMapping {
  [key: string]: PageType
}
export type FlowContainerItem = {
  uuid: string,
  wrapperProps: { [key: string]: string; },
  type: string,
};

export type CreateFlowContainerItemArgs = {
  type: string,
  uuid: string,
};
export type CreateFlowContainerItem = (args: CreateFlowContainerItemArgs) => FlowContainerItem;
