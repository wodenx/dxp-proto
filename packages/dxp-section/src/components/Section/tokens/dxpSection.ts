import { withNodeKey } from '@bodiless/core';
import { flowHoc } from '@bodiless/fclasses';
import { withPlaceholder } from '@bodiless/components';
import { vitalEditorPlain } from '@bodiless/vital-editors';
import { asSectionToken } from '../SectionClean';

const SectionNodeKeys = {
  Title: 'title',
  Description: 'description',
  Link: 'link',
  Content: 'content',
};

const Default = asSectionToken({
  Components: {
    Title: vitalEditorPlain.Default,
    Description: vitalEditorPlain.Default,
  },
  Layout: {
    Wrapper: 'w-full flex flex-col',
  },
  Schema: {
    Title: withNodeKey(SectionNodeKeys.Title),
    Description: withNodeKey(SectionNodeKeys.Description),
    Link: withNodeKey(SectionNodeKeys.Link),
    Content: withNodeKey(SectionNodeKeys.Content),
  },
  Content: {
    Title: withPlaceholder('Default Section Title'),
    Content: withPlaceholder('Default Section Content'),
    Description: withPlaceholder('Section description'),
  },
  Meta: flowHoc.meta.term('Type')('Section'),
});

export default {
  Default,
};
