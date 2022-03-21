import Head from "next/head";
import { useRouter } from "next/router";

import SignupForm from "../components/Forms/SignupForm";
import { ShowError } from "../components/UI/errors";
import useSignup from "../lib/Hooks/useSignup";
import Spinner from "../components/UI/Spinner";

export default function Signup() {
  const router = useRouter();

  const { error, loading, SignupUser } = useSignup({
    onSuccess: () => router.push("/confirm-message"),
  });

  return (
    <>
      <Head>
        <title>Signup | CoderSpace</title>
      </Head>
      <div className="flex flex-col lg:flex-row w-2/3 mx-auto items-center">
        <div className="my-5">
          <h2 className={`form-title ${loading ? "opacity-25" : ""}`}>
            Signup
          </h2>
          <Spinner loading={loading} message="Signing up" />
          <div className={` ${loading ? "opacity-25" : ""}`}>
            <ShowError error={error} />
            <SignupForm submitHandler={SignupUser} />
          </div>
        </div>
      </div>
    </>
  );
}

Signup.hideAfterLogin = true;
