Lifecycle:
Examples:
{transformer=FROM_HEADLESS_CRAWLING, column=relative-url}
{transformer=APPLY_URL_NORMALIZATION}
{transformer=DISTINCTING, byColumnNames=relative-url}

Scenario: Check link on site page
Meta: @testCaseId JEPZ-291
Then all resources by selector `a[href],img[src]` are valid on:
|pages                   |
|${app-url}<relative-url>|
