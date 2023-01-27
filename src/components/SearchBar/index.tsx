import React from "react";
import { Box, IconButton, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type SearchBarType = {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Searchbar: React.FC<SearchBarType> = ({ placeholder, onChange }) => {
  return (
    <Box className="nav__searchbar">
      <IconButton onClick={(e: any) => console.log(e)}>
        <SearchIcon />
      </IconButton>

      <Input
        className="nav__searchbar--input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </Box>
  );
};

export default Searchbar;
