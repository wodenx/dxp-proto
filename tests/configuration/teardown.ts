import { rmSync } from 'fs-extra';
import { contentTypesPath } from './setup';

export default async function teardown() {
  rmSync(contentTypesPath);
}
