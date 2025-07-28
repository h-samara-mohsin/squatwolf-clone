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

export const PRODUCT_QUERY = `
  query Product($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      description
      availableForSale
      priceRange {
        minVariantPrice {
          amount
        }
      }
      images(first: 5) {
        edges {
          node {
            url
          }
        }
      }
      metafield(namespace: "pdp", key: "promotional") {
        value
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
