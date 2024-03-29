import { asTokenGroup, ColorMeta } from '@bodiless/vital-elements';

export default asTokenGroup(ColorMeta)({
  BgPrimaryBrand: 'bg-primary-brand',
  TextPrimaryBrand: 'text-primary-brand',
  BgPrimaryCard: 'bg-primary-card-bg',
  BgPrimaryPage: 'bg-primary-page-bg',
  BgPrimaryInteractive: 'bg-interactive-primary',
  BorderPrimaryInteractive: 'border-interactive-primary',
  TextPrimaryInteractive: 'text-interactive-primary hover:text-interactive-primary-hover active:text-interactive-primary-active',
  TextPrimaryInteractiveNoHover: 'text-interactive-primary active:text-interactive-primary-active',
  TextPrimaryInteractiveHover: 'hover:text-interactive-primary-hover',
  TextPrimaryInteractiveSelected: 'selected:text-interactive-primary-selected',
  TextSecondaryInteractive: 'text-interactive-secondary',
  WithTextPrimaryInteractiveDisabled: 'text-opacity-60',
  BgPrimaryDivider: 'bg-primary-divider',
  TextPrimaryDivider: 'text-primary-divider',
  TextPrimaryBodyCopy: 'text-primary-body-copy',
  TextPrimaryHeaderCopy: 'text-primary-header-copy',
  BgSecondaryFooter: 'bg-secondary-footer-bg',
  BgSecondaryFooterSignUp: 'bg-secondary-footer-bg-signup',
  TextPrimaryFooterCopy: 'text-primary-footer-copy',
  TextSecondaryEyebrow: 'text-secondary-eyebrow',
  BgSecondaryTable: 'bg-secondary-table',
  BgSecondaryTableRowColumn: 'bg-secondary-table-interactive',
  BgSecondaryTableInteractive: 'hover:bg-secondary-table-interactive',
  BorderGrid: 'border-secondary-table',
  BorderSecondarySeparator: 'border-secondary-separator',
  BorderSecondarySearch: 'border-secondary-search',
  BgWhite: 'bg-white',
  TextWhite: 'text-white',
  TextButtonSelected: 'text-secondary-button-selected',
  BgButtonSelected: 'bg-secondary-button-selected',
  BorderButtonSelected: 'border-secondary-button-selected',
});
