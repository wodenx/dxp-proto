import { vitalTypography } from '@bodiless/vital-elements';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import {
  flowHoc, H2, replaceWith, as, Ul,
} from '@bodiless/fclasses';
import React from 'react';

const Subtitle = as(vitalTypography.H2, 'pt-8')(H2);
const List = as('pt-4')(Ul);

const Examples = () => (
  <>
    <Subtitle>Global Elements</Subtitle>
    <List>
      <li><a href="/styleguide/layout">Layout</a></li>
      <li><a href="/styleguide/typography">Typography</a></li>
    </List>
    <Subtitle>Components</Subtitle>
    <List>
      <li><a href="/styleguide/buttons">Buttons</a></li>
      <li><a href="/styleguide/images">Images</a></li>
      <li><a href="/styleguide/video">Video</a></li>
      <li><a href="/styleguide/card">Card</a></li>
      <li><a href="/styleguide/accordion">Accordion</a></li>
    </List>
  </>
);

export const Home = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: flowHoc.meta.term('Token')('Default'),
  Content: {
    Title: replaceWith(() => <>Style Guide</>),
    Description: replaceWith(() => null),
    Examples: replaceWith(Examples),
  },
});
