import {
  asTokenGroup,
  SpacingMeta,
  vitalSpacingBase,
} from '@bodiless/vital-elements';

export default asTokenGroup(SpacingMeta)({
  ...vitalSpacingBase,
  WithSiteMargin: 'mx-2.5 md:mx-8 lg:mx-36',
  WithSiteXLConstraint: '',
  Gutter: 'p-0.5 md:p-2 lg:p-3',
});
