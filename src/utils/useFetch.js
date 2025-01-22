import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); // Initialize with null to handle non-array data
  const [loading, setLoading] = useState(true); // Loading state to track fetching
  const [error, setError] = useState(null); // Error state to track errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.data); // Assuming API response contains a 'data' key
      } catch (err) {
        setError(err); // Set error if request fails
      } finally {
        setLoading(false); // Set loading to false after request completes
      }
    };

    fetchData();
  }, [url]); // The URL as a dependency to refetch if it changes

  return { data, loading, error }; // Return data, loading, and error for better component handling
};

export default useFetch;
