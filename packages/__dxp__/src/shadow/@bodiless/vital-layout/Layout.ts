// TODO This file should move to Listerine package and shadow

import { on } from '@bodiless/fclasses';
import {
  asLayoutToken,
  vitalLayoutBase,
  vitalHeader,
} from '@bodiless/vital-layout';
import HeaderClean from '../../../components/Layout/Header/HeaderClean';

const Default = asLayoutToken({
  ...vitalLayoutBase.Default,
  Components: {
    ...vitalLayoutBase.Default.Components,
    // @Sam The Header below should be removed and follow pattern for Footer...
    Header: on(HeaderClean)(vitalHeader.Default),
  },
});

export default {
  Default,
};
