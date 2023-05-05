# Automated test suites

## Regression

Contentful integration, links crawler and visual testing.

To run tests use the following command from the `tests/e2e` folder after filling `...` placeholders:

```
./gradlew runStories -Pvividus.variables.contentful-token=... \
                     -Pvividus.variables.github-token=... \
                     -Pvividus.selenium.grid.username=... \
                     -Pvividus.selenium.grid.password=... \
                     -Pvividus.ui.visual.applitools.execute-api-key=... \
                     -Pvividus.ui.visual.applitools.read-api-key=... \
                     -Pvividus.configuration-set.active=stage
```

Please see [View report execution](https://docs.vividus.dev/vividus/latest/getting-started.html#_view_the_test_execution_report) steps to open the report.

## Smoke

Visual and functional tests for components.

Required environment variables:

* `APPLITOOLS_API_KEY`

To run tests use the following command from the project root:

```
APPLITOOLS_BATCH_ID=`uuidgen` PLAYWRIGHT_SUITE=configuration npx playwright test
```

or 

```
npm run test:smoke
```

Use the following command to check the report:

```
npx playwright show-report
```

## Configuration

Verify consistency of content model configuration.

Required environment variables:

* `CONTENTFUL_ACCESS_TOKEN`
* `CONTENTFUL_SPACE_ID`
* `CONTENTFUL_ENVIRONMENT_ID`

To run tests use the following command from the project root:

```
APPLITOOLS_BATCH_ID=`uuidgen` PLAYWRIGHT_SUITE=smoke npx playwright test
```

Use the following command to check the report:

```
npx playwright show-report
```
