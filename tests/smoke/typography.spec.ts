import { expect, test } from '@playwright/test';
import { ListerineTypographyPage } from './pages/listerine-typography';

test.describe('Listerine Typography', () => {
  test('Should click on Link typography element', async ({ page }) => {
    const typographyPage: ListerineTypographyPage = new ListerineTypographyPage();
    await typographyPage.open(page);
    const element = page.getByTestId(typographyPage.linkId)
      .locator('a');
    await element.click();
    expect(page.url()).toBe('https://example.com/');
  });
});
