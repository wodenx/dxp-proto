import { vitalLink } from '@bodiless/vital-link';
import { withNodeKey } from '@bodiless/core';
import { asSocialLinksToken } from '../SocialLinksClean';

// Note: when used with the __vital__ package on vital-demo, that package takes precedence
// over this one.  This test override has no effect and just an example.

const Base = asSocialLinksToken({
  Components: {
    WrapperFacebook: vitalLink.Base,
    WrapperInstagram: vitalLink.Base,
    WrapperYouTube: vitalLink.Base,
    WrapperPinterest: vitalLink.Base,
    WrapperTwitter: vitalLink.Base,
  },
  Layout: {
    InnerWrapper: 'items-center',
  },
  Theme: {
    Wrapper: 'w-full',
    InnerWrapper: 'w-full flex flex-row justify-between lg:gap-x-5 lg:justify-start lg:xl:mx-0',
  },
  Schema: {
    WrapperFacebook: withNodeKey({ nodeKey: 'facebook', nodeCollection: 'site' }),
  }
});

const Default = asSocialLinksToken(Base);

export default {
  Base,
  Default,
};
