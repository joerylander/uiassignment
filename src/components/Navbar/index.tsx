import React, { useState } from "react";
import "./navbar.css";
import { BsFillGridFill, BsGrid, BsListTask, BsListUl } from "react-icons/bs";
import Searchbar from "../SearchBar";
import GridViewIcon from "@mui/icons-material/GridView";
import { Button, IconButton } from "@mui/material";
import { ViewType } from "../../pages/Home";

type NavbarType = {
  columns: any;
  setViewState: React.Dispatch<React.SetStateAction<ViewType>>;
  filterInput: string;
  setFilterInput: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar: React.FC<NavbarType> = ({
  columns,
  setViewState,
  filterInput,
  setFilterInput,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInput(e.target.value);
  };

  return (
    <nav className="nav">
      <Searchbar
        placeholder="Search..."
        onChange={handleChange}
        filterInput={filterInput}
      />

      <section className="nav__container">
        <IconButton onClick={() => setViewState("list")}>
          <BsListTask style={{ width: "3rem", height: "2.5rem" }} />
          {/* <BsListUl style={{ width: "2.5rem", height: "2.5rem" }} /> */}
        </IconButton>

        {/* <BsFillGridFill style={{ width: "2.5rem", height: "2.5rem" }} /> */}
        <IconButton onClick={() => setViewState("grid")}>
          <BsGrid style={{ width: "2rem", height: "2rem" }} />
        </IconButton>
        <Button variant="text" style={{ color: "#606060", fontWeight: "500" }}>
          {/* Expand filter when clicked on that lists checkbox with names of products */}
          Filter
        </Button>
      </section>
    </nav>
  );
};

export default Navbar;
