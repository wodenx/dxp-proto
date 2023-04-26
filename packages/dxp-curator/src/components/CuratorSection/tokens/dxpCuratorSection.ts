import {
  as, flowHoc, removeClasses, withProps
} from '@bodiless/fclasses';
import { vitalEditorPlain } from '@bodiless/vital-editors';
// import { withSbContent } from '../../../util';
import { vitalTextDecoration, vitalTypography } from '@bodiless/vital-elements';
import { asCuratorSectionToken } from '../CuratorSectionClean';

const Default = asCuratorSectionToken({
  Components: {
    Title: vitalEditorPlain.Default,
    Subtitle: vitalEditorPlain.Default,
    SocialLink: vitalTypography.Link,
  },
  Theme: {
    Title: as(
      vitalTextDecoration.Uppercase,
      vitalTypography.H2,
      vitalTextDecoration.Medium,
      removeClasses('font-bold'),
    ),
    SocialLink: as(
      // listerineColor.TextPrimaryInteractive,
      'text-interactive-primary-active',
      'vital-external-link',
    ),
  },
  Layout: {
    Wrapper: 'w-full flex flex-col',
    TitleWrapper: 'w-full flex',
  },
  Spacing: {
    Wrapper: 'py-20',
    TitleWrapper: 'justify-between items-end mb-3',
    SocialLink: 'self-end',
  },
  Content: {
    Title: flowHoc(
      withProps({
        children: 'SHOW US HOW YOU SWISH',
      }),
      as(vitalTypography.H2),
    ),
    SocialLink: flowHoc(
      withProps({
        children: 'Find Us On Instagram'
      }),
    ),
  },
  Meta: flowHoc.meta.term('Type')('Curator Section'),
});

export default {
  Default,
};
