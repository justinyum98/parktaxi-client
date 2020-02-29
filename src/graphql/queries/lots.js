import gql from 'graphql-tag';

const GET_ALL_PARKING_LOTS = gql`
  {
    getAllParkingLots
  }
`;

export default GET_ALL_PARKING_LOTS;
