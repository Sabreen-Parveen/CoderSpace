import { useEffect, useState } from "react";
import { API } from "aws-amplify";

import { handleBackendError, isBackendError } from "components/utils/error";
import useIsMounted from "./useIsMounted";

export default function useGetRequestWithoutAuth(route, options = {}) {
  const isMounted = useIsMounted();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(options.initialDataState || null);

  useEffect(() => {
    async function makeRequest() {
      try {
        const response = await API.get("coderSpace", route);
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
