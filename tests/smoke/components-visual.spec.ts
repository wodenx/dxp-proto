import { Locator, test as baseTest } from '@playwright/test';
import {
  BatchInfo, Configuration, VisualGridRunner, BrowserType, DeviceName, ScreenOrientation, Eyes,
  Target, IosDeviceName, AndroidDeviceName, TestResults, SessionUrls, Driver, TestFailedError,
} from '@applitools/eyes-playwright';
import { existsSync, mkdirSync, writeFileSync } from 'fs-extra';
import { ListerineTypographyPage } from './pages/listerine-typography';
import { VitalPage } from './pages/vital-page';

const parameters: VisualParameters[] = [
  {
    suite: 'Typography',
    page: new ListerineTypographyPage()
  }
];

const test = baseTest.extend< { eyes: Eyes } >({
  eyes: async ({ page, }, use) => {
    const runner: VisualGridRunner = new VisualGridRunner({ testConcurrency: 5 });

    const configuration: Configuration = new Configuration();
    const serverUrl: string = 'https://jnjeyesapi.applitools.com';

    const batch: BatchInfo = new BatchInfo({
      id: process.env.APPLITOOLS_BATCH_ID,
      name: process.env.APPLITOOLS_BATCH_NAME??'Listerine Components Visual'
    });
    configuration.setBatch(batch);
    configuration.setApiKey(process.env.APPLITOOLS_API_KEY as string);
    configuration.setServerUrl(serverUrl);

    // Desktop
    configuration.addBrowser(1920, 1080, BrowserType.CHROME);

    // Mobile
    configuration.addMobileDevice(IosDeviceName.iPhone_14, ScreenOrientation.PORTRAIT);
    configuration.addDeviceEmulation(AndroidDeviceName.Galaxy_S22, ScreenOrientation.PORTRAIT);

    // Tables
    configuration.addMobileDevice(IosDeviceName.iPad_9, ScreenOrientation.PORTRAIT);
    configuration.addDeviceEmulation(DeviceName.Galaxy_Tab_S7, ScreenOrientation.PORTRAIT);

    const eyes: Eyes = new Eyes(runner, configuration);

    await eyes.open(page, 'DxP - Listerine', test.info().title);

    await use(eyes);

    const results: TestResults = await eyes.close(false);

    const {outputDir} = test.info();
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir);
    }

    const appUrls: SessionUrls = results.getAppUrls();
    const testInfoPath: string = `${outputDir}/visual-test-${results.getId()}.txt`;
    writeFileSync(testInfoPath, `${appUrls.getBatch()}\n`);

    if (!results.isPassed()) {
      throw new TestFailedError(results);
    }
  }
});

parameters.forEach((param) => {
  test.describe(param.suite, () => {
    const vitalPage: VitalPage = param.page;
    vitalPage.getElements().forEach((elementId) => {
      /* eslint-disable jest/expect-expect */
      test(`${param.suite} - ${elementId}`, async ({ page, eyes }) => {
        await vitalPage.open(page);

        const element: Locator = page.getByTestId(elementId)
          .locator(vitalPage.itemContentSelector);

        await eyes.check(elementId, Target.region(element).strict().fully());
      });
      /* eslint-enable jest/expect-expect */
    });
  });
});

type VisualParameters = {
  suite: string,
  page: VitalPage,
};
