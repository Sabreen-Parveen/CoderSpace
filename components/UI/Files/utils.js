import { BiFileBlank } from "react-icons/bi";
import {
  GrDocumentPdf,
  GrDocumentText,
  GrDocumentWord,
  GrDocumentExcel,
  GrDocumentPpt,
} from "react-icons/gr";
import { FaRegFileImage } from "react-icons/fa";

// taken from: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
const getIconAndTypeFromMimeType = {
  "application/pdf": {
    icon: <GrDocumentPdf className="icon pdfIcon" />,
    type: "pdf",
  },
  "image/png": {
    icon: <FaRegFileImage className="icon" />,
    type: "png",
  },
  "image/gif": {
    icon: <FaRegFileImage className="icon" />,
    type: "gif",
  },
  "image/jpeg": {
    icon: <FaRegFileImage className="icon" />,
    type: "jpeg",
  },
  "image/bmp": {
    icon: <FaRegFileImage className="icon" />,
    type: "bmp",
  },
  "text/csv": {
    icon: <GrDocumentText className="icon" />,
    type: "csv",
  },
  "application/msword": {
    icon: <GrDocumentWord className="icon" />,
    type: "word",
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    icon: <GrDocumentWord className="icon" />,
    type: "word",
  },
  "application/vnd.oasis.opendocument.presentation": {
    icon: <GrDocumentPpt className="icon" />,
    type: "ppt",
  },
  "application/vnd.oasis.opendocument.spreadsheet": {
    icon: <GrDocumentExcel className="icon" />,
    type: "excel",
  },
  "application/vnd.ms-powerpoint": {
    icon: <GrDocumentPpt className="icon" />,
    type: "ppt",
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    icon: <GrDocumentPpt className="icon" />,
    type: "ppt",
  },
  "application/vnd.ms-excel": {
    icon: <GrDocumentExcel className="icon" />,
    type: "excel",
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    icon: <GrDocumentExcel className="icon" />,
    type: "excel",
  },
};

export const acceptType = Object.keys(getIconAndTypeFromMimeType).join(", ");

export function GetFileIcon({ mimeType }) {
  const fileTypeData = getIconAndTypeFromMimeType[mimeType];
  if (fileTypeData) {
    return fileTypeData.icon;
  }
  return <BiFileBlank className="icon" />; // default icon
}

export function getFileType(mimeType) {
  const fileTypeData = getIconAndTypeFromMimeType[mimeType];
  if (fileTypeData) {
    return fileTypeData.type;
  }
  return "unknown";
}

export function trimFilename(name) {
  if (name.length > 20) {
    return name.slice(0, 20) + "...";
  }
  return name;
}

export function getFileNameFromPath(name) {
  if (name.includes("/")) {
    const [prefix, ...filename] = name.split("/");
    return filename.join("/");
  }
  return name;
}
