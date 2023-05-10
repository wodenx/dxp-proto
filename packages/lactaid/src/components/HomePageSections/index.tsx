import React from 'react';
import { useNode } from '@bodiless/core';
import { asSectionToken, SectionClean } from '@kenvue/dxp-section';
import {
  flowHoc, addClasses, addProps, as, removeClasses,
} from '@bodiless/fclasses';
import { asVideoToken, vitalVideo } from '../Video';
import { lactaidSection, lactaidTypography } from '..';

const WithLactaidSectionProductOurFavorites = asSectionToken({
  Layout: {
    Content: flowHoc(
      addClasses('block w-full grid gap-1 gap-y-5 lg:grid-cols-4'),
      addProps({
        products: [
          '4sBlRucCv54vLYdzvtI8g3', '5EMSutNUu7ekZcMdwhtjnz', '6Iz936uVJrYaQdeDavRRki', '6i12gn672LefAkAMS6MMWH',
        ],
      }),
    ),
  },
  Theme: {
    Wrapper: addClasses('py-10 mx-5'),
    Title: removeClasses('uppercase'),
    Link: as(
      lactaidTypography.Link,
      'cursor-pointer',
    ),
  },
  Content: {
    Title: addProps({ children: 'Get Your Favorite LACTAID® Products'}),
    Link: addProps({ children: 'View All Products'}),
  },
});

const LactaidSectionProductOurFavorites = as(
  lactaidSection.ProductCards,
  WithLactaidSectionProductOurFavorites,
)(SectionClean);

const withLactaidVideo = asVideoToken({
  Content: {
    Video: addProps({
      src: 'https://con-na-lactaid-us-en.jnjnab12d6-dev3.jjc-devops.com/sites/lactaid_us/files/lactaid_longpourcoffee.mp4'
    }),
  },
});

export const withLactaidHomeVideo = as(
  vitalVideo.Default,
  vitalVideo.withAutoPlay,
  vitalVideo.withLoop,
  vitalVideo.withPlaysInline,
  vitalVideo.withLactaidHomeHero,
  withLactaidVideo,
);

const useIsHomePage = () => (useNode().node.pagePath === '/');

export default () => (
  useIsHomePage() ? (
    <>
      <LactaidSectionProductOurFavorites />
    </>
  )
    : (
      <>Main Content</>
    )
);
