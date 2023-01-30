import React, { useState } from "react";
import "./navbar.css";
import { BsFillGridFill, BsGrid, BsListTask, BsListUl } from "react-icons/bs";
import Searchbar from "../SearchBar";
import { Button, IconButton } from "@mui/material";
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
          {!btnToggle && <BsListTask size={22} />}
          {btnToggle && <BsListUl size={22} />}
        </IconButton>

        <IconButton name="grid-btn" onClick={(e) => handleClick(e)}>
          {!btnToggle && <BsFillGridFill size={18} />}
          {btnToggle && <BsGrid size={18} />}
        </IconButton>
        <Button variant="text" style={{ color: "#606060", fontWeight: "500" }}>
          {/* Expand filter when clicked on that lists checkbox with names of products */}
          Filter
          <FilterDropDown
            data={Array.from(uniqueProductList)}
            setLabelValue={setLabelValue}
            labelValue={labelValue}
          />
        </Button>
      </section>
    </nav>
  );
};

export default Navbar;
