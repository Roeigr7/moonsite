import { useEffect, useState } from 'react';
import { apiURL } from '../api';
import { filterClothesType } from './helpers';
const useFetch = (type) => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log('-use-fetchuseefeect');
    const fetchApi = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setLoading(false);
        const dataByType = filterClothesType(data.results, type);
        setData(dataByType);
      } catch (err) {
        setLoading(false);
        setError(err?.message);
      }
    };

    fetchApi();
  }, [type]);
  return { data, loading, error };
};
export default useFetch;
