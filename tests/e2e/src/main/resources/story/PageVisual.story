Scenario: Check styling on Home Page
Meta: @testCaseId JEPZ-305
      @requirementId JEPZ-73
Given I am on page with URL `${app-url}/`
When I wait until element located by `dataLayerRegion(Curator Section:FeedWrapper)` appears
When I run visual test with Applitools UFG using:
|batchName    |baselineName|action          |elementsToIgnore                            |
|${batch-name}|Home Page   |${visual-action}|dataLayerRegion(Curator Section:FeedWrapper)|
 and matrix:/data/render.table

Scenario: Check styling on Card Page
Meta: @testCaseId JEPZ-220
      @requirementId JEPZ-47
Given I am on page with URL `${app-url}/styleguide/card`
When I run visual test with Applitools UFG using:
|batchName    |baselineName|action          |
|${batch-name}|Card Page   |${visual-action}|
 and matrix:/data/render.table
