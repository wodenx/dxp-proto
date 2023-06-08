import React, {
  ComponentType, HTMLProps, FC, useMemo
} from 'react';
import ReactMarkdown, {
  Options as ReactMarkdownProps,
  Components as ReactMarkdownComponents,
} from 'react-markdown';
import {
  A, HOC, DesignableComponentsProps, designable, P, Strong, Sup,
} from '@bodiless/fclasses';
import { asVitalTokenSpec } from '@bodiless/vital-elements';

import { superscriptPlugin } from './plugins';

type MarkdownComponents = {
  Link: ComponentType<HTMLProps<HTMLAnchorElement>>,
  Paragraph: ComponentType<HTMLProps<HTMLParagraphElement>>,
  Bold: ComponentType<HTMLProps<HTMLElement>>,
  SuperScript: ComponentType<HTMLProps<HTMLElement>>,
};

export const withMarkdownComponents = (
  components: ReactMarkdownComponents
): HOC<{}, ReactMarkdownProps> => Component => {
  const WithComponents = (props: any) => {
    const { components: renderersProp = {}, ...rest } = props;
    return <Component {...rest} components={{...renderersProp, ...components }} />;
  };
  return WithComponents;
};

const createLinkRenderer = (components: Pick<MarkdownComponents, 'Link'>): ReactMarkdownComponents => ({
  a: (node) => {
    const { Link } = components;
    const { href, children, ...rest } = node;
    return <Link href={href} {...rest}>{children}</Link>;
  },
});

const createParagraphRenderer = (components: Pick<MarkdownComponents, 'Paragraph'>): ReactMarkdownComponents => ({
  p: (node) => {
    const { Paragraph } = components;
    const { children, ...rest } = node;
    return <Paragraph {...rest}>{children}</Paragraph>;
  },
});

const createBoldRenderer = (components: Pick<MarkdownComponents, 'Bold'>): ReactMarkdownComponents => ({
  strong: (node) => {
    const { Bold } = components;
    const { children, ...rest } = node;
    return <Bold {...rest}>{children}</Bold>;
  },
});

const createSuperScriptRenderer = (components: Pick<MarkdownComponents, 'SuperScript'>): ReactMarkdownComponents => ({
  sup: (node) => {
    const { SuperScript } = components;
    const { children, ...rest } = node;
    return <SuperScript {...rest}>{children}</SuperScript>;
  },
});

const markdownComponents: MarkdownComponents = {
  Link: A,
  Paragraph: P,
  Bold: Strong,
  SuperScript: Sup,
};

type DesignableMarkdownProps = ReactMarkdownProps & DesignableComponentsProps<MarkdownComponents>;

const asDesignableMarkdown = (Markdown: ComponentType<ReactMarkdownProps>) => {
  const DesignableMarkdown: FC<DesignableMarkdownProps> = props => {
    const { components, ...rest } = props;
    const finalComponents = useMemo(() => ({
      ...components,
      ...createLinkRenderer(components),
      ...createParagraphRenderer(components),
      ...createBoldRenderer(components),
      ...createSuperScriptRenderer(components),
    }), [components]);
    return <Markdown remarkPlugins={[superscriptPlugin]} {...rest} components={finalComponents} />;
  };
  return designable(markdownComponents, 'Markdown')(DesignableMarkdown);
};

const MarkdownClean = asDesignableMarkdown(ReactMarkdown as ComponentType<ReactMarkdownProps>);
const asMarkownToken = asVitalTokenSpec<MarkdownComponents>();

export default MarkdownClean;
export { asMarkownToken };
