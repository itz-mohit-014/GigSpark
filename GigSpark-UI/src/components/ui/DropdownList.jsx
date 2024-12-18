import React, { useState } from "react";
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

const DropdownList = ({ lists, label, setValue, value, errors }) => {
  const [selectValue, setSelectedValue] = useState(value);

  const handleSelectCotegory = (id) => {
    setSelectedValue(id);
    setValue("category", id);
  };

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
      <Select onValueChange={handleSelectCotegory} value={selectValue}>
        <SelectTrigger className="w-full border-gray-300 shadow-input border-2 text-base">
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
      {errors?.category && (
        <p className="text-red-500 text-sm capitalize">{errors.category?.message}*</p>
      )}
    </LabelInputContainer>
  );
};

export default DropdownList;
