import { Checkbox, FormControlLabel, Select, TextField } from "@mui/material";
import React from "react";

type FilterDropDownType = {
  data: DeviceType[];
};

const FilterDropDown: React.FC<FilterDropDownType> = ({ data }) => {
  // Data prop will be already filtered unique data that's wanted from
  // product
  // Loop over data, generate checkbox with appropiate label

  return (
    <div>
      <Select>
        <FormControlLabel label="ba" control={<Checkbox checked={true} />} />
      </Select>
    </div>
  );
};

export default FilterDropDown;
