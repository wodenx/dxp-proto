Meta: @feature product_publish

Scenario: Publish new content and verify PDP on the site
Meta: @testCaseId JEPZ-148
      @requirementId JEPZ-53
!-- Create Ingredient
When I initialize story variable `ingredientData` with values:data/ingredient.table
When I create `ingredient` content from `/templates/ingredient.json` template with parameters:${ingredientData}
!-- Create Product Collection
When I create asset from `product-collection` file with `Test Product Collection` name and save its ID to story variable `productCollectionAssetId`
When I initialize story variable `productCollectionData` with values:
{transformer=MERGING, mergeMode=columns, tables=/data/product-collection.table}
|image                      |
|${productCollectionAssetId}|
When I create `productCollection` content from `/templates/product-collection.json` template with parameters:${productCollectionData}
!-- Create Product
When I create asset from `product` file with `Test Product` name and save its ID to story variable `productAssetId`
When I initialize story variable `productData` with values:
{transformer=MERGING, mergeMode=columns, tables=/data/product.table}
|collection                    |ingredients            |images           |
|${productCollectionData[0].id}|${ingredientData[0].id}|${productAssetId}|
When I create `product` content from `/templates/product.json` template with parameters:${productData}
!-- Create FAQ
When I initialize story variable `faqData` with values:
{transformer=MERGING, mergeMode=columns, tables=/data/faq.table}
|product             |
|${productData[0].id}|
When I create `fAQs` content from `/templates/faq.json` template with parameters:${faqData}
!-- Pubilsh contents
When I move assets item with `${productCollectionAssetId}` id to published state
When I move assets item with `${productAssetId}` id to published state
When I move entries item with `${ingredientData[0].id}` id to published state
When I move entries item with `${productCollectionData[0].id}` id to published state
When I move entries item with `${faqData[0].id}` id to published state
When I move entries item with `${productData[0].id}` id to published state
!-- Wait deployment on GitHub
When I wait for presence of element by `$[?(@.name == "${productData[0].slug}")]` with `PT20S` polling interval retrying 30 times
|step                                          |
|When I request list of available product pages|
!-- Wait availability on Site
When I wait for response code `200` for `PT5M` duration retrying 30 times
|step                                                                                              |
|When I execute HTTP GET request for resource with URL `${app-url}/products/${productData[0].slug}`|
!-- Open product page
Given I am on page with URL `${app-url}/products/${productData[0].slug}`
!-- Validate main content section
When I wait until element located by `caseInsensitiveText(${productData[0].name})` appears
Then `product-image` image should be equal to `product` asset image
Then product summary should have parameters:
{transformer=FROM_LANDSCAPE}
|summary_plain         |${productData[0].summary_plain}      |
|summary_bold          |${productData[0].summary_bold}       |
|summary_superscript   |${productData[0].summary_superscript}|
|summary_link_text     |${productData[0].summary_link_text}  |
|summary_link_url      |${productData[0].summary_link_url}   |
!-- Validate more to know section
Then `Ingredients` accordion content is equal to `${ingredientData[0].title} -${ingredientData[0].inactive_active}`
Then `Directions` accordion content is equal to `${productData[0].directions}`
Then `Warnings` accordion content is equal to `${productData[0].warnings}`
Then `Additional Information` accordion content is equal to `${productData[0].additional_information}`
!-- Validate jump to section
Then jump to link key `Jump To` exists
Then jump to link key `Details` exists
Then jump to link key `Ingredients` exists
Then jump to link key `Directions` exists
Then jump to link key `Warnings` exists
Then jump to link key `Additional Info` exists
Then jump to link key `From The Collection` exists
Then jump to link key `FAQ` exists
!-- Validate FAQ section
Then `${faqData[0].question}` FAQ accordion content is equal to `${faqData[0].answer}`
!-- Take screenshot for debugging
When I take screenshot
When I close browser


Scenario: Check links and images on PDP
Meta: @xray.skip-export
Then all resources by selector `a[href],img[src]` are valid on:
|pages                                     |
|${app-url}/products/${productData[0].slug}|


Scenario: Update and publish changes to existing product and verify changed PDP on the site
Meta: @testCaseId JEPZ-149
      @requirementId JEPZ-53
!-- Update product
When I create asset from `product-updated` file with `Test Product Updated` name and save its ID to story variable `productUpdatedAssetId`
When I initialize story variable `productUpdatedData` with values:
{transformer=FROM_LANDSCAPE}
|id    |#{generate(regexify '[a-zA-Z0-9]{16}')}       |
|name  |Product #{generate(regexify '[a-zA-Z0-9]{8}')}|
|images|${productUpdatedAssetId}                      |
When I patch entry with `${productData[0].id}` id using `/templates/product-update.json` template with parameters:${productUpdatedData}
!-- Update FAQ (skipped for now due to JEPZ-161)
!-- # When I patch entry with `${faqData[0].id}` id using `/templates/faq-update.json` template with parameters:
!-- |id              |
!-- |${faqData[0].id}|
!-- Publish changes
When I move assets item with `${productUpdatedAssetId}` id to published state
!-- # When I move entries item with `${faqData[0].id}` id to published state
When I move entries item with `${productData[0].id}` id to published state
!-- Wait deployment on GitHub
When I wait for presence of element by `$[?(@.name == "${productUpdatedData[0].name}")]` with `PT20S` polling interval retrying 30 times
|step                                                           |
|When I request content of `${productData[0].slug}` product page|
!-- Wait availability on Site
Given I am on page with URL `${app-url}/products/${productData[0].slug}`
When I execute steps with delay `PT15S` at most 20 times while variable `newProductTitle` is equal to `0`:
|step                                                                                                                              |
|When I refresh page                                                                                                               |
|When I save number of elements located `caseInsensitiveText(${productUpdatedData[0].name})` to scenario variable `newProductTitle`|
!-- Validate main content section
When I wait until element located by `caseInsensitiveText(${productUpdatedData[0].name})` appears
Then `product-image` image should be equal to `product-updated` asset image
Then product summary is empty
!-- Validate more to know section
Then number of elements found by `caseInsensitiveText(More To Know)` is equal to `0`
Then accordion with key `Ingredients` does not exist
Then accordion with key `Directions` does not exist
Then accordion with key `Warnings` does not exist
Then accordion with key `Additional Information` does not exist
!-- Validate jump to section
Then jump to link key `Jump To` exists
Then jump to link key `Details` exists
Then jump to link key `Ingredients` exists
Then jump to link key `Directions` exists
Then jump to link key `Warnings` exists
Then jump to link key `Additional Info` exists
Then jump to link key `From The Collection` exists
Then jump to link key `FAQ` exists
!-- Validate FAQ section (not removed due to JEPZ-161)
Then `${faqData[0].question}` FAQ accordion content is equal to `${faqData[0].answer}`
!-- Take screenshot for debugging
When I take screenshot
When I close browser


Scenario: Unpublish content and check PDP is not available on the site
Meta: @testCaseId JEPZ-150
      @requirementId JEPZ-53
!-- Unpublsh entries and assets
When I move entries item with `${productData[0].id}` id to unpublished state
When I move entries item with `${ingredientData[0].id}` id to unpublished state
When I move entries item with `${productCollectionData[0].id}` id to unpublished state
When I move entries item with `${faqData[0].id}` id to unpublished state
When I move assets item with `${productCollectionAssetId}` id to unpublished state
When I move assets item with `${productAssetId}` id to unpublished state
When I move assets item with `${productUpdatedAssetId}` id to unpublished state
!-- Wait on GitHub
When I wait for response code `404` for `PT10M` duration retrying 30 times
|step                                                |
|When I request `${productData[0].slug}` product page|
!-- Wait on Site
When I wait for response code `404` for `PT2M` duration retrying 15 times
|step                                                                                              |
|When I execute HTTP GET request for resource with URL `${app-url}/products/${productData[0].slug}`|
