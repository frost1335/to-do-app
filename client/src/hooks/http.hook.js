import { useState, useCallback, useEffect } from "react";

export const useHttp = () => {
  const [data, setData] = useState([]);
  const dataCb = useCallback(async () => {
    try {
      const dg = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((data) => data.json());
      setData(dg);
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  useEffect(() => {
    dataCb();
  }, [dataCb]);

  return data;
};
