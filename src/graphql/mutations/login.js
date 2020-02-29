import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation LoginUser($email: EmailAddress!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        email
        firstName
        lastName
        validSpotTypes
      }
      token
    }
  }
`;
