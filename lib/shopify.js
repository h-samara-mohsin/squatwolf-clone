// const DOMAIN = "https://squatwolfglobal.myshopify.com/api/2023-07/graphql.json";
// const TOKEN = "5a8061bb9543cf7ed75ce81629b6941b";

// export async function shopifyFetch(query, variables = {}) {
//   const res = await fetch(DOMAIN, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "X-Shopify-Storefront-Access-Token": TOKEN,
//     },
//     body: JSON.stringify({ query, variables }),
//   });

//   const json = await res.json();
//   return json.data;
// }

const DOMAIN = "https://squatwolfglobal.myshopify.com/api/2023-07/graphql.json";
const TOKEN = "5a8061bb9543cf7ed75ce81629b6941b";

export async function shopifyFetch(query, variables = {}) {
  const res = await fetch(DOMAIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  console.log("🔍 Shopify Response JSON:", JSON.stringify(json, null, 2)); // <-- add this

  return json; // return full response
}
