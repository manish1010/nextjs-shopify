import { gql, GraphQLClient } from "graphql-request";

const storefrontAccessToken = '3ca33ca1b4cb1df1855bc60fa7fc8239';

const endpoint = 'https://test-store-next11.myshopify.com/api/2023-10/graphql.json';

debugger;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
  },
});


export async function getProducts() {
  const getAllProductsQuery = gql`
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
              }
            }
            featuredImage {
              altText
              url
            }
          }
        }
      }
    }
  `;
  try {
    return await graphQLClient.request(getAllProductsQuery);
  } catch (error) {
    console.log("error========", error);
    throw new Error(error);
  }
}


export async function getProduct(handle) {
  const getProductQuery = gql`
  {
    shop {
      name
    }
    product(handle:"the-videographer-snowboard") {
      description
      title
      tags
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      featuredImage {
        url
      }
    }
  }
  `;
  try {
    return await graphQLClient.request(getProductQuery);
  } catch (error) {
    console.log("error========", error);
    throw new Error(error);
  }
}


export async function LoginCustomer(data) {
  const getProductQuery = gql`
  mutation SignInWithEmailAndPassword(
    $email: String!, 
    $password: String!,
) {
    customerAccessTokenCreate(input: { 
        email: $email, 
        password: $password,
    }) {
        customerAccessToken {
            accessToken
            expiresAt
        }
        customerUserErrors {
            code
            message
        }
    }
}
  `;

  const variables = {
    email: data.email,
    password: data.pass,
  } 
  try {
    return await graphQLClient.request(getProductQuery,variables);
  } catch (error) {
    console.log("error========", error);
    throw new Error(error);
  }
}


export async function getCustomerdetails(data) {
  const getProductQuery = gql`
  query FetchCustomerInfo($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      email
      firstName
      id
      lastName
      defaultAddress {
          id
      }
      addresses(first: 100) {
          edges {
              node {
                  address1
                  city
                  country
                  id
                  province
                  zip
              }
          }
      }
    }
  }
  `;

  const variables = {
    "customerAccessToken": data.at
} 
  try {
    return await graphQLClient.request(getProductQuery,variables);
  } catch (error) {
    console.log("error========", error);
    throw new Error(error);
  }
}