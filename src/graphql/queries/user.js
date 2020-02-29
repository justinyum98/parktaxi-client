import gql from 'graphql-tag';

export const GET_USER_PROFILE = gql`
  {
    getUserProfile {
      email
      firstName
      lastName
      validSpotTypes
    }
  }
`;

export const IS_LOGGED_IN = gql`
  query isUserLoggedIn {
    isLoggedIn @client
  }
`;
