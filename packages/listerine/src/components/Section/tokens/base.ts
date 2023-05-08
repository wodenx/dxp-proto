import { asSectionToken, dxpSectionBase } from '@kenvue/dxp-section';

const Default = asSectionToken({
  ...dxpSectionBase.Default,
  Layout: {
    ...dxpSectionBase.Default.Layout,
    Wrapper: 'block',
  },
});

export default {
  Default
};
