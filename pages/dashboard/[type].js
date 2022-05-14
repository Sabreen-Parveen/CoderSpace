import { useRouter } from "next/router";
import Head from "next/head";
import { FaFileAlt, FaUser, FaChartBar, FaList } from "react-icons/fa";

import { DashboardSidebarButton } from "../../components/UI/buttons";
import Sidebar from "../../components/UI/Dashboard/Sidebar";
import DashboardSelection from "../../components/UI/Dashboard/DashboardSelection";
import Dashboard from "../../components/UI/Dashboard/Dashboard";
import ManageFile from "../../lib/Dashboards/file/ManageFile";
import ProfileSelection from "../../lib/Dashboards/profile/ProfileSelection";
import PageDoesNotExist from "../../lib/Dashboards/PageNotExist";
import Analytics from "../../lib/Dashboards/Analytics/AnalyticsSelection";
import TodoWindow from "../../lib/Dashboards/Todo/TodoWindow";

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
    } else if (type === "analytics") {
      return (
        <>
          <Head>
            <title>Analytics - Dashboard | CodeSpace</title>
          </Head>
          <Analytics tab={tab} />
        </>
      );
    } else if (type === "todo") {
      return (
        <>
          <Head>
            <title>Todo - Dashboard | CodeSpace</title>
          </Head>
          <TodoWindow />
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
          linkTo={"/dashboard/analytics?tab=leetcode"}
          highlight={type === "analytics"}
        >
          <FaChartBar />
          Analytics
        </DashboardSidebarButton>
        <DashboardSidebarButton
          linkTo={"/dashboard/todo"}
          highlight={type === "todo"}
        >
          <FaList />
          Todo
        </DashboardSidebarButton>
      </Sidebar>
      <DashboardSelection>{getSelection(type)}</DashboardSelection>
    </Dashboard>
  );
}

// DashboardPage.requireAuth = true;
