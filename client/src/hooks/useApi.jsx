import { useState } from "react";
import API from "../services/api.js";

const useApi = (urlObject) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const call = async (payload, type = "") => {
    // ensures that each time Response,Error get initialised with initial value;
    setResponse(null);
    setError("");
    setIsLoading(true);

    try {
      let res = await API(urlObject, payload, type);
      setResponse(res.data);
      // there are lots of information in response section to get data we use res.data
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { call, response, error, isLoading };
};

export default useApi;
