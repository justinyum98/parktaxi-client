import axios from 'axios';

const getAllLots = () => {
  const request = {
    method: 'GET',
    url: `${process.env.REACT_APP_BACKEND_URL}/api/lot`
  };
  return axios(request);
};

export default getAllLots;
