import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, MenuItem, Select } from "@mui/material";
import "./filterdropdown.css";

type FilterDropDownType = {
  data: string[];
  labelValue: string[];
  setLabelValue: React.Dispatch<React.SetStateAction<string[]>>;
};

const FilterDropDown: React.FC<FilterDropDownType> = ({
  data,
  labelValue,
  setLabelValue,
}) => {
  const t = data.map((label) => {
    if (label === "airMAX") return label;
  });

  const boolArr = new Array(data.length).fill(false);

  const [isBool, setIsBool] = useState<boolean[]>(boolArr);
  const toggleCheckboxValue = (index: number, label: string) => {
    const boolVal = isBool.map((v: boolean, i: number) =>
      i === index ? !v : v
    );
    setIsBool(boolVal);

    if (data[index] === label && isBool[index] === false) {
      setLabelValue([...labelValue, label]);
    }
    if (data[index] === label && isBool[index] === true) {
      const removeLabel = [...labelValue].filter(
        (label) => data[index] !== label
      );
      setLabelValue(removeLabel);
    }
  };

  return (
    <div>
      <Select>
        {Array.from(data).map((label, i: number) => {
          return (
            <MenuItem key={i}>
              <FormControlLabel
                label={label}
                control={
                  <Checkbox
                    checked={isBool[i]}
                    onChange={() => toggleCheckboxValue(i, label)}
                  />
                }
                className="filter__checkbox"
              />
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};

export default FilterDropDown;
