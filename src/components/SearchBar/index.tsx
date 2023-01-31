import React, { useRef } from "react";
import { IconButton } from "@mui/material";
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
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <section className="nav__searchbar">
      <IconButton onClick={() => inputRef?.current?.focus()}>
        <SearchIcon />
      </IconButton>

      <input
        className="nav__searchbar--input"
        placeholder={placeholder}
        onChange={onChange}
        value={filterInput}
        ref={inputRef}
      />

      <IconButton onClick={() => setFilterInput("")}>
        <CloseIcon />
      </IconButton>
    </section>
  );
};

export default Searchbar;
