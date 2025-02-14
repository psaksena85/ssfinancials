import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// Initialize Apollo Client with your Contentful GraphQL endpoint
const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}/environments/master`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

// Function to fetch entries from Contentful with a custom GraphQL query
export const fetchEntries = async (query) => {
  try {
    const { data } = await client.query({ query });

    return data;
  } catch (error) {
    console.error("Error fetching Contentful data:", error);
    return null;
  }
};
