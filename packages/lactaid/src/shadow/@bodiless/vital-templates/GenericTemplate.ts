import { vitalGenericTemplateBase, asGenericTemplateToken } from '@bodiless/vital-templates';
import { flowIf, on, replaceWith } from '@bodiless/fclasses';
import { useNode } from '@bodiless/core';
import { VideoClean } from '../../../components/Video';
import HomePageSections, { withLactaidHomeVideo } from '../../../components/HomePageSections';

const useIsHomePage = () => (useNode().node.pagePath === '/');

const Default = asGenericTemplateToken(
  {
    ...vitalGenericTemplateBase.Default,
    Components: {
      ...vitalGenericTemplateBase.Default.Components,
      Content: replaceWith(HomePageSections),
      TopContent: flowIf(useIsHomePage)(
        on(VideoClean)(withLactaidHomeVideo)
      ),
      BottomWrapper: replaceWith(() => null),
    },
  },
);

export default {
  ...vitalGenericTemplateBase,
  Default,
};
