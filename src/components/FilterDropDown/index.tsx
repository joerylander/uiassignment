import React, { useState } from "react";
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
  const boolArr = new Array(data.length).fill(false);

  const [isBool, setIsBool] = useState<boolean[]>(boolArr);
  const toggleCheckboxValue = (index: number, label: string) => {
    const boolVal = isBool.map((bool, i) => (i === index ? !bool : bool));
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
    <Select
      className="filter__wrapper"
      sx={{ background: "red", width: "3.4rem" }}
      inputProps={{ IconComponent: () => null }}
    >
      <h3 className="filter__title">Product line</h3>
      {Array.from(data).map((label, i) => {
        return (
          <MenuItem key={i} onClick={() => toggleCheckboxValue(i, label)}>
            <FormControlLabel
              label={label}
              control={<Checkbox checked={isBool[i]} />}
              className="filter__checkbox"
            />
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default FilterDropDown;
