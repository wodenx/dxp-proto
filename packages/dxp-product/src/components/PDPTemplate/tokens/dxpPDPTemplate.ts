import omit from 'lodash/omit';
import { withNode, withNodeKey, withDefaultContent } from '@bodiless/core';
import {
  as, replaceWith, Fragment, flowIf, not,
} from '@bodiless/fclasses';
import { asSchemaSource, WithProductSchema } from '@bodiless/schema-org';
import { vitalGenericTemplate, TemplateNodeKeys } from '@bodiless/vital-templates';
import { vitalImage } from '@bodiless/vital-image';
import { vitalTypography } from '@bodiless/vital-elements';
import { vitalEditorPlain, vitalRichText, withAutoSuperscript } from '@bodiless/vital-editors';

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

const Default = asPDPTemplateToken(vitalGenericTemplate.Base, {
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
    TopContent: replaceWith(Fragment),
    ProductImage: vitalImage.Plain,
    ProductDescription: vitalRichText.Default,
    ProductTitle: vitalEditorPlain.Default,
    JumpLinks: dxpJumpLinks.PDPJumpLinks,
    MoreToKnowSection: dxpSection.MoreToKnow,
    FAQSection: dxpSection.Faq,
  },
  Layout: {
    ContentWrapper: 'flex flex-wrap',
    ProductImageWrapper: 'w-full lg:w-1/2',
    ProductDetailWrapper: 'w-full lg:w-1/2 lg:grow',
  },
  Spacing: {
    ContentWrapper: 'mb-4',
    ProductImageWrapper: 'lg:pr-2',
    ProductDetailWrapper: 'lg:pl-2 pt-4 lg:pt-0',
    ProductTitleWrapper: 'mb-4',
  },
  Theme: {
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
