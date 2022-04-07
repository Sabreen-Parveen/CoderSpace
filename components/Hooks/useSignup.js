import { useState, useCallback } from "react";

import signUp from "components/Auth/Signup";
import useIsMounted from "./useIsMounted";

export default function useSignup(options) {
  const isMounted = useIsMounted();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const SignupUser = useCallback(
    (data) =>
      (async function (data) {
        if (error) {
          setError(null);
        }
        setLoading(true);

        try {
          const response = await signUp(
            data.email,
            data.email,
            data.password,
            data.phone,
            data.firstName,
            data.middleName,
            data.lastName
          );
          console.log(response);
          if (isMounted.current) {
            setLoading(false);
            options.onSuccess();
          }
        } catch (err) {
          console.error(err);
          if (isMounted.current) {
            setError(err);
            setLoading(false);
          }
        }
      })(data),
    [options, error, isMounted]
  );

  return { error, loading, SignupUser };
}
