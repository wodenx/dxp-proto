import type {
  DataTransformer,
  DxpProductCardData,
  DxpProductData,
  ContentfulProductData,
  ContentfulProductContent,
} from '../components/ProductSection/types';

class ProductDataTransformer implements DataTransformer<ContentfulProductData, DxpProductData> {
  static parseContent(content: string): ContentfulProductContent {
    return JSON.parse(content);
  }

  static transformProductCard(raw: ContentfulProductData): DxpProductCardData {
    const productContent = ProductDataTransformer.parseContent(raw.content);
    return {
      id: productContent.contentful_id,
      title: {text: productContent.name},
      eyebrow: {text: ''},
      description: {text: ''},
      slug: raw.fields.slug,
      image: {
        src: productContent.images[0].file.url,
        title: productContent.images[0].title,
        alt: productContent.images[0].description,
      }
    };
  }
}

export {
  ProductDataTransformer,
};
