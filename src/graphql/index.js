import { ApolloClient } from 'apollo-client';
import { createHttpLink as HttpLink } from 'apollo-link-http';
import { setContext as Context } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const setUpApolloClient = () => {
  const httpLink = new HttpLink({
    uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`
  });
  const authLink = new Context((_, { headers }) => {
    const token = sessionStorage.getItem('token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    };
  });
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    typeDefs,
    resolvers
  });

  // Initial local state
  cache.writeData({
    data: {
      isLoggedIn: !!sessionStorage.getItem('token'),
      currentUser: {}
    }
  });

  return client;
};

export default setUpApolloClient;
