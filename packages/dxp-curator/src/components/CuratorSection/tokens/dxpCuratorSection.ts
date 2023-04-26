import {
  as, flowHoc, removeClasses, withProps
} from '@bodiless/fclasses';
import { vitalEditorPlain } from '@bodiless/vital-editors';
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
      'text-interactive-primary-active',
      'vital-external-link',
    ),
  },
  Layout: {
    Wrapper: 'w-full flex flex-col',
    TitleWrapper: 'w-full flex flex-col md:flex-row',
  },
  Spacing: {
    TitleWrapper: 'justify-between items-end mb-3',
  },
  Content: {
    Title: flowHoc(
      withProps({
        children: 'SHOW US HOW YOU SWISH',
      }),
    ),
    SocialLink: flowHoc(
      withProps({
        children: 'Find Us On Instagram'
      }),
    ),
  },
});

export default {
  Default,
};
