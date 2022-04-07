import { useEffect, useState, useCallback } from "react";

import {
  handleBackendError,
  isBackendError,
} from "../../components/utils/error";
import { getRequestWithAuth } from "../../components/utils/requests";
import useIsMounted from "./useIsMounted";

export default function useGetRequest(route, options = {}) {
  const isMounted = useIsMounted();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(options.initialDataState || null);

  useEffect(() => {
    async function makeRequest() {
      setLoading(true);
      try {
        const response = await getRequestWithAuth(route);
        console.log(response);
        if (isMounted.current) {
          setLoading(false);
          setData(response);
        }
      } catch (err) {
        let error = err;
        if (isBackendError(err)) {
          error = handleBackendError(err);
        }
        console.error(error);

        if (isMounted.current) {
          setError(error);
          setLoading(false);
        }
      }
    }
    makeRequest();
  }, [route, isMounted]);

  return { data, error, loading };
}
