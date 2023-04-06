import { withNode } from '@bodiless/core';
import { asFluidToken } from '@bodiless/vital-elements';

const Default = asFluidToken({
  Schema: {
    _: withNode,
  }
});

export default { Default };
