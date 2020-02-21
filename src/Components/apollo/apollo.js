import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "xxx",
});

export const DatabaseProvider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);