Scenario: Check styling on Home Page
Meta: @testCaseId JEPZ-305
      @requirementId JEPZ-73
Given I am on page with URL `${app-url}/`
When I wait until element located by `dataLayerRegion(Curator Section:FeedWrapper)` appears
When I perform cross viewport visual test with `Home Page` name


Scenario: Check styling on Card Page
Meta: @testCaseId JEPZ-220
      @requirementId JEPZ-47
Given I am on page with URL `${app-url}/styleguide/card`
When I perform cross viewport visual test with `Card Page` name
