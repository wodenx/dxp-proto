import { asTokenGroup, ColorMeta, vitalColorBase } from '@bodiless/vital-elements';

export default asTokenGroup(ColorMeta)({
  ...vitalColorBase,
  BgPrimaryBrand: 'bg-primary-brand',
  TextPrimaryBrand: 'text-primary-brand',
  BgPrimaryCard: 'bg-primary-card-bg',
  BgPrimaryPage: 'bg-primary-page-bg',
  BgPrimaryDivider: 'bg-primary-divider',
  TextPrimaryDivider: 'text-primary-divider',
  TextPrimaryBodyCopy: 'text-primary-body-copy',
  TextPrimaryHeaderCopy: 'text-primary-header-copy',
  BgSecondaryBrand: 'bg-secondary-background',
  BgSecondaryFooter: 'bg-secondary-footer-bg',
  BgPrimaryInteractive: 'bg-interactive-primary',
  BorderPrimaryInteractive: 'border-interactive-primary',
  TextPrimaryInteractive: 'text-interactive-primary hover:text-interactive-primary-hover active:text-interactive-primary-active',
  TextPrimaryInteractiveNoHover: 'text-interactive-primary active:text-interactive-primary-active',
  TextPrimaryInteractiveHover: 'hover:text-interactive-primary-hover',
  TextPrimaryInteractiveSelected: 'selected:text-interactive-primary-selected',
});
