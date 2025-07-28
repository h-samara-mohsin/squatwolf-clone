// lib/queries.js

export const COLLECTION_QUERY = `
  query Collection {
    collection(handle: "gym-tshirts-men") {
      title
      products(first: 12) {
        edges {
          node {
            id
            handle
            title
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  }
`;

// export const PRODUCT_QUERY = `
//   query Product($handle: String!) {
//     product(handle: $handle) {
//       id
//       handle
//       title
//       description
//       availableForSale
//       priceRange {
//         minVariantPrice {
//           amount
//         }
//       }
//       images(first: 5) {
//         edges {
//           node {
//             url
//           }
//         }
//       }
//       metafield(namespace: "pdp", key: "promotional") {
//         value
//       }
//     }
//   }
// `;

export const PRODUCT_QUERY = `
  query Product($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      productType
      availableForSale
      description
      totalInventory
      descriptionHtml
      priceRange {
        minVariantPrice {
          amount
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      images(first: 5) {
        edges {
          node {
            url
          }
        }
      }
      metafields(identifiers: [
        { namespace: "features", key: "badge_fit" }
        { namespace: "filter", key: "fit" }
        { namespace: "location", key: "qty_tdm" }
        { namespace: "custom", key: "gender" }
        { namespace: "pdp", key: "promotional" }
        { namespace: "plp", key: "promotional" }
        { namespace: "colors", key: "selected" }
        { namespace: "pdp", key: "color_swatches" }
        { namespace: "custom", key: "sw_length_products" }
        { namespace: "alpha", key: "sw_length_title" }
        { namespace: "custom", key: "shop_the_look_venn_apps" }
        { namespace: "info", key: "model_and_size_info" }
        { namespace: "reviews", key: "rating" }
        { namespace: "reviews", key: "rating_count" }
      ]) {
        key
        value
        namespace
      }
    }
  }
`;






export const HOMEPAGE_COLLECTION_QUERY = `
  query HomeCollection {
    collection(handle: "gym-tshirts-men") {
      title
      products(first: 4) {
        edges {
          node {
            id
            handle
            title
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  }
`;
