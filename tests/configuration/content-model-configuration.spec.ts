import { test, expect } from '@playwright/test';
import { readJSONSync } from 'fs-extra';
import { contentTypesPath } from './setup';

test.describe('Contentful Configuration', () => {
  const snapshotTypes = readJSONSync(`${process.cwd()}/sites/__dxp__/config/content-model/content-model.json`).items;
  const contentfulTypes = readJSONSync(contentTypesPath);

  test('Quantity of snapshot types should be equal to contentful types', () => {
    const snapshotTypeIds = snapshotTypes.map((type) => type.sys.id).sort();
    const contentfulTypeIds = contentfulTypes.map((type) => type.sys.id).sort();
    expect(contentfulTypeIds).toStrictEqual(snapshotTypeIds);
  });

  snapshotTypes.forEach((snapshotType) => {
    const snapshotTypeId = snapshotType.sys.id;
    test(`The ${snapshotTypeId} snapshot configuration should be consistent with contentful configuration`, async () => {
      const contentfulType = contentfulTypes.find((type: any) => snapshotTypeId === type.sys.id);
      expect(contentfulType).not.toEqual(undefined);
      expect(contentfulType).toStrictEqual(snapshotType);
    });
  });
});
