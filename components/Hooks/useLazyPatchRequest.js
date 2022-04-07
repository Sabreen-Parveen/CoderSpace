import { useCallback, useState } from "react";

import {
  handleBackendError,
  isBackendError,
} from "../../components/utils/error";
import { patchRequestWithAuth } from "../../components/utils/requests";
import useIsMounted from "./useIsMounted";

export default function useLazyPatchRequest(route, options) {
  const isMounted = useIsMounted();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // console.log(options);
  const makePatchRequest = useCallback(
    (body) =>
      (async (body) => {
        // console.log(body);
        // console.log(error);
        if (error) {
          setError(null);
          makePatchRequest;
        }
        setLoading(true);
        try {
          const response = await patchRequestWithAuth(route, { body });
          console.log(response);
          if (isMounted.current) {
            setLoading(false);
            if (options.onSuccess) {
              options.onSuccess(response, body);
            }
          }
        } catch (err) {
          let error = err;
          console.log(error);
          if (isBackendError(err)) {
            error = handleBackendError(err);
          }
          if (isMounted.current) {
            setError(error);
            setLoading(false);
          }
        }
      })(body),
    [error, route, options, isMounted]
  );

  return { error, loading, makePatchRequest };
}
