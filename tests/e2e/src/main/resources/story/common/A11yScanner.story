Lifecycle:
Examples:
{transformer=FROM_HEADLESS_CRAWLING, column=relative-url}
{transformer=APPLY_URL_NORMALIZATION}
{transformer=DISTINCTING, byColumnNames=relative-url}
{transformer=FILTERING, column.relative-url=^((?!\/(accordion|buttons|video|images|where-to-buy)).)*$}

Scenario: Check accessibility on site page
Meta: @testCaseId JEPZ-499
Given I am on page with URL `${app-url}<relative-url>`
When I perform accessibility scan:
|standard|
|wcag2a  |
|wcag2aa |
