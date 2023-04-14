/* eslint-disable import/no-extraneous-dependencies */
import { createClient } from 'contentful-management';
import { writeFileSync } from 'fs-extra';

export const contentTypesPath = `${__dirname}/contentful-types.json`;

export default async function setup() {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID as string);
  const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT_ID as string);

  const contentTypes = await environment.getContentTypes();

  writeFileSync(contentTypesPath, JSON.stringify(contentTypes.items), {
    encoding: 'utf-8',
  });
}
