import { TokenCollection } from '@bodiless/fclasses';
import { AccordionComponents, vitalAccordion } from '@bodiless/vital-accordion';

export interface ListerineAccordionTC extends TokenCollection<AccordionComponents, {}> { }
const listerineAccordion: ListerineAccordionTC = {
  ...vitalAccordion,
};

export default listerineAccordion;
