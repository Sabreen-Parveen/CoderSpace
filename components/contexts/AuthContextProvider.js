import { useState, useEffect, useMemo } from "react";

import getCurrentUser from "../../lib/Auth/getCurrentUser";
import AuthContext from "./AuthContext";

export default function AuthContextProvider({ children }) {
  const [userDetail, setUserDetail] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function changeUserDetail(details) {
    setUserDetail(details);
  }

  function changeLoginState(value) {
    setIsLoggedIn(value);
  }

  const contextProps = useMemo(
    () => ({
      userDetail,
      changeUserDetail,
      isLoggedIn,
      changeLoginState,
    }),
    [userDetail, isLoggedIn]
  );

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setUserDetail(user.attributes);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        setUserDetail(null);
        changeLoginState(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={contextProps}>{children}</AuthContext.Provider>
  );
}
