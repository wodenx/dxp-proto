import { withNodeKey } from '@bodiless/core';
import { flowHoc } from '@bodiless/fclasses';
import { withPlaceholder } from '@bodiless/components';
import { asSectionToken } from '../SectionClean';

const SectionNodeKeys = {
  Title: 'title',
  Description: 'description',
  Link: 'link',
  Content: 'content',
};

const Default = asSectionToken({
  Content: {
    Title: withPlaceholder('Section Title'),
    Description: withPlaceholder('Section description'),
  },
  Schema: {
    Title: withNodeKey(SectionNodeKeys.Title),
    Description: withNodeKey(SectionNodeKeys.Description),
    Link: withNodeKey(SectionNodeKeys.Link),
    Content: withNodeKey(SectionNodeKeys.Content),
  },
  Layout: {
    Wrapper: 'w-full flex flex-col',
  },
  Meta: flowHoc.meta.term('Type')('Section'),
});

export default {
  Default,
};
