import React from "react";
import { Box, IconButton, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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
    <Box className="nav__searchbar">
      <IconButton onClick={(e: any) => console.log(e)}>
        <SearchIcon />
      </IconButton>

      <Input
        className="nav__searchbar--input"
        placeholder={placeholder}
        onChange={onChange}
        value={filterInput}
      />
    </Box>
  );
};

export default Searchbar;
