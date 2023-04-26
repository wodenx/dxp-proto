import { VitalPage } from './vital-page';

export class ListerineTypographyPage extends VitalPage {
  readonly linkId: string;

  constructor() {
    super('/styleguide/typography/');
    this.linkId = 'Link';
  }

  getElements(): string[] {
    return [
      'H1',
      'H2',
      'H3',
      'H4',
      'H5',
      'H6',
      'Body',
      'Eyebrow',
      'CrumbsReview',
      this.linkId
    ];
  }
}
