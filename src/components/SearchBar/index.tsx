import React from "react";
import { Box, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type SearchBarType = {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Searchbar: React.FC<SearchBarType> = ({ placeholder, onChange }) => {
  return (
    <Box className="nav__searchbar">
      <SearchIcon />
      <Input
        className="nav__searchbar--input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </Box>
  );
};

export default Searchbar;
