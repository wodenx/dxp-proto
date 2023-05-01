import omit from 'lodash/omit';
import { withNodeKey, withDefaultContent, withNode } from '@bodiless/core';
import {
  as, replaceWith, Fragment, flowIf, not, on, Img, addProps, Div, withDesign, removeClasses,
} from '@bodiless/fclasses';
import { asSchemaSource, WithProductSchema } from '@bodiless/schema-org';
import { vitalGenericTemplate, TemplateNodeKeys } from '@bodiless/vital-templates';
import { vitalButtons, asButtonToken } from '@bodiless/vital-buttons';
import { vitalImage } from '@bodiless/vital-image';
import {
  vitalColor, vitalTextDecoration, vitalTypography, vitalFontSize,
} from '@bodiless/vital-elements';
import { vitalEditorPlain, vitalRichText, withAutoSuperscript } from '@bodiless/vital-editors';
import { asBreadcrumbsToken } from '@bodiless/vital-navigation';

import { dxpLayout } from '@kenvue/dxp-components';

import { asPDPTemplateToken } from '../PDPTemplateClean';
import { withPDPContextProvider } from '../PDPTemplateContext';
import dxpSection from './dxpPDPSection';
import { dxpJumpLinks } from '../../JumpLinks';
import {
  useProductTitleContent,
  useProductDescriptionContent,
  useProductImageContent,
  useHasDescription,
} from './dxpPDPContent';

const dxpPDPBreadcrumbs = asBreadcrumbsToken({
  Theme: {
    Item: 'font-gotham',
  }
});

const dxpButtons = {
  WhereToBuy: asButtonToken({
    ...vitalButtons.WhereToBuyWithoutIcon,
    Spacing: {
      ...vitalButtons.WhereToBuyWithoutIcon.Spacing,
      Wrapper: 'p-3',
    },
    Theme: {
      ...vitalButtons.WhereToBuyWithoutIcon.Theme,
      Wrapper: as(
        'bg-interactive-primary-active hover:bg-interactive-primary-hover rounded',
        vitalColor.TextWhite,
        vitalTextDecoration.Bold,
        vitalTextDecoration.Uppercase,
        vitalFontSize.Base,
      ),
      Body: removeClasses('xl:hidden'),
    }
  })
};

const Default = asPDPTemplateToken({
  ...vitalGenericTemplate.Generic,
  Core: {
    PageWrapper: withPDPContextProvider,
    ProductTitle: withAutoSuperscript('®™©', 'align-baseline'),
  },
  Meta: {
    title: 'Product Detail Listing',
  },
  Behavior: {
    ProductDescription: flowIf(not(useHasDescription))(
      as('hidden'),
    ),
  },
  Components: {
    ...vitalGenericTemplate.Generic.Components,
    PageWrapper: dxpLayout.Default,
    TopContent: replaceWith(Fragment),
    ProductImage: vitalImage.Plain,
    ProductDescription: vitalRichText.Default,
    ProductTitle: vitalEditorPlain.Default,
    JumpLinks: dxpJumpLinks.PDPJumpLinks,
    MoreToKnowSection: dxpSection.MoreToKnow,
    FAQSection: dxpSection.Faq,
    ProductRatingsWrapper: on(Div)('mb-4'),
    ProductRatings: on(Img)(addProps({
      src: 'https://svgshare.com/i/sTg.svg',
      alt: 'Stars with 4.1 rating, out of 5 max.',
      title: 'Rating stars',
    })),
    ProductWTBButtonWrapper: on(Div)('mb-4'),
    ProductWTBButton: dxpButtons.WhereToBuy,
  },
  Layout: {
    ContentWrapper: 'flex flex-wrap',
    ProductImageWrapper: 'w-full lg:w-1/2',
    ProductDetailWrapper: 'w-full lg:w-1/2 lg:grow',
    JumpLinksWrapper: 'w-full lg:w-screen'
  },
  Spacing: {
    ...vitalGenericTemplate.Generic.Spacing,
    JumpLinksWrapper: 'lg:px-36 py-2  mt-10 lg:-ml-36',
    ContentWrapper: 'mb-4',
    ProductImageWrapper: 'lg:pr-2',
    ProductDetailWrapper: 'lg:pl-2 pt-4 lg:pt-0',
    ProductTitleWrapper: 'mb-4',
    PageWrapper: withDesign({
      ContainerWrapper: 'pb-10 -mb-10'
    }),
  },
  Theme: {
    Breadcrumb: dxpPDPBreadcrumbs,
    PageWrapper: withDesign({
      ContainerWrapper: 'bg-primary-page-bg'
    }),
    JumpLinksWrapper: vitalColor.BgPrimaryCard,
    ProductTitleWrapper: omit(vitalTypography.H1, 'Spacing'),
    ProductDescription: omit(vitalTypography.Body, 'Spacing'),
  },
  Schema: {
    ProductImage: withNodeKey(TemplateNodeKeys.Image),
    ProductDescription: withNodeKey(TemplateNodeKeys.Description),
    ProductTitle: withNodeKey(TemplateNodeKeys.Title),
    ProductEyebrow: withNodeKey(TemplateNodeKeys.Eyebrow),
    PageWrapper: as(withNode, withNodeKey('content')),
  },
  SEO: {
    ContentWrapper: WithProductSchema,
    ProductImage: asSchemaSource('product-image'),
    ProductTitleWrapper: asSchemaSource('product-name'),
    ProductDescriptionWrapper: asSchemaSource('product-description'),
  },
  Content: {
    ProductImage: withDefaultContent(useProductImageContent),
    ProductTitle: withDefaultContent(useProductTitleContent),
    ProductDescription: withDefaultContent(useProductDescriptionContent),
  }
});

export default {
  Default,
};
