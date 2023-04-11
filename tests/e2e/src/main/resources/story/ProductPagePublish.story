Meta: @feature product_publish

Scenario: Create product data
!-- Ingredient
When I initialize story variable `ingredientData` with values:data/ingredient.table
When I create `ingredient` content from `/templates/ingredient.json` template with parameters:${ingredientData}
!-- Product Collection
When I initialize story variable `productCollectionData` with values:data/product-collection.table
When I create `productCollection` content from `/templates/product-collection.json` template with parameters:${productCollectionData}
!-- Product
When I initialize story variable `productData` with values:
{transformer=MERGING, mergeMode=columns, tables=/data/product.table}
|collection                    |ingredients            |
|${productCollectionData[0].id}|${ingredientData[0].id}|
When I create `product` content from `/templates/product.json` template with parameters:${productData}
!-- FAQ
When I initialize story variable `faqData` with values:
{transformer=MERGING, mergeMode=columns, tables=/data/faq.table}
|product             |
|${productData[0].id}|
When I create `fAQs` content from `/templates/faq.json` template with parameters:${faqData}


Scenario: Publish and unpublish product flow
!-- Pubilsh contents
When I publish content with `${ingredientData[0].id}` id
When I publish content with `${productCollectionData[0].id}` id
When I publish content with `${faqData[0].id}` id
When I publish content with `${productData[0].id}` id
!-- Wait on GitHub
When I wait for presence of element by `$[?(@.name == "${productData[0].slug}")]` with `PT20S` polling interval retrying 15 times
|step                                          |
|When I request list of available product pages|
!-- Wait on Site
When I wait for response code `200` for `PT2M` duration retrying 15 times
|step                                                                                              |
|When I execute HTTP GET request for resource with URL `${app-url}/products/${productData[0].slug}`|
!-- Smoke
Given I am on page with URL `${app-url}/products/${productData[0].slug}`
When I wait until element located by `caseInsensitiveText(${productData[0].name})` appears
!-- Unpublsh contents
When I unpublish content with `${productData[0].id}` id
When I unpublish content with `${ingredientData[0].id}` id
When I unpublish content with `${productCollectionData[0].id}` id
When I unpublish content with `${faqData[0].id}` id
!-- Wait on GitHub
When I wait for response code `404` for `PT3M` duration retrying 15 times
|step                                                |
|When I request `${productData[0].slug}` product page|
!-- Wait on Site
When I wait for response code `404` for `PT2M` duration retrying 15 times
|step                                                                                              |
|When I execute HTTP GET request for resource with URL `${app-url}/products/${productData[0].slug}`|
