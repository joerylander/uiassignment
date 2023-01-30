import React from "react";
import { Box, IconButton, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./searchbar.css";

type SearchBarType = {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  filterInput: string;
  setFilterInput: React.Dispatch<React.SetStateAction<string>>;
};

const Searchbar: React.FC<SearchBarType> = ({
  placeholder,
  onChange,
  filterInput,
  setFilterInput,
}) => {
  return (
    <section className="nav__searchbar">
      <IconButton onClick={(e: any) => console.log(e)}>
        <SearchIcon />
      </IconButton>

      <input
        className="nav__searchbar--input"
        placeholder={placeholder}
        onChange={onChange}
        value={filterInput}
      />

      <IconButton onClick={(e: any) => setFilterInput("")}>
        <CloseIcon />
      </IconButton>
    </section>
  );
};

export default Searchbar;
