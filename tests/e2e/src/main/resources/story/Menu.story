Scenario: Check styles of the header menu on the site - Desktop
Meta: @testCaseId JEPZ-297
      @requirementId JEPZ-43
Given I am on page with URL `${app-url}/`
!-- Check style of main menu item
When I change context to element located by `menuItem(<menuId>)`
When I run visual test with Applitools using:
|batchName    |baselineName                     |action          |
|${batch-name}|#{capitalizeWords(<menuId>)} menu|${visual-action}|
When I hover mouse over element located `xpath(./self::*)`
When I run visual test with Applitools using:
|batchName    |baselineName                             |action          |
|${batch-name}|#{capitalizeWords(<menuId>)} menu - hover|${visual-action}|
!-- Check style of sub menu item
When I change context to element located by `menuItem(<submenuId>)`
When I run visual test with Applitools using:
|batchName    |baselineName                            |action          |
|${batch-name}|#{capitalizeWords(<submenuId>)} sub-menu|${visual-action}|
When I hover mouse over element located `xpath(./self::*)`
When I run visual test with Applitools using:
|batchName    |baselineName                                    |action          |
|${batch-name}|#{capitalizeWords(<submenuId>)} sub-menu - hover|${visual-action}|
 and screenshot config:
|shootingStrategy|
|SIMPLE          |
When I reset context
!-- Check style of sub menu item after selection
When I execute sequence of actions:
|type |argument                                          |
|CLICK|By.menuItem(<submenuId>)|
When I wait until element located by `menuItem(<menuId>)` appears
When I hover mouse over element located `menuItem(<menuId>)`
When I wait until element located by `menuItem(<submenuId>)` appears
When I change context to element located by `menuItem(<submenuId>)`
When I run visual test with Applitools using:
|batchName    |baselineName                                         |action          |
|${batch-name}|#{capitalizeWords(<submenuId>)} sub-menu - navigation|${visual-action}|
!-- Breadcrumbs after navigate
When I change context to element located by `dataLayerRegion(Breadcrumbs:NavWrapper)`
When I hover mouse over element located `xpath(./self::*)`
When I run visual test with Applitools using:
|batchName    |baselineName                                          |action          |
|${batch-name}|#{capitalizeWords(<submenuId>)} sub-menu - breadcrumbs|${visual-action}|
When I reset context
Examples:
{transformer=FILTERING, byRandomRows=2}
/data/menu.table


Scenario: Check header sub-menu links are clickable - Desktop
Meta: @testCaseId JEPZ-301
      @requirementId JEPZ-43
Given I am on page with URL `${app-url}/`
When I hover mouse over element located `menuItem(<menuId>)`
When I wait until element located by `menuItem(<submenuId>)` appears
!-- Check open/close burger menu (TO-DO)
When I execute sequence of actions:
|type |argument                                          |
|CLICK|By.menuItem(<submenuId>)|
When I wait until element located by `menuItem(<menuId>)` appears
Then `#{extractPathFromUrl(${current-page-url})}` is equal to `<expectedUrl>`
Examples:
{transformer=FILTERING, byRandomRows=4}
/data/menu.table


Scenario: Check styles of the header menu on the site - Mobile
Meta: @testCaseId JEPZ-298
      @requirementId JEPZ-43
Given I am on page with URL `${app-url}/`
When I change window size to `${mobile-resolution}`
!-- Open menu and expand all categories
When I click on element located by `dataLayerRegion(Header:MenuToggler)`
When I wait until element located by `dataLayerRegion(Header:BurgerMenu)` appears
When I find >= `0` elements by `dataLayerRegion(AccordionTitle:Wrapper)->filter.attribute(aria-expanded=false)` and for each element do
|step                                                 |
|When I click on element located by `xpath(./self::*)`|
!-- Full menu screenshot
When I save `clientHeight` attribute value of element located `dataLayerRegion(BurgerMenu:MenuTogglerWrapper)` to scenario variable `headerHeight`
When I save `clientHeight` attribute value of element located `dataLayerRegion(BurgerMenu:Menu)` to scenario variable `bodyHeight`
When I save `clientHeight` attribute value of element located `dataLayerRegion(BurgerMenu:FooterWrapper)` to scenario variable `footerHeight`
When I execute javascript `return document.body.scrollHeight - ${headerHeight} - ${bodyHeight} - ${footerHeight}` and save result to scenario variable `cutBottom`
When I run visual test with Applitools using:
|batchName    |baselineName|action          |
|${batch-name}|Burger menu |${visual-action}|
 and screenshot config:
|scrollableElement                                         |webHeaderToCut|cutBottom   |
|By.xpath(//*[@data-layer-region='BurgerMenu:MenuWrapper'])|100           |${cutBottom}|


Scenario: Check header burger menu links are clickable - Mobile
Meta: @testCaseId JEPZ-299
      @requirementId JEPZ-43
Given I am on page with URL `${app-url}/`
When I change window size to `${mobile-resolution}`
!-- Open menu and expand all categories
When I click on element located by `dataLayerRegion(Header:MenuToggler)`
When I wait until element located by `dataLayerRegion(Header:BurgerMenu)` appears
When I find >= `0` elements by `dataLayerRegion(AccordionTitle:Wrapper)->filter.attribute(aria-expanded=false)` and for each element do
|step                                                 |
|When I click on element located by `xpath(./self::*)`|
!-- Check link is clickablle
When I click on element located by `By.menuItem(<submenuId>)`
When I wait until element located by `dataLayerRegion(Header:MenuToggler)` appears
Then `#{extractPathFromUrl(${current-page-url})}` is equal to `<expectedUrl>`
Examples:
{transformer=FILTERING, byRandomRows=4}
/data/menu.table
