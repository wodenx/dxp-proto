import { asFluidToken } from '@bodiless/vital-elements';
import { vitalPageBase } from '@bodiless/vital-templates';

const Default = asFluidToken(vitalPageBase.Default, {

});

const vitalPage: typeof vitalPageBase = {
  ...vitalPageBase,
  Default,
};

export default vitalPage;
