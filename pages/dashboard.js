import { useRouter } from "next/router";
import { useEffect } from "react";

import useAuthContext from "../components/contexts/useAuthContext";

export default function Dashboard() {
  const router = useRouter();
  const { identity } = useAuthContext();

  useEffect(() => {
    router.push("dashboard/profile?tab=view");
  });

  return null;
}

// Dashboard.requireAuth = true;
