import fileSize from "filesize";
import { RiDeleteBin7Line } from "react-icons/ri";

import {
  GetFileIcon,
  getFileNameFromPath,
  getFileType,
  trimFilename,
} from "./utils";

export default function DisplaySavedFileData({ file, deleteFileFn }) {
  return (
    <div className="border border-gray-200 rounded-md p-3 m-2 w-1/4">
      <div className="flex">
        <GetFileIcon fileType={file.data.mimeType} />
        <div>
          <a
            href={file.url}
            className="underline hover:text-blue-500 break-all"
          >
            {trimFilename(getFileNameFromPath(file.data.path))}
          </a>
          <div className="text-gray-600 text-sm">
            {getFileType(file.data.mimeType).toUpperCase()}{" "}
            {fileSize(file.data.fileSize)}
          </div>
        </div>
        <button className="ml-auto" onClick={deleteFileFn}>
          <RiDeleteBin7Line />
        </button>
      </div>
    </div>
  );
}
