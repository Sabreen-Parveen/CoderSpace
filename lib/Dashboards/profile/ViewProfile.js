import Link from "next/link";

import { ShowError } from "../../../components/UI/errors";
import Spinner from "../../../components/UI/Spinner";

export default function ViewProfile({ profileData, error, loading }) {
  console.log(profileData);
  return (
    <main className="w-2/3 mx-auto">
      <h1 className="text-2xl font-bold mt-4 mb-10 text-center">
        Your profile
      </h1>
      <ShowError error={error} />
      <Spinner loading={loading} message="Loading your profile" />
      {loading || error ? null : !Object.keys(profileData.user)
          .length ? null : (
        <>
          <div className="text-lg mb-4">
            <p>
              <span className="font-bold">Name: </span>
              {profileData.user[0].name}
            </p>
            <p>
              <span className="font-bold">Username: </span>
              {profileData.user[0].username}
            </p>
          </div>
          <Link href="/dashboard/profile?tab=edit">
            <a className="nav-btn">Edit</a>
          </Link>
        </>
      )}
    </main>
  );
}
