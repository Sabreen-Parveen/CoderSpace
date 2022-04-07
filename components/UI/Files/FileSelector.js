import { acceptType } from "./utils";

export default function FileSelector({
  labelText = "Browse",
  multiple = false,
  insertFileFn,
}) {
  return (
    <div className="relative mt-3 ml-auto">
      <label htmlFor="upload-input" className="cursor-pointer nav-btn">
        {labelText}
      </label>
      <input
        id="upload-input"
        type="file"
        multiple={multiple}
        onChange={insertFileFn}
        className="opacity-0 absolute top-0 left-0 -z-1"
        accept={acceptType}
      />
    </div>
  );
}
