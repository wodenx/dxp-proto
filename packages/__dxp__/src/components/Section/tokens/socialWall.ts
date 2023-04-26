import {
  replaceWith, Div, on, addProps, removeClasses, as,
} from '@bodiless/fclasses';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import { vitalEditorPlain } from '@bodiless/vital-editors';
import { LinkClean } from '@bodiless/vital-link';
import { asSectionToken, dxpSectionBase } from '@kenvue/dxp-section';
import { listerineTypography } from '../../Typography';
import { listerineColor } from '../../Color';
import { listerineFontSize } from '../../FontSize';

const SocialWall = asSectionToken({
  ...dxpSectionBase.Default,
  Components: {
    Title: vitalEditorPlain.Default,
    LinkWrapper: replaceWith(Div),
    Link: on(LinkClean)(listerineTypography.Link),
    Description: replaceWith(() => null),
  },
  Layout: {
    ...dxpSectionBase.Default.Layout,
    Wrapper: 'block relative',
    LinkWrapper: 'static md:absolute md:top-10 md:right-0',
  },
  Content: {
    Content: addProps({ children: 'Social Wall' }),
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
      'vital-external-link',
    ),
    Description: as(
      listerineFontSize.Base,
      'font-gotham',
      'font-light',
    ),
  },
});

export default {
  SocialWall,
};
