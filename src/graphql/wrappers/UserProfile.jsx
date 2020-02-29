import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_PROFILE } from '../queries/user';

const UserProfile = ({ children }) => {
  const { loading, error, data } = useQuery(GET_USER_PROFILE);

  if (loading) return <p>Getting user profile...</p>;
  if (error) return <p>Error getting user profile...</p>;

  return children({ userProfile: data });
};

export default UserProfile;
