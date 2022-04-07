import Link from "next/link";

export default function Welcome() {
  return (
    <div className="text-center py-4">
      <h1 className="font-bold text-2xl">Welcome!</h1>
      <p className="mb-5 text-xl">
        Your email address has been successfully verified.
      </p>
      <Link href="/login">
        <a className="  nav-btn">Click here to login</a>
      </Link>
    </div>
  );
}
