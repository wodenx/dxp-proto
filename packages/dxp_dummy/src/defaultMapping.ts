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
import type { dataMapping } from './types';
import cardVariations from './cardVariations';

import {
  textGenerator,
  richtextGenerator,
  imageGenerator,
  youtubeGenerator
} from './generators';

const dummyImage = (width: number, height: number) => ({
  callback: imageGenerator,
  params: {
    width,
    height
  }
});
const dummyRichtext = (maxLength: number) => ({
  callback: richtextGenerator,
  params: {
    maxLength,
  }
});

const dummyPlainTitle = (maxLength: number) => ({
  callback: textGenerator,
  params: {
    maxLength,
  }
});

const dataMapping = {
  plainImage: (width: number, height: number) => ({
    src: dummyImage(width, height),
  }),
  image: (width: number, height: number) => ({
    src: dummyImage(width, height),
    alt: dummyPlainTitle(140),
    title: dummyPlainTitle(64),
    preset: 'fluid_withWebp',
  }),
  richtext: dummyRichtext(500),
};

const multipleComponent = {
  multiple: true,
};

const linkListDef = {
  componentDef: {
    title: {
      componentDef: {
        text: dummyPlainTitle(50),
      }
    },
    link: {
      componentDef: {
        href: '#',
        'aria-label': dummyPlainTitle(150),
      }
    }
  },
  nodeKey: '__spread',
  ...multipleComponent
};

const richtextListDef = {
  componentDef: {
    title: {
      componentDef: dummyRichtext(25)
    }
  },
  nodeKey: '__spread',
  ...multipleComponent
};

const plaintextListDef = {
  componentDef: {
    title: {
      componentDef: {
        text: dummyPlainTitle(25)
      }
    }
  },
  nodeKey: '__spread',
  ...multipleComponent
};

const Card = {
  componentDef: {
    cta: {
      componentDef: {
        text: dummyPlainTitle(25)
      },
    },
    description: {
      componentDef: dummyRichtext(250),
    },
    image: {
      componentDef: dataMapping.image(600, 600),
    },
    title: {
      componentDef: {
        text: dummyPlainTitle(50)
      },
    },
    eyebrow: {
      componentDef: {
        text: dummyPlainTitle(50)
      },
      nodeKey: 'eyebrow'
    }
  },
  nodeKey: '__spread'
};

const flowContainerComponents = {
  ImageSquare: {
    componentDef: dataMapping.image(1200, 1200),
    nodeKey: 'image',
  },
  ImageLandscape: {
    componentDef: dataMapping.image(3000, 600),
    nodeKey: 'image',
  },
  RichText: {
    componentDef: dataMapping.richtext,
  },
  ListInfographic: {
    componentDef: {
      image: {
        componentDef: dataMapping.image(300, 300),
      },
      title: {
        componentDef: dummyRichtext(25)
      }
    },
    nodeKey: '__spread',
    ...multipleComponent
  },
  ListBulletedLinked: linkListDef,
  ListNumberedLinked: linkListDef,
  ListPlainLinked: linkListDef,
  ListBulletedRichText: richtextListDef,
  ListNumberedRichText: richtextListDef,
  ListPlainRichText: richtextListDef,
  ListBulletedPlainText: plaintextListDef,
  ListNumberedPlainText: plaintextListDef,
  ListPlainPlainText: plaintextListDef,
  ...Object.assign(
    {}, ...cardVariations.map(key => ({[key]: Card}))
  )
};

const Video = {
  componentDef: {
    src: {
      callback: youtubeGenerator,
      params: {}
    }
  },
  nodeKey: 'youtube$src'
};

const HeroCard = {
  componentDef: {
    cta: {
      componentDef: {
        text: dummyPlainTitle(25)
      },
    },
    description: {
      componentDef: dummyRichtext(500),
    },
    image: {
      componentDef: dataMapping.image(600, 600),
    },
    title: {
      componentDef: {
        text: dummyPlainTitle(50)
      },
    },
  },
  nodeKey: '__spread'
};

const defaultMapping: dataMapping = {
  _default: {
    type: 'chameleon',
    components: {
      _default: {
        TopContent: {
          type: 'chameleon',
          components: {
            Image: {
              componentDef: dataMapping.image(1200, 1200),
              nodeKey: 'image'
            },
            HeroCard,
            Video
          },
          nodeKey: 'top-content'
        },
        MainContent: {
          type: 'flowContainer',
          components: flowContainerComponents,
          nodeKey: 'main-content'
        },
        BottomContent: {
          type: 'flowContainer',
          components: flowContainerComponents,
          nodeKey: 'bottom-content'
        },
      },
      PDP: {
        ProductImage: {
          type: 'component',
          components: {
            image: {
              componentDef: dataMapping.image(1200, 1200),
              nodeKey: 'image'
            },
          },
        },
        ProductDescription: {
          type: 'flowContainer',
          components: flowContainerComponents,
          nodeKey: 'description'
        },
        ProductTitle: {
          type: 'component',
          components: {
            title: {
              componentDef: {
                text: dummyPlainTitle(50)
              },
              nodeKey: 'title'
            }
          },
        },
        ProductEyebrow: {
          type: 'component',
          components: {
            eyebrow: {
              componentDef: {
                text: dummyPlainTitle(50)
              },
              nodeKey: 'eyebrow'
            }
          },
        },
        BottomContent: {
          type: 'flowContainer',
          components: flowContainerComponents,
          nodeKey: 'bottom-content'
        },
      },
    }
  }
};

export default defaultMapping;
