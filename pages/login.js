import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import signIn from "../lib/Auth/Signin";
import LoginForm from "../components/Forms/LoginForm";
import { ErrorParagraph } from "../components/UI/errors";
import useAuthContext from "../components/contexts/useAuthContext";
import Spinner from "../components/UI/Spinner";

export default function Login() {
  const ctx = useAuthContext();
  const router = useRouter();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  async function submitHandler(values) {
    setLoading(true);
    if (error) {
      setError(null);
    }

    try {
      const user = await signIn(values.email, values.password);
      const subId = user.attributes.sub;
      ctx.changeUserDetail(user.attributes);
      ctx.changeLoginState(true);
      setLoading(false);
      router.push("/dashboard");
    } catch (err) {
      let error = err;
      let errorMessage = "Something happened. Please try again.";
      switch (error.code) {
        case "UserNotFoundException":
        case "NotAuthorizedException":
          errorMessage = "Incorrect email or password. Please try again.";
          setError(errorMessage);
          setLoading(false);
          break;
        case "UserNotConfirmedException":
          errorMessage =
            "A verification link was sent to your registered email address. Kindly verify your email address before proceeding.";
          setError(errorMessage);
          setLoading(false);
          break;
      }
    }
  }

  return (
    <>
      <Head>
        <title>Login | CoderSpace</title>
      </Head>
      <div className="flex flex-col lg:flex-row w-2/3 mx-auto items-center">
        <div className="my-5 md:w-2/3">
          <h2 className={` form-title ${loading ? "opacity-25" : ""}`}>
            Login
          </h2>
          <Spinner loading={loading} message="Logging In" />
          <div className={`${loading ? "opacity-25" : ""}`}>
            <ErrorParagraph>{error}</ErrorParagraph>
            <div className="mx-auto w-max">
              <LoginForm submitHandler={submitHandler} />
            </div>
            <div className=" my-4  text-s  light-blue text-center">
              <Link href="/forgot-password">Forgot Password?</Link>
            </div>
            <div className="my-2">
              <p className=" light-gray  text-s text-center">
                Don’t have an account?
                <Link href="/signup">
                  <a className="ml-1 text-lightBlue">Signup</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.hideAfterLogin = true;
