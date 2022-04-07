import { useCallback, useState } from "react";

import { postRequestWithAuth } from "../../components/utils/requests";
import {
  handleBackendError,
  isBackendError,
} from "../../components/utils/error";
import useIsMounted from "./useIsMounted";

export default function useLazyPostRequest(route, options = {}) {
  const isMounted = useIsMounted();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const makePostRequest = useCallback(
    (body) =>
      (async function (body) {
        if (error) {
          setError(null);
        }
        setLoading(true);

        try {
          const response = await postRequestWithAuth(route, { body });
          // console.log(response);
          if (isMounted.current) {
            setLoading(false);
            setData(response);
            if (options.onSuccess) {
              options.onSuccess(response);
            }
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
      })(body),
    [route, error, options, isMounted]
  );

  return { data, error, loading, makePostRequest };
}
