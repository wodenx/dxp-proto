import React from 'react';
import { vitalTypography, vitalSpacing, vitalTextDecoration } from '@bodiless/vital-elements';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import {
  flowHoc, H2, replaceWith, as, Div, Textarea,
} from '@bodiless/fclasses';
import { MarkdownClean, asMarkownToken } from '@kenvue/dxp-text';
import { useMarkownTextContext, withChildrenFromContext, withMarkownTextProvider } from './MarkdownTextContext';

export const Default = asMarkownToken({
  Theme: {
    Link: vitalTypography.Link,
    Paragraph: vitalSpacing.Gutter,
    Bold: vitalTextDecoration.Bold,
  },
});

export const listerineMarkdown = {
  Default,
};

const TextAreaBase = (props: any) => {
  const { text, setText } = useMarkownTextContext();
  return (
    <Textarea
      name="MarkdownInput"
      defaultValue={text}
      onChange={(e:any) => setText(e.target.value)}
      {...props}
    />
  );
};

const TextProvider = as(withMarkownTextProvider)(Div);
const Subtitle = as(vitalTypography.H2, 'pt-8')(H2);
const TextArea = as('w-full p-5 bg-secondary-footer-bg text-white min-h-[400px]')(TextAreaBase);
const MarkdownDefault = as(
  listerineMarkdown.Default,
  withChildrenFromContext,
)(MarkdownClean);

const Examples = () => (
  <TextProvider>
    <Subtitle>Markdown Text Input</Subtitle>
    <TextArea />
    <Subtitle>Markdown Result</Subtitle>
    <MarkdownDefault />
  </TextProvider>
);

export const Markdown = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: flowHoc.meta.term('Token')('Markown'),
  Content: {
    Title: replaceWith(() => <>Markdown Examples</>),
    Description: replaceWith(() => null),
    Examples: replaceWith(Examples),
  },
});
