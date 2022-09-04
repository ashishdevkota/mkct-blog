import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error(
              "Contents cannot be fetched from the server please check url link"
            );
          }
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setBlogs(data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 10);
  }, [url]);

  return { data: blogs, error, isLoading };
};

export default useFetch;
