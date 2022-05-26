import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function CodeforcesPersonalProfile() {
  const router = useRouter();
  useEffect(() => {
    router.push("/analytics/codeforces");
  });
  return null;
}
