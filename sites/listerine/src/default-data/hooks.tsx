import { useStaticQuery, graphql } from 'gatsby';

export const useProductData = () => {
  const { allBodiless } = useStaticQuery(
    graphql`
      query ProductData {
        allBodiless(
          filter: {fields: {slug: {glob: "/products/**"}}, name: {eq: "content"}}
          ) {
          edges {
            node {
              id
              content
              fields {
                slug
              }
              name
            }
          }
        }
      }
    `
  );
  return allBodiless;
};
