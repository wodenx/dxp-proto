import {
  asTokenGroup,
  TextDecorationMeta,
  vitalTextDecorationBase,
} from '@bodiless/vital-elements';

export default asTokenGroup(TextDecorationMeta)({
  ...vitalTextDecorationBase,
  Book: 'font-light',
  Black: 'font-black',
});
