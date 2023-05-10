import {

  addClasses,
  addProps, as, removeClasses,
} from '@bodiless/fclasses';
import { asMenuToken, vitalMenuBase } from '@bodiless/vital-navigation';
import { listerineTypography } from '../../../components/Typography';

const Footer = asMenuToken(vitalMenuBase.Footer, {
  ...vitalMenuBase.Footer,
  Spacing: {
    Title: 'mt-3 lg:mt-0',
  },
  Theme: {
    ...vitalMenuBase.Footer.Theme,
    Item: as(
      addClasses('block mb-7.5 md:mb-0 lg:last:border-0'),
      removeClasses('last:pb-0 last:border-0'),
    ),
    Title: as(
      listerineTypography.H4,
      removeClasses('lg:text-xl text-primary-header-copy'),
      'text-white lg:mr-6 block normal-case',
    ),
  },
  Behavior: {
    _: addProps({ 'data-shadowed-by': 'ListerineMenu' }),
  }
});

export default {
  ...vitalMenuBase,
  Footer,
};
