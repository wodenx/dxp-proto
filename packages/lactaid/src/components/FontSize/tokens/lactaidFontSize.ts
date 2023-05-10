import {
  asTokenGroup,
  FontSizeMeta,
  vitalFontSizeBase,
} from '@bodiless/vital-elements';

export default asTokenGroup(FontSizeMeta)({
  ...vitalFontSizeBase,
  XXS: 'text-m-xxs lg:text-xxs',
  XS: 'text-m-xs lg:text-xs',
  SM: 'text-m-sm lg:text-sm',
  Base: 'text-m-base lg:text-base',
  LG: 'text-m-lg lg:text-lg',
  XL: 'text-m-xl lg:text-xl',
  XXL: 'text-m-2xl lg:text-2xl',
  XXXL: 'text-m-3xl lg:text-3xl',
});
