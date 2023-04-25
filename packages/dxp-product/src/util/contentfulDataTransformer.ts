import type {
  DataTransformer,
  DxpProductCardData,
  DxpProductData,
  ContentfulProductData,
  ContentfulProductContent,
  DxpProductCollectionCardData,
} from '../components/ProductSection/types';

class ProductDataTransformer implements DataTransformer<ContentfulProductData, DxpProductData> {
  static parseContent(content: string): ContentfulProductContent {
    return JSON.parse(content);
  }

  static transformProductCard(raw: ContentfulProductData): DxpProductCardData {
    const {
      contentful_id,
      name = '',
      images = [],
    } = ProductDataTransformer.parseContent(raw.content);
    return {
      id: contentful_id,
      title: {text: name},
      eyebrow: {text: ''},
      description: {text: ''},
      slug: raw.fields.slug,
      image: {
        src: images[0]?.file?.url,
        title: images[0]?.title,
        alt: images[0]?.description,
      }
    };
  }

  static transformProductCategory(
    raw: ContentfulProductData
  ): (DxpProductCollectionCardData | false) {
    const { collection } = ProductDataTransformer.parseContent(raw.content);
    if (!collection) {
      return false;
    }
    const { title, image } = collection;
    return {
      // @todo: expect fetch-product script to provide collection id after.
      id: title.replace(/\s+/g, '-').toLowerCase(),
      title: {text: title},
      eyebrow: {text: ''},
      link: {
        href: `/products/${raw.fields.slug}`,
        'aria-label': `View all ${title} collections`,
      },
      slug: raw.fields.slug,
      image: {
        src: image?.fields?.file?.url,
        title: image?.fields?.title,
        alt: image?.fields?.title,
      }
    };
  }
}

export {
  ProductDataTransformer,
};
