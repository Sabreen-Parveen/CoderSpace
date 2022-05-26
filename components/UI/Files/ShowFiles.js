import Spinner from "../Spinner";
import { ShowError } from "../errors";
import useFileGetRequestWithoutAuth from "../../Hooks/useFileGetRequestWithoutAuth";

export default function ShowFiles({ fileIds, additionalData }) {
  return (
    <>
      {fileIds.map((fileId, index) => (
        <ShowFile additionalData={additionalData} key={index} fileId={fileId} />
      ))}
    </>
  );
}

function ShowFile({ fileId, additionalData }) {
  const { data, error, loading } = useFileGetRequestWithoutAuth(
    `/file/${fileId}`
  );

  return (
    <div>
      <Spinner loading={loading} />
      <ShowError error={error} />
      {data !== null ? (
        <ShowFileData
          showAdditionalData={additionalData}
          data={data.getFileResponse}
        />
      ) : null}
    </div>
  );
}

function ShowFileData({ data, showAdditionalData = false }) {
  return (
    <div className="p-3">
      <p>
        <span className="font-bold">Name:</span> {data.data.path.split("/")[1]}
      </p>
      {showAdditionalData ? (
        <p>
          <span className="font-bold">S3 path:</span> {data.data.path}
        </p>
      ) : null}
      <a
        className="nav-btn block w-max mt-2"
        href={data.fileAccessUrl}
        target="_blank"
        rel="noreferrer"
      >
        Open file
      </a>
    </div>
  );
}
