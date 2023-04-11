import { on } from '@bodiless/fclasses';
import {
  asLayoutToken,
  vitalLayoutBase,
  vitalHeader,
} from '@bodiless/vital-layout';
import HeaderClean from '../../../components/Layout/Header/HeaderClean';

const Default = asLayoutToken(vitalLayoutBase.Default, {
  Components: {
    ...vitalLayoutBase.Default.Components,
    Header: on(HeaderClean)(vitalHeader.Default),
  },
});

export default {
  Default,
};
