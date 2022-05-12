import { useCallback, useState } from "react";
import { API } from "aws-amplify";

import { handleBackendError, isBackendError } from "components/utils/error";

export default function useLazyGetRequestWithoutAuth(options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const makeGetRequest = useCallback(
    async (route) => {
      if (error) {
        setError(null);
      }
      if (data) {
        setData(null);
      }
      setLoading(true);
      try {
        const response = await API.get("coderSpace", route);
        setLoading(false);
        setData(response);
        if (options.onSuccess) {
          options.onSuccess();
        }
      } catch (err) {
        let error = err;
        if (isBackendError(err)) {
          error = handleBackendError(err);
        }
        setError(error);
        setLoading(false);
      }
    },
    [error, options, data]
  );

  return { data, error, loading, makeGetRequest };
}
