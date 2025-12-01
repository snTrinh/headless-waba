import "server-only"; // ensures this runs only on server

import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";
import fetch from "cross-fetch";

export function getClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.WP_GRAPHQL_URL, // e.g. http://headless-waba.local/graphql
      fetch,
    }),
    cache: new InMemoryCache(),
    ssrMode: true,
  });
}
