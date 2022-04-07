import UploadFile from "./UploadFile";
import ViewFile from "./ViewFile";
import { DashboardSelectionButton } from "../../../components/UI/buttons";
import {
  ButtonsContainer,
  Section,
} from "../../../components/UI/Dashboard/Section";
import PageDoesNotExist from "../PageNotExist";

export default function ManageFile({ tab }) {
  function getSection(tab) {
    if (tab === "upload") return <UploadFile />;
    else if (tab === "view") return <ViewFile />;
    else return <PageDoesNotExist />;
  }

  return (
    <>
      <ButtonsContainer>
        <DashboardSelectionButton
          linkTo="/dashboard/manage-file?tab=upload"
          highlight={tab === "upload"}
        >
          Upload Files
        </DashboardSelectionButton>
        <DashboardSelectionButton
          linkTo="/dashboard/manage-file?tab=view"
          highlight={tab === "view"}
        >
          View Files
        </DashboardSelectionButton>
      </ButtonsContainer>
      <Section>{getSection(tab)}</Section>
    </>
  );
}
