import { flowHoc, withProps } from '@bodiless/fclasses';
import { vitalEditorPlain } from '@bodiless/vital-editors';
// import { withSbContent } from '../../../util';
import { asCuratorSectionToken } from '../CuratorSectionClean';

const Default = asCuratorSectionToken({
  Components: {
    Title: vitalEditorPlain.Default,
    Subtitle: vitalEditorPlain.Default,
  },
  Layout: {
    Wrapper: 'w-full flex flex-col',
  },
  Spacing: {
    Wrapper: 'py-20',
  },
  Content: {
    // _: withSbContent(),
    Title: withProps({
      children: 'Placeholder Title',
    }),
    Subtitle: withProps({
      children: 'Placeholder Description',
    }),
    // @todo Remove debugger
    // Feed: withSbContent((data: any) => {
    //   console.log(data);
    //   return data;
    // }),
  },
  Meta: flowHoc.meta.term('Type')('Curator Section'),
});

export default {
  Default,
};
