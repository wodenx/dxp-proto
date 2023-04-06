import React from 'react';
import {
  designable,
  Div,
  Img,
  Fragment,
} from '@bodiless/fclasses';
import { asVitalTokenSpec } from '@bodiless/vital-elements';
import { EditorPlainClean, RichTextClean } from '@bodiless/vital-editors';
import { LayoutClean } from '@bodiless/vital-layout';
import { FlowContainerClean } from '@bodiless/vital-flowcontainer';
import { BreadcrumbsClean } from '@bodiless/vital-navigation';
import { SectionClean } from '@kenvue/dxp-section';

import { JumpLinksClean } from '../JumpLinks';
import { PDPTemplateComponents, BasePDPTemplateProps } from './types';

const pdpTemplateComponents: PDPTemplateComponents = {
  PageWrapper: LayoutClean,
  GA4Helmet: Fragment,
  BreadcrumbWrapper: Div,
  Breadcrumb: BreadcrumbsClean,
  TopWrapper: Fragment,
  TopContent: Fragment,
  ContentWrapper: Div,
  ProductImageWrapper: Div,
  ProductImage: Img,
  ProductDetailWrapper: Div,
  ProductDescriptionWrapper: Div,
  ProductDescription: RichTextClean,
  ProductTitleWrapper: Div,
  ProductTitle: EditorPlainClean,
  ProductEyebrowWrapper: Div,
  ProductEyebrow: EditorPlainClean,
  ProductMoreInfo: Fragment,
  BottomWrapper: Div,
  JumpLinks: JumpLinksClean,
  MoreToKnowSection: SectionClean,
  FAQSection: SectionClean,
  BottomContent: FlowContainerClean,
};

const PDPTemplateBase = (props: BasePDPTemplateProps) => {
  const { components: C, ...rest } = props;
  return (
    <C.PageWrapper {...rest}>
      <C.GA4Helmet />
      <C.BreadcrumbWrapper>
        <C.Breadcrumb />
      </C.BreadcrumbWrapper>
      <C.TopWrapper>
        <C.TopContent />
      </C.TopWrapper>
      <C.ContentWrapper>
        <C.ProductImageWrapper>
          <C.ProductImage />
          <C.ProductMoreInfo />
        </C.ProductImageWrapper>
        <C.ProductDetailWrapper>
          <C.ProductEyebrowWrapper>
            <C.ProductEyebrow />
          </C.ProductEyebrowWrapper>
          <C.ProductTitleWrapper>
            <C.ProductTitle />
          </C.ProductTitleWrapper>
          <C.ProductDescriptionWrapper>
            <C.ProductDescription />
          </C.ProductDescriptionWrapper>
        </C.ProductDetailWrapper>
      </C.ContentWrapper>
      <C.BottomWrapper>
        <C.JumpLinks />
        <C.MoreToKnowSection />
        <C.FAQSection />
        <C.BottomContent />
      </C.BottomWrapper>
    </C.PageWrapper>
  );
};

const PDPTemplateClean = designable(pdpTemplateComponents, 'PDP Template')(PDPTemplateBase);

const asPDPTemplateToken = asVitalTokenSpec<PDPTemplateComponents>();

export { asPDPTemplateToken };

export default PDPTemplateClean;
