import gql from 'graphql-tag';

const REGISTER_USER = gql`
  mutation SignupUser(
    $firstName: String!
    $lastName: String!
    $email: EmailAddress!
    $password: String!
    $validSpotTypes: [SpotType!]!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      validSpotTypes: $validSpotTypes
    ) {
      user {
        firstName
        lastName
        email
        validSpotTypes
      }
      token
    }
  }
`;

export default REGISTER_USER;
