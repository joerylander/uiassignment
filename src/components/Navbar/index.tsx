import React, { useState } from "react";
import "./searchbar.css";
import { BsFillGridFill, BsGrid, BsListTask, BsListUl } from "react-icons/bs";
import searchicon from "../../images/searchicon.png";
import Searchbar from "../SearchBar";
const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // if (searchInput.length > 0) {
  //   countries.filter((country) => {
  //     return country.name.match(searchInput);
  //   });
  // }
  const getSearchBar = () => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      console.log(e.target.value);

      setSearchInput(e.target.value);
    };

    return (
      <Searchbar placeholder="Search..." onChange={(e) => handleChange(e)} />
    );
  };

  return (
    <nav className="nav">
      {/* <div className="preview-zone">
        <h4>Icon Search</h4>
        <section className="search search--icon" role="search">
          <form action="#" method="get" className="search__form">
            <input
              id="icon-search"
              className="search__input"
              type="search"
              name="search"
              maxlength="100"
              placeholder="I am looking for..."
              required
            />
            <button className="search__btn-submit" type="submit"></button>
          </form>
        </section>
      </div> */}
      {/* <section className="nav__searchbar" role="search"> */}
      {/* <form action="submit" className="nav__searchbar">
        <button className="nav__searchbar--submit" type="submit">
          <img src={searchicon} />
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="nav__searchbar--input"
          onChange={handleChange}
          value={searchInput}
        />
        <button className="nav__searchbar--reset" type="reset">
          X
        </button>
      </form> */}
      {getSearchBar()}
      {/* </section> */}

      <section className="nav__container">
        <button className="nav__view--list">
          <BsListTask style={{ width: "2.5rem", height: "2.5rem" }} />
          {/* <BsListUl style={{ width: "2.5rem", height: "2.5rem" }} /> */}
        </button>
        <button className="nav__view--grid">
          {/* <BsFillGridFill style={{ width: "2.5rem", height: "2.5rem" }} /> */}
          <BsGrid style={{ width: "2rem", height: "2rem" }} />
        </button>
        {/* Expand filter when clicked on that lists checkbox with names of products */}
        <button className="nav__filter">Filter</button>
      </section>
    </nav>
  );
};

export default Navbar;
