import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";

const apiUrl = "http://localhost:4000/graphql";
const link = new HttpLink({
  uri: apiUrl
});
const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  link
});
