Lifecycle:
Examples:
{transformer=FROM_HEADLESS_CRAWLING, column=relative-url}
{transformer=APPLY_URL_NORMALIZATION}
{transformer=DISTINCTING, byColumnNames=relative-url}
{transformer=FILTERING, column.relative-url=^((?!\/(accordion|buttons|video|images|where-to-buy)).)*$}

Scenario: Check performance on site page
Meta: @testCaseId JEPZ-491
When I perform Lighthouse full scan of `${app-url}<relative-url>` page:
|metric                  |rule     |threshold|
|First Contentful Paint  |LESS_THAN|1800     |
|Largest Contentful Paint|LESS_THAN|2500     |
|Total Blocking Time     |LESS_THAN|350      |
|Cumulative Layout Shift |LESS_THAN|0.1      |
|Speed Index             |LESS_THAN|1000     |
