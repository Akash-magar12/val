import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetch = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return data;
};

export default useFetch;
