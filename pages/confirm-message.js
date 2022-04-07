import Head from "next/head";

export default function ConfirmMessage() {
  return (
    <>
      <Head>
        <title>Confirm Message | CodeSpace</title>
      </Head>
      <div className="text-center py-6">
        <h1 className="font-bold text-3xl">Welcome!</h1>
        <p className="my-3">You have successfully registered a new account.</p>
        <p className="font-bold">
          We&apos;ve sent you an email. Please click on the confirmation link to
          verify your account.
        </p>
      </div>
    </>
  );
}
