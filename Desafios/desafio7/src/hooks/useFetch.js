import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [ config, setConfig ] = useState(null)
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading ] = useState(false)

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(url);

      const data = await res.json();

      setData(data);
      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);
        const data = await res.json();

        setCallFetch(data);
      }
    };
    httpRequest()
  }, [config, method, url]);

  return { data, httpConfig, loading };
};
