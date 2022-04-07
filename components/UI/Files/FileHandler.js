import { FiInbox } from "react-icons/fi";

import FileSelector from "./FileSelector";
import DisplayFileData from "./DisplayFileData";

export default function FileHandler({
  files,
  setFiles,
  setDisableFileUpload,
  fileSizeLimit = 10000000,
  customError,
}) {
  function setFilesState(files) {
    let disabled = false;
    for (const file of files) {
      if (isFileTooLarge(file) && disabled !== true) {
        disabled = true;
      }
    }
    setDisableFileUpload(disabled);
    setFiles(files);
  }

  function insertFiles(e) {
    const selectedFiles = e.target.files;
    const files = [];
    for (const file of selectedFiles) {
      files.push(file);
    }
    setFilesState(files);
  }

  function removeFile(index) {
    const allFiles = [...files];
    allFiles.splice(index, 1);
    setFilesState(allFiles);
  }

  function isFileTooLarge(file) {
    if (file.size > fileSizeLimit) {
      return true;
    }
    return false;
  }

  return (
    <>
      {files.length !== 0 ? (
        <div className="px-3 border-2 border-dotted border-gray-400 rounded-md">
          {files.map((file, index) => (
            <DisplayFileData
              key={index}
              index={index}
              file={file}
              showLargeFileError={isFileTooLarge(file)}
              removeFileFn={() => removeFile(index)}
            />
          ))}
        </div>
      ) : (
        <>
          <div
            className={`text-md p-7 border-2 border-dotted ${
              customError ? "border-red-500" : "border-gray-400"
            } bg-gray-100 text-gray-500 rounded-md flex flex-col items-center`}
          >
            <FiInbox className="w-14 h-14" />
            <p>Upload your files here</p>
            <p>You can upload pdf, jpeg, png, ppt & doc files</p>
          </div>
          <div className="text-red-500 font-bold italic text-sm">
            {customError?.message}
          </div>
        </>
      )}
      <FileSelector
        labelText="Browse files"
        multiple={true}
        insertFileFn={insertFiles}
      />
    </>
  );
}
