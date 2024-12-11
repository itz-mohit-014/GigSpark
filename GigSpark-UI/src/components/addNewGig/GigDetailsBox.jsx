import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { LabelInputContainer } from "../forms/InputBoxUtils";
import { Label } from "../ui/label";

const RichTextEditor = ({handleFormValues, gigDetails}) => {

  return (
    <LabelInputContainer className={"space-y-0"}>
      <Label
        className={"text-lg text-gray-500"}
        children={
          <>
            Description
            <span className="text-[#EF476F]"> *</span>
          </>
        }
      />
      <ReactQuill
        value={gigDetails?.description}
        onChange={(e) => handleFormValues(e, "description")}
        theme="snow"
        placeholder="Enter Gig full details here..."
        className="mb-4 bg-white rounded-md"
      />
      <style>
        {` /* basic style for the text area */
          .ql-editor {
            min-height: 12rem;
            font-size:1rem;
            color: #6b7280 ;
          }
        `}
      </style>
    </LabelInputContainer>
  );
};

export default RichTextEditor;
