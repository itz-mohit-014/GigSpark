import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import ViewSelectedFile from "./OpenSelectedImage";

export const FileUpload = ({
  onChange,
  multiple,
  label,
  maxLength,
  selectedFileColumn,
  gigDetails,
  handleFormValues,
}) => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (newFiles) => {
    const updateFiles = [...files, ...newFiles].slice(-maxLength);
    setFiles(updateFiles);
    onChange && onChange(newFiles);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="border-2 py-2 border-dashed dark:bg-black border-neutral-300 dark:border-neutral-800 rounded-lg">
      <div
        onClick={handleClick}
        className="p-1.5 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden text-gray-500"
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="absolute bg-red-500 w-full h-full top-0 left-0 hidden"
          multiple={multiple}
          max={"5"}
          
        />
        <FaCloudUploadAlt className="text-2xl mx-3 inline-block" />
        <span className="text-sm font-medium">{label}</span>
      </div>

      {files.length > 0 && (
        <div
          className={`relative w-full mx-auto p-2 ${
            files.length > 0 &&
            `md:grid grid-cols-${selectedFileColumn} row-auto gap-3`
          }`}
        >
          {files.map((file, idx) => (
            <ViewSelectedFile
              file={file}
              key={`file-${idx}`}
              idx={idx}
              setFiles={setFiles}
            />
          ))}
        </div>
      )}
    </div>
  );
};
