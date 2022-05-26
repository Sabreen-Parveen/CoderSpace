import { Section } from "../../../components/UI/Dashboard/Section";
import PageDoesNotExist from "../../../lib/Dashboards/PageNotExist";
import LeetcodeProfile from "./Leetcode";
import CodeforcesPersonalProfile from "./Codeforces/CodeforcesPersonalProfile";
import { ButtonsContainer } from "../../../components/UI/Dashboard/Section";
import { DashboardSelectionButton } from "../../../components/UI/buttons";

export default function Analytics({ tab }) {
  function getSection(tab) {
    if (tab === "codeforces") return <CodeforcesPersonalProfile />;
    else if (tab === "leetcode") return <LeetcodeProfile />;
    else return <PageDoesNotExist />;
  }
  return (
    <>
      <ButtonsContainer>
        <DashboardSelectionButton
          linkTo="/dashboard/analytics?tab=codeforces"
          highlight={tab === "codeforces"}
        >
          CodeForces
        </DashboardSelectionButton>
        <DashboardSelectionButton
          linkTo="/dashboard/analytics?tab=leetcode"
          highlight={tab === "leetcode"}
        >
          Leetcode
        </DashboardSelectionButton>
      </ButtonsContainer>
      <Section>{getSection(tab)}</Section>
    </>
  );
}
