import React, { useState } from "react";
import "./searchbar.css";
import { BsFillGridFill, BsGrid, BsListTask, BsListUl } from "react-icons/bs";

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
      <input
        type="text"
        placeholder="Search..."
        className="nav__searchbar"
        onChange={handleChange}
        value={searchInput}
      />

      <div className="nav__container">
        <div className="nav__view--list">
          <BsListTask style={{ width: "2.5rem", height: "2.5rem" }} />
          {/* <BsListUl style={{ width: "2.5rem", height: "2.5rem" }} /> */}
        </div>
        <div className="nav__view--grid">
          {/* <BsFillGridFill style={{ width: "2.5rem", height: "2.5rem" }} /> */}
          <BsGrid style={{ width: "2rem", height: "2rem" }} />
        </div>
        {/* Expand filter when clicked on that lists checkbox with names of products */}
        <div className="nav__filter">Filter</div>
      </div>
    </nav>
  );
};

export default Navbar;
