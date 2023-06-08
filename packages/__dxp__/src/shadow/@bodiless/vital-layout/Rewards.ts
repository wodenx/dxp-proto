import {
  flowIf,
  withProps,
} from '@bodiless/fclasses';
import { useLanguageContext } from '@bodiless/i18n';
import {
  asRewardsToken,
  vitalRewardsBase
} from '@bodiless/vital-layout';

const isCurrentLanguageEs = () => useLanguageContext().getCurrentLanguage().name === 'es';

const Default = asRewardsToken(vitalRewardsBase.Default, {
  Content: {
    Brand: flowIf(isCurrentLanguageEs)(
      withProps({
        children: 'Brand ES',
      }),
    ),
  },
});

export default {
  ...vitalRewardsBase,
  Default,
};
