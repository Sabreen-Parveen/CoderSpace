import { useRouter } from "next/router";
import Head from "next/head";
import { FaFileAlt, FaUser, FaCode } from "react-icons/fa";

import { DashboardSidebarButton } from "../../components/UI/buttons";
import Sidebar from "../../components/UI/Dashboard/Sidebar";
import DashboardSelection from "../../components/UI/Dashboard/DashboardSelection";
import Dashboard from "../../components/UI/Dashboard/Dashboard";
import ManageFile from "../../lib/Dashboards/file/ManageFile";
import ProfileSelection from "../../lib/Dashboards/profile/ProfileSelection";
import OnlineCompiler from "../../lib/Dashboards/OnlineCompiler";
import PageDoesNotExist from "../../lib/Dashboards/PageNotExist";

export default function DashboardPage() {
  const router = useRouter();
  const { type, tab } = router.query;

  function getSelection(type) {
    if (type === "manage-file") {
      return (
        <>
          <Head>
            <title>Files - Dashboard | CodeSpace</title>
          </Head>
          <ManageFile tab={tab} />
        </>
      );
    } else if (type === "profile") {
      return (
        <>
          <Head>
            <title>Profile - Dashboard | CodeSpace</title>
          </Head>
          <ProfileSelection tab={tab} />
        </>
      );
    } else if (type === "compiler") {
      return (
        <>
          <Head>
            <title>Online Compiler - Dashboard | CodeSpace</title>
          </Head>
          <OnlineCompiler tab={tab} />
        </>
      );
    } else {
      return <PageDoesNotExist />;
    }
  }

  return (
    <Dashboard>
      <Sidebar>
        <DashboardSidebarButton
          linkTo={"/dashboard/manage-file?tab=view"}
          highlight={type === "manage-file"}
        >
          <FaFileAlt />
          Upload File
        </DashboardSidebarButton>
        <DashboardSidebarButton
          linkTo={"/dashboard/profile?tab=view"}
          highlight={type === "profile"}
        >
          <FaUser />
          Profile
        </DashboardSidebarButton>
        <DashboardSidebarButton
          linkTo={"/dashboard/compiler?tab=current"}
          highlight={type === "compiler"}
        >
          <FaCode />
          Online compiler
        </DashboardSidebarButton>
      </Sidebar>
      <DashboardSelection>{getSelection(type)}</DashboardSelection>
    </Dashboard>
  );
}

// DashboardPage.requireAuth = true;
