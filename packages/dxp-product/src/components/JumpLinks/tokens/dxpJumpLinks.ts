import { withDefaultContent, withNodeKey } from '@bodiless/core';
import { as, flowIf } from '@bodiless/fclasses';
import { vitalList } from '@bodiless/vital-list';

import { useIsFirstItem, useJumpLinksContent } from './dxpJumpLinksData';
import { asJumpLinkToken } from '../JumpLinksClean';

const Default = asJumpLinkToken(vitalList.WithLinkedTitle, {
  Theme: {
    _: 'uppercase',
    Title: flowIf(useIsFirstItem)(
      as('pointer-events-none no-underline text-vital-primary-header-copy'),
    ),
    Item: 'first:cursor-default'
  },
  Spacing: {
    _: 'mt-10',
  },
  Layout: {
    _: 'flex justify-between',
  },
  Schema: {
    _: withNodeKey('jump-links'),
  }
});

const PDPJumpLinks = asJumpLinkToken(Default, {
  Content: {
    _: withDefaultContent(useJumpLinksContent),
  }
});

export default {
  Default,
  PDPJumpLinks,
};
