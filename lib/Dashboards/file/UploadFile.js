import Head from "next/head";
import FileHandler from "../../../components/UI/Files/FileHandler";
import { FormGroup } from "../../../components/Forms/Form";
import { useState } from "react";
import { filePostRequestWithAuth } from "../../../components/utils/requests";
import useAuthContext from "../../../components/contexts/useAuthContext";
import { ButtonsContainer } from "../../../components/UI/Dashboard/Section";
import { makeForm } from "../../../components/UI/Files/UploaderFunctions";
import useLazyPatchRequest from "../../../components/Hooks/useLazyPatchRequest";
import { patchRequestWithAuth } from "../../../components/utils/requests";
import Spinner from "../../../components/UI/Spinner";
import { ShowError } from "../../../components/UI/errors";
import { useRouter } from "next/router";

export default function UploadFile() {
  const router = useRouter();
  const [fileUploaderError, setFileUploaderError] = useState(null);
  const [isFileUploading, setIsFileUploading] = useState(false);
  const [files, setFiles] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const ctx = useAuthContext();
  const { error, loading, makePatchRequest } = useLazyPatchRequest(
    `/user/${ctx.userDetail.sub}`,
    {
      onSuccess: () => {
        router.push("/dashboard/manage-file?tab=view");
      },
    }
  );
  async function sendFiles(files) {
    const fileResponse = [];
    for (const file of files) {
      const formData = {
        clientName: "file",
        subId: ctx.userDetail.sub,
        file,
      };
      const body = makeForm(formData);
      const response = await uploadFile({ body });
      fileResponse.push(response);
    }
    return fileResponse;
  }

  async function uploadFile(body) {
    return await filePostRequestWithAuth("/files", body);
  }

  async function fileCreationHandler(values) {
    if (fileUploaderError) {
      setFileUploaderError(null);
    }
    setIsFileUploading(true);
    // setLoading(true);
    try {
      const body = {};

      const fileUploadResponse = await sendFiles(files);
      const fileUploadIds = fileUploadResponse.map(
        (response) => response.fileSubmissionResponses[0].id
      );
      setIsFileUploading(false);
      body.files = fileUploadIds;
      // console.log(body.files);
      await makePatchRequest(body);
      // await patchRequestWithAuth({ files: body.files });
    } catch (err) {
      console.error(err);
      setFileUploaderError(err);
      setIsFileUploading(false);
    }
  }
  return (
    <>
      <Head>
        <title>Files - Dashboard | CodeSpace</title>
      </Head>
      <h1 className="text-center text-2xl mt-2">Upload Files</h1>
      <Spinner loading={loading} />
      <ShowError error={error} />
      <FormGroup>
        <FileHandler
          files={files}
          setFiles={setFiles}
          setDisableFileUpload={setDisabled}
          customError={fileUploaderError}
        ></FileHandler>
      </FormGroup>
      <button className="nav-btn" onClick={fileCreationHandler}>
        Upload
      </button>
    </>
  );
}
