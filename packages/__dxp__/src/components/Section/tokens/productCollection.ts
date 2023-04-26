import {
  as, on, removeClasses, P, replaceWith, Div,
} from '@bodiless/fclasses';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import { asListToken } from '@bodiless/vital-list';
import { vitalEditorPlain } from '@bodiless/vital-editors';
import { LinkClean } from '@bodiless/vital-link';
import { CardClean } from '@bodiless/vital-card';
import { asSectionToken, dxpSectionBase } from '@kenvue/dxp-section';
import { dxpProductSection } from '@kenvue/dxp-product';
import { listerineTypography } from '../../Typography';
import { listerineColor } from '../../Color';
import { listerineFontSize } from '../../FontSize';
import { listerineCardProduct } from '../../Card';

const WithListerineCardProductCollection = asListToken({
  ...dxpProductSection.WithProductCollectionList,
  Components: {
    Title: on(CardClean)(listerineCardProduct.ProductCategory),
  },
  Layout: {
    Item: 'w-full md:w-1/4 pr-0 md:pr-4 last:pr-0',
  },
});

const ProductCollection = asSectionToken({
  ...dxpSectionBase.Default,
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
    ...dxpSectionBase.Default.Layout,
    Wrapper: 'block relative',
    LinkWrapper: 'static md:absolute md:top-10 md:right-0',
  },
  Theme: {
    ...dxpSectionBase.Default.Theme,
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
    ...dxpSectionBase.Default.Spacing,
    DescriptionWrapper: 'mb-4',
    LinkWrapper: 'mb-4 md:mb-0',
  },
  Content: {
    ...dxpSectionBase.Default.Content,
    Content: WithListerineCardProductCollection,
  },
});

export default {
  ProductCollection,
};
