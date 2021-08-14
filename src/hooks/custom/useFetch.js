import { useState, useEffect } from "react";

/**
 * Custom hook useFetch - Used to fetch value from API similar as fetch JS api.
 * @function useFetch
 * @param {String} url 
 * @param {Object} options 
 * @returns {Object}
 */
const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();

        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error };
};

export default useFetch;
