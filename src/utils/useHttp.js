import { useCallback, useState } from "react";
import axios from "axios";
const useHttp = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   This is the get method
  const get = useCallback(async (configs) => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.get(configs.url, {
        params: configs.params ? configs.params : {},
        headers: configs.headers ? configs.headers : {},
      });
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  //   This is the post method
  const post = useCallback(async (configs) => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.post(configs.url, configs.body);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);
  return { data, loading, error, get, post };
};

export default useHttp;
