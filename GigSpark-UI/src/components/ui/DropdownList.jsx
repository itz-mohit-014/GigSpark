import React from "react";
import { Label } from "./label";
import { LabelInputContainer } from "../forms/InputBoxUtils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const DropdownList = ({ lists, label, gigDetails, handleFormValues }) => {

  return (
    <LabelInputContainer>
      <Label
        children={
          <>
            {label}
            <span className="text-[#EF476F]"> *</span>
          </>
        }
        htmlFor={label}
        className={"text-lg text-gray-500"}
      />
      <Select value={gigDetails?.category} onValueChange={(e) => handleFormValues(e, "category")}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {lists.map((item) => (
              <SelectItem value={item?._id} key={item._id}>
                {item?.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </LabelInputContainer>
  );
};

export default DropdownList;
