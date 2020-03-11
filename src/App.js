import React from 'react';
import logo from './logo.svg';
import { ApolloProvider } from "@apollo/react-hooks";
import Continents from "./Continents";
import './App.css';

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

const client = new ApolloClient({
  link: createHttpLink({ uri: "https://countries.trevorblades.com" }),
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <h1>React + Apollo Hooks</h1>
      <Continents />
    </ApolloProvider>
  );
}

export default App;
