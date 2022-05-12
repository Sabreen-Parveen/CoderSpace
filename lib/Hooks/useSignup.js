import { useState, useCallback } from "react";

import signUp from "../Auth/signup";
import useIsMounted from "./useIsMounted";
import { postRequestWithAuth } from "../../components/utils/requests";

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
          const user = {
            body: {
              name: data.firstName + " " + data.lastName,
            },
          };
          await postRequestWithAuth(`/user/${response.userSub}`, user);
          // const res = await postRequestWithAuth(`/user/asus`, {
          //   body: {
          //     name: "abcdef",
          //   },
          // });
          // console.log(res);
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
