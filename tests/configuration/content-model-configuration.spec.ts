import { test, expect } from '@playwright/test';
import { readJSONSync } from 'fs-extra';
import { contentTypesPath } from './setup';

const sysIgnoreFields: string[] = [
  'publishedCounter',
  'publishedVersion',
  'publishedAt',
  'updatedAt',
  'version',
  'updatedBy',
  'publishedBy'
];

test.describe('Contentful Configuration', () => {
  const snapshotTypes = readJSONSync(`${process.cwd()}/sites/listerine/config/content-model/content-model.json`).items;
  const contentfulTypes = readJSONSync(contentTypesPath);

  test('Quantity of snapshot types should be equal to contentful types', () => {
    const snapshotTypeIds = snapshotTypes.map((type) => type.sys.id).sort();
    const contentfulTypeIds = contentfulTypes.map((type) => type.sys.id).sort();
    expect(contentfulTypeIds).toStrictEqual(snapshotTypeIds);
  });

  snapshotTypes.forEach((snapshotType) => {
    const snapshotTypeId = snapshotType.sys.id;
    test(`The '${snapshotTypeId}' snapshot configuration should be consistent with contentful configuration`, async () => {
      const contentfulType = contentfulTypes.find((type: any) => snapshotTypeId === type.sys.id);
      expect(contentfulType).not.toEqual(undefined);
      expect(filterFields(contentfulType)).toStrictEqual(filterFields(snapshotType));
    });
  });
});

/* eslint-disable no-param-reassign */
const filterFields = (contentModel: any) => {
  contentModel.sys = Object.fromEntries(
    Object.entries(contentModel.sys).filter(([key]) => !sysIgnoreFields.includes(key))
  );

  return contentModel;
};
/* eslint-enable no-param-reassign */
