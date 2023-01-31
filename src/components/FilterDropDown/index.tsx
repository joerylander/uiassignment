import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./filterdropdown.css";

type FilterDropDownType = {
  data: string[];
  labelValue: string[];
  setLabelValue: React.Dispatch<React.SetStateAction<string[]>>;
  setDropDownToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterDropDown: React.FC<FilterDropDownType> = ({
  data,
  labelValue,
  setLabelValue,
  setDropDownToggle,
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
    <section className="filter__container">
      <div className="filter__container--header">
        <h4 className="filter__container-title">Filter</h4>
        <button
          className="filter__container-btn-close"
          onClick={() => setDropDownToggle(false)}
        >
          <CloseIcon />
        </button>
      </div>

      <div className="filter__wrapper">
        <h5 className="filter__title">Product line</h5>
        <ul>
          {data.map((label, i) => {
            return (
              <li
                key={i}
                onClick={() => toggleCheckboxValue(i, label)}
                className="filter__checkbox"
              >
                <input
                  type="checkbox"
                  checked={isBool[i]}
                  className="filter__checkbox--check"
                />
                <label className="filter__checkbox--item">{label}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FilterDropDown;
