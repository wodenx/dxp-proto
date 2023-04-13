import { vitalCardBase, asCardToken } from '@bodiless/vital-card';
import { flowHoc, replaceWith } from '@bodiless/fclasses';
import { listerineTypography } from '../../../Typography';
import {
  WithGreenBg,
  WithOrangeBg,
  WithPrimaryButton,
  WithPurpleBg,
  WithRedBg,
} from './Base';

const StatementBase = asCardToken(
  vitalCardBase.Basic,
  {
    Components: {
      ImageWrapper: replaceWith(() => null),
      Image: replaceWith(() => null),
    },
  },
  WithPrimaryButton,
  vitalCardBase.WithNoEyebrow,
  vitalCardBase.WithNoDescription,
);

const Statement = asCardToken(StatementBase, {
  Theme: {
    TitleWrapper: listerineTypography.LeadPromoTitle,
  },
  Layout: {
    TitleWrapper: 'lg:w-4/6',
  },
  Spacing: {
    Wrapper: 'p-7.5',
    TitleWrapper: 'mb-7.5',
  },
  Meta: flowHoc.meta.term('Sub Type')('Statement'),
});

const StatementGreen = asCardToken(Statement, WithGreenBg, {
  Meta: {
    title: 'Statement: Green',
  },
});
const StatementPurple = asCardToken(Statement, WithPurpleBg, {
  Meta: {
    title: 'Statement: Purple',
  },
});
const StatementOrange = asCardToken(Statement, WithOrangeBg, {
  Meta: {
    title: 'Statement: Orange',
  },
});
const StatementRed = asCardToken(Statement, WithRedBg, {
  Meta: {
    title: 'Statement: Red',
  },
});

export {
  StatementBase,
  Statement,
  StatementGreen,
  StatementPurple,
  StatementOrange,
  StatementRed,
};
