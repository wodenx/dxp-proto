import {
  as, on, removeClasses, P, replaceWith, Div,
} from '@bodiless/fclasses';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import { vitalEditorPlain } from '@bodiless/vital-editors';
import { LinkClean } from '@bodiless/vital-link';
import { asSectionToken } from '@kenvue/dxp-section';
import { dxpProductSectionBase as dxpProductSection } from '@kenvue/dxp-product';
import { listerineTypography } from '../../Typography';
import { listerineColor } from '../../Color';
import { listerineFontSize } from '../../FontSize';

const ProductCollectionCards = asSectionToken({
  ...dxpProductSection.ProductCollectionCards,
  Components: {
    ...dxpProductSection.ProductCollectionCards.Components,
    Title: vitalEditorPlain.Default,
    LinkWrapper: replaceWith(Div),
    Link: on(LinkClean)(listerineTypography.Link),
    DescriptionWrapper: replaceWith(Div),
    Description: replaceWith(P),
  },
  Layout: {
    ...dxpProductSection.ProductCollectionCards.Layout,
    Wrapper: 'block relative',
    LinkWrapper: 'static md:absolute md:top-10 md:right-0',
  },
  Theme: {
    ...dxpProductSection.ProductCollectionCards.Theme,
    Title: as(
      vitalTextDecoration.Uppercase,
      listerineTypography.H2,
      vitalTextDecoration.Medium,
      removeClasses('font-bold'),
    ),
    Link: as(
      listerineColor.TextPrimaryInteractive,
      'text-interactive-primary-active',
    ),
    Description: as(
      listerineFontSize.Base,
      'font-gotham',
      'font-light',
    ),
  },
  Spacing: {
    ...dxpProductSection.ProductCollectionCards.Spacing,
    DescriptionWrapper: 'mb-4',
    LinkWrapper: 'mb-4 md:mb-0',
  },
});

export default {
  ProductCollectionCards,
};
