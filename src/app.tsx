import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProviderComponent } from 'core/theme';
import { RouterComponent } from 'core/router';
// npm install json-graphql-server --save-dev

const App: React.FunctionComponent = () => {
  return <RouterComponent />;
};

const AppProviders: React.FunctionComponent = () => {
  const myClient = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={myClient}>
      <ThemeProviderComponent>
        <App />
      </ThemeProviderComponent>
    </ApolloProvider>
  );
};

export default AppProviders;
