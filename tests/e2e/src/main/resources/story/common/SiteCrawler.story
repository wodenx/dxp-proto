Lifecycle:
Examples:
{transformer=FROM_HEADLESS_CRAWLING, column=relative-url}
{transformer=APPLY_URL_NORMALIZATION}
{transformer=DISTINCTING, byColumnNames=relative-url}

Scenario: Check link on site page
When I execute HTTP GET request for resource with URL `${app-url}<relative-url>`
Then all resources by selector `a[href],img[src]` from ${response} are valid
