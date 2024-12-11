import React, { useState } from "react";
import { LabelInputContainer } from "./InputBoxUtils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { IoCloseSharp, IoGitMerge, IoLogoEdge } from "react-icons/io5";
import { FileUpload } from "../ui/FileUpload";
import DropdownList from "../ui/DropdownList";
import { useSelector } from "react-redux";
import RichTextEditor from "../addNewGig/GigDetailsBox";

const NewGigForm = ({ gigDetails, setGigDetails }) => {

  const [keywords, setKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");
  const allCategory = useSelector((store) => store.category);

  const handleUpdateKeywordList = () => {
    let textArr = keywordInput.split(",");
    textArr = textArr.filter((word) => word.trim() !== "");
    setKeywords((prev) => [...prev, ...textArr]);
    setKeywordInput("");
  };

  const handleRemoveTag = (text, i) => {
    const updateKeywordList = keywords.filter(
      (word, idx) => word !== text && i !== idx
    );
    setKeywords(updateKeywordList);
  };

  const handleTagValueByInput = (text) => {
    if (text.includes(",")) {
      let textArr = keywordInput.split(",");
      textArr = textArr.filter((word) => word.trim() !== "");
      setKeywords((prev) => [...prev, ...textArr]);
      setKeywordInput("");
    } else {
      setKeywordInput(text);
    }
  };

  const handleFormValues = (e, field) => {
    const updateGigDetails = {...gigDetails};
    updateGigDetails[field] = e.target.value;
    setGigDetails(updateGigDetails);
  };

  return (
    <div>
      <div className="flex flex-col gap-3">
        <LabelInputContainer className={"space-y-0"}>
          <Label
            htmlFor="title"
            className={"text-lg text-gray-500"}
            children={
              <>
                Title
                <span className="text-[#EF476F]"> *</span>
              </>
            }
          />
          <Input
            id="title"
            placeholder="Enter gig title"
            type="text"
            className={"text-lg p-4 bg-gray-50"}
            value={gigDetails?.title}
            onChange={(e) => handleFormValues(e, "title")}
          />
        </LabelInputContainer>

        <RichTextEditor handleFormValues={handleFormValues} gigDetails={gigDetails} />

        <LabelInputContainer className={"space-y-1"}>
          <Label
            htmlFor="keywords"
            className={"text-lg text-gray-500"}
            children={
              <>
                keywords
                <span className="text-[#EF476F]"> * </span>
                <span className="text-sm align-bottom font-normal text-gray-500">
                  ( saperated by ',' OR click to Add )
                </span>
              </>
            }
          />
          <div className="flex gap-1 sm:gap-3 w-full *:w-full">
            <Input
              id="keywords"
              placeholder="Enter keywords here..."
              type="text"
              value={keywordInput}
              onChange={(e) => handleTagValueByInput(e.target.value)}
              className={"text-lg p-4 bg-gray-50 "}
            />
            <button
              onClick={handleUpdateKeywordList}
              disabled={!keywordInput}
              className="rounded-md border-2 border-gray-300 px-3 sm:px-8 font-medium bg-gray-950 text-gray-100 active:scale-95 max-w-fit disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 transition-all disabled:active:scale-100"
            >
              Add
            </button>
          </div>
          <div className="px-3 flex gap-3 flex-wrap">
            {keywords.length > 0 &&
              keywords.map((word, i) => (
                <div className="flex gap-0.5" key={i}>
                  <span
                    key={i}
                    className="rounded-lg px-2 py-1 w-fit text-neutral-600 dark:bg-neutral-800 dark:text-white shadow-input text-xs"
                  >
                    {word}
                  </span>
                  <IoCloseSharp
                    className="text-[#EF476F] cursor-pointer p-1 text-xl -mt-1.5"
                    onClick={() => handleRemoveTag(word, i)}
                  />
                </div>
              ))}
          </div>
        </LabelInputContainer>

        <DropdownList
          lists={allCategory}
          label={"Category"}
          gigDetails={gigDetails}
          handleFormValues={handleFormValues}
        />

        <FileUpload
          multiple={false}
          label={"Upload cover image"}
          maxLength={1}
          selectedFileColumn={1}
          onChange={(e) => handleFormValues(e, "coverPicture")}
        />

        <FileUpload
          multiple={true}
          maxLength={5}
          label={"Upload multiple images (maximum 5)"}
          selectedFileColumn={2}
          onChange={(e) => handleFormValues(e, "coverPicture")}
        />
      </div>
    </div>
  );
};

export default NewGigForm;
