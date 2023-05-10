import {
  addClasses, addProps, flowHoc, removeClasses
} from '@bodiless/fclasses';
import { asMenuToken, vitalMenuBase } from '@bodiless/vital-navigation';

const Footer = asMenuToken({
  ...vitalMenuBase.Footer,
  Spacing: {
    Title: 'mt-3 lg:mt-0',
  },
  Theme: {
    ...vitalMenuBase.Footer.Theme,
    Item: flowHoc(
      removeClasses('border-vital-secondary-separator uppercase'),
      addClasses('block text-[23px] leading-8 font-gotham font-bold text-primary-header-copy lg:text-[26px] lg:mr-6'),
    ),
    Title: flowHoc(
      removeClasses('lg:text-xl'),
      addClasses('block text-[23px] leading-8 font-gotham font-bold text-primary-header-copy lg:text-[26px] lg:mr-6'),
    ),
  },
  Behavior: {
    _: addProps({ 'data-shadowed-by': 'LactaidMenu' }),
  }
});

export default {
  ...vitalMenuBase,
  Footer,
};
