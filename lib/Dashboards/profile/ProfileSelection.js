import { useEffect, useState } from "react";

import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";
import { Section } from "../../../components/UI/Dashboard/Section";
import PageDoesNotExist from "../../../lib/Dashboards/PageNotExist";
import useGetRequest from "../../../components/Hooks/useGetRequest";
import useAuthContext from "../../../components/contexts/useAuthContext";

export default function Profile({ tab }) {
  const [profileData, setProfileData] = useState({});

  const { userDetail } = useAuthContext();
  const {
    data: user,
    error,
    loading,
  } = useGetRequest(`/user/${userDetail.sub}`, {
    initialDataState: {
      user: {},
    },
  });
  // console.log(user);
  useEffect(() => {
    setProfileData(user);
  }, [user]);

  function updateLatestProfileData(value) {
    setProfileData((prev) => ({
      ...prev,
      ...value,
    }));
  }

  function getSection(tab) {
    if (tab === "view")
      return (
        <ViewProfile
          profileData={profileData}
          error={error}
          loading={loading}
        />
      );
    else if (tab === "edit")
      return (
        <EditProfile
          profileUpdater={updateLatestProfileData}
          profileData={profileData}
        />
      );
    else return <PageDoesNotExist />;
  }

  return <Section>{getSection(tab)}</Section>;
}
