Scenario: Check main page
Meta: @layout phone desktop
Given I am on main application page
When I wait until element located by `caseInsensitiveText(Email Signup & Rewards)` appears
