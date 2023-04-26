import { Page } from '@playwright/test';

export abstract class VitalPage {
  readonly relativeUrl: string;

  readonly itemContentSelector: string;

  constructor(relativeUrl: string) {
    this.relativeUrl = relativeUrl;
    this.itemContentSelector = '[data-layer-region="StyleGuideExamples:ItemContent"]';
  }

  async open(page: Page): Promise<void> {
    await page.goto(this.relativeUrl);
    await page.waitForLoadState();
  }

  abstract getElements(): string[];
}
