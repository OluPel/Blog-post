import { useState, useEffect } from "react";

const useFetch = (url) => {
  // const url = "http://localhost:8000/blogs";

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Unable to get the Data from the resources");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 2000);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
