import React, { useState } from "react";
import "./navbar.css";
import { BsFillGridFill, BsGrid, BsListTask, BsListUl } from "react-icons/bs";
import Searchbar from "../SearchBar";
import { IconButton } from "@mui/material";
import { ViewType } from "../../pages/Home/Home";
import FilterDropDown from "../FilterDropDown";

type NavbarType = {
  columns: ColumnType[];
  setViewState: React.Dispatch<React.SetStateAction<ViewType>>;
  filterInput: string;
  setFilterInput: React.Dispatch<React.SetStateAction<string>>;
  uniqueProductList: Set<string>;
  setLabelValue: React.Dispatch<React.SetStateAction<string[]>>;
  labelValue: string[];
};

const Navbar: React.FC<NavbarType> = ({
  setViewState,
  filterInput,
  setFilterInput,
  uniqueProductList,
  setLabelValue,
  labelValue,
}) => {
  const [btnToggle, setBtnToggle] = useState(true);
  const [dropDownToggle, setDropDownToggle] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInput(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btnName = e.currentTarget.name;
    if (btnName === "list-btn") {
      console.log("list btn targeted");
      setViewState("list");
      setBtnToggle(true);
    }
    if (btnName === "grid-btn") {
      console.log("grid btn targeted");
      setViewState("grid");
      setBtnToggle(false);
    }
  };

  return (
    <nav className="nav">
      <Searchbar
        placeholder="Search..."
        onChange={handleChange}
        filterInput={filterInput}
        setFilterInput={setFilterInput}
      />

      <section className="nav__container">
        <IconButton name="list-btn" onClick={(e) => handleClick(e)}>
          {!btnToggle ? (
            <BsListTask size={22} />
          ) : (
            <BsListUl
              size={22}
              style={{ backgroundColor: "rgb(246, 246, 248)" }}
            />
          )}
        </IconButton>

        <IconButton name="grid-btn" onClick={(e) => handleClick(e)}>
          {!btnToggle ? (
            <BsFillGridFill
              size={18}
              style={{ backgroundColor: "rgb(246, 246, 248)" }}
            />
          ) : (
            <BsGrid size={18} />
          )}
        </IconButton>
        <button
          className="nav__btn-filter"
          onClick={() => setDropDownToggle(true)}
        >
          <h4 className="nav__btn-filter--text">Filter</h4>
        </button>
      </section>
      {dropDownToggle && (
        <FilterDropDown
          data={Array.from(uniqueProductList)}
          setLabelValue={setLabelValue}
          labelValue={labelValue}
          setDropDownToggle={setDropDownToggle}
        />
      )}
    </nav>
  );
};

export default Navbar;
