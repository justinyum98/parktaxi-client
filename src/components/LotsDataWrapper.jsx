import React, { useState, useEffect } from 'react';
import getAllLots from '../utils/requests/get/lots';

const LotsDataWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lotsData, setLotsData] = useState([]);
  useEffect(() => {
    getAllLots()
      .then(response => {
        setLotsData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return children({ lotsData, loading, error });
};

export default LotsDataWrapper;
