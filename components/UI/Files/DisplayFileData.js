import fileSize from "filesize";
import { TiDeleteOutline } from "react-icons/ti";

import { getFileType, trimFilename, GetFileIcon } from "./utils";

export default function DisplayFileData({
  index,
  file,
  showLargeFileError,
  removeFileFn,
}) {
  return (
    <div
      key={index}
      className={`border-2 ${
        showLargeFileError ? "border-red-400" : "border-gray-200"
      } rounded-md py-1 px-2 my-2`}
    >
      <div className="flex">
        <GetFileIcon mimeType={file.type} />
        <div>
          <p className="font-bold">{trimFilename(file.name)}</p>
          <div className="text-gray-600 text-sm">
            {getFileType(file.type).toUpperCase()} {fileSize(file.size)}
            {showLargeFileError ? (
              <span className="text-red-500">
                {" "}
                Maximum file size limit is 10MB
              </span>
            ) : null}
          </div>
        </div>

        <button className="ml-auto" onClick={removeFileFn}>
          <TiDeleteOutline
            style={{
              height: "1.5rem",
              width: "1.5rem",
            }}
          />
        </button>
      </div>
    </div>
  );
}
