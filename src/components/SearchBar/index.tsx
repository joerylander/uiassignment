import React from "react";
import { Box, IconButton, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./searchbar.css";

type SearchBarType = {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  filterInput: string;
};

const Searchbar: React.FC<SearchBarType> = ({
  placeholder,
  onChange,
  filterInput,
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

      <IconButton onClick={(e: any) => console.log(e)}>
        <CloseIcon />
      </IconButton>
    </section>
  );
};

export default Searchbar;
