import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Header from "./Header";
import Signout from "../../lib/Auth/Signout";
import MobileNav from "./MobileNav";
import useAuthContext from "../contexts/useAuthContext";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();
  const ctx = useAuthContext();

  useEffect(() => {
    setNavOpen(false);
  }, [router.route]);

  function signoutUser() {
    Signout()
      .then(() => {
        router.push("/login");
        ctx.changeLoginState(false);
        ctx.changeUserDetail(null);
        ctx.changeUserId(null);
      })
      .catch((err) => console.error(err));
  }

  return (
    <Header>
      <Logo />
      <div className="hidden lg:block lg:flex-1">
        <NavLinks ctx={ctx} route={router.route} signoutUser={signoutUser} />
      </div>

      <MobileNavButton setNavOpen={setNavOpen} />
      {navOpen ? (
        <MobileNav closeNav={() => setNavOpen(false)}>
          <NavLinks ctx={ctx} route={router.route} signoutUser={signoutUser} />
        </MobileNav>
      ) : null}
    </Header>
  );
}

function Logo() {
  return (
    <div className="min-w-max">
      {/* <Image
        height="30px"
        width="200px"
        src="/images/coat.png"
        alt="CoderSpace logo"
      /> */}
    </div>
  );
}

function NavLinks({ ctx, route, signoutUser }) {
  return (
    <ul className="flex p-10 flex-col gap-4 lg:p-0 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
      <li className="lg:ml-auto">
        <Link href="/">
          <a className={`nav-link ${route === "/" ? "underline" : ""}`}>Home</a>
        </Link>
      </li>
      {ctx.isLoggedIn ? (
        <>
          <li className="lg:ml-3">
            <Link href="/dashboard">
              <a
                className={`nav-link ${
                  route.includes("/dashboard/") ? "underline" : ""
                }`}
              >
                Dashboard
              </a>
            </Link>
          </li>
          <li className="lg:ml-auto">
            <button className="nav-btn" onClick={signoutUser}>
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="lg:ml-4">
            <Link href="/login">
              <a
                className={`nav-link ${route === "/login" ? "underline" : ""}`}
              >
                Login
              </a>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

function MobileNavButton({ setNavOpen }) {
  return (
    <button
      className="h-6 w-6 cursor-pointer lg:hidden block"
      onClick={() => setNavOpen(true)}
    >
      <svg
        xmlns="<http://www.w3.org/2000/svg>"
        id="menu-button"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
}
