import { vitalCopyrightRow, asCopyrightRowToken } from '@bodiless/vital-layout';
import { BlockEditorPlainClean } from '@bodiless/vital-editors';
import { vitalLink } from '@bodiless/vital-link';
import {
  on, extendDesign, addProps, withDesign, flowHoc,
  as, P, addClasses, removeClasses, replaceWith
} from '@bodiless/fclasses';
import { asElementToken } from '@bodiless/vital-elements';
import { withPrependChild } from '@bodiless/core';
import { dxpEditorPlain } from '../../EditorPlain';
import { withSbContentFromParent } from '../../../util';
import { SocialLinksClean } from '../SocialLinks/SocialLinksClean';

const dxpCopyrightRowEditorPlain = asElementToken(dxpEditorPlain.Default, {
  Compose: {
    WithDiv: addProps({ tagName: 'div' }),
  },
});

const Default = asCopyrightRowToken({
  ...vitalCopyrightRow.Default,
  Components: {
    ...vitalCopyrightRow.Default.Components,
    Wrapper: withPrependChild(
      flowHoc(
        addProps({
          children: 'Use all products as directed.'
        }),
        addClasses('text-white block mb-3 text-xs sm:hidden'),
      )(P), 'Footnote'
    ),
    SocialLinks: as(
      replaceWith(SocialLinksClean),
      withDesign({
        WrapperFacebook: vitalLink.Base,
        WrapperTikTok: vitalLink.Base,
        WrapperYouTube: vitalLink.Base,
        WrapperPinterest: vitalLink.Base,
        WrapperTwitter: vitalLink.Base,
      }),
      addClasses('flex'),
    ),
    Disclaimer: on(BlockEditorPlainClean)(dxpCopyrightRowEditorPlain),
    Copyright: on(BlockEditorPlainClean)(dxpCopyrightRowEditorPlain),
  },
  Theme: {
    ...vitalCopyrightRow.Default.Theme,
    Wrapper: flowHoc(
      removeClasses('xl:flex'),
      addClasses('flex flex-col 2xl:flex-row')
    ),
    CopyrightWrapper: 'pr-10 shrink-0',
    SocialDisclaimer: 'w-full',
    SocialLinksWrapper: removeClasses('xl:w-1/4'),
    Disclaimer: 'hidden sm:block text-xs',
    Copyright: 'text-xs',
  },
  Spacing: {
    Wrapper: 'gap-y-5 pr-5 sm:pr-0',
    SocialDisclaimer: 'py-10 lg:py-0',
    SocialLinksWrapper: 'mb-3',
    SocialLinks: flowHoc(
      addClasses('w-full'),
      withDesign({
        InnerWrapper: addClasses('w-full flex flex-row xl:mx-0 gap-x-2'),
      }),
    ),
  },
  Content: extendDesign(vitalCopyrightRow.Default.Content, {
    Disclaimer: withSbContentFromParent(),
    Copyright: withSbContentFromParent(),
  }),
});

const dxpCopyrightRow = {
  ...vitalCopyrightRow,
  Default,
};

export default dxpCopyrightRow;
