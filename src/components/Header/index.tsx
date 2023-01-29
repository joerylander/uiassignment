import { NavLink } from "react-router-dom";
import "./header.css";
import uilogo from "../../images/uilogoblue.png";

// NavLink allows styling for active classes i.e. active, hover etc
// Which we need to apply different logos depending on active style effect

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        <img src={uilogo} alt="ubiquity logo" />
      </NavLink>
      <div className="header__container">
        <div className="header__title">Devices</div>
        <div className="header__author">Joe Rylander</div>
      </div>
    </header>
  );
};

export default Header;
