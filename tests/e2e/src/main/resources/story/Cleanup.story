Scenario: Delete entries and assets
Meta: @xray.skip-export
When I delete entries item with `${productData[0].id}` id
When I delete entries item with `${ingredientActiveData[0].id}` id
When I delete entries item with `${ingredientInactiveData[0].id}` id
When I delete entries item with `${productCollectionData[0].id}` id
When I delete entries item with `${faqData[0].id}` id
When I delete assets item with `${productCollectionAssetId}` id
When I delete assets item with `${productAssetId}` id
When I delete assets item with `${productUpdatedAssetId}` id
