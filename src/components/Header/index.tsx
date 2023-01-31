import { NavLink } from "react-router-dom";
import "./header.css";
import uilogoDefault from "../../images/default.png";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        <img src={uilogoDefault} alt="ubiquity logo" />
      </NavLink>
      <div className="header__container">
        <div className="header__title">Devices</div>
        <div className="header__author">Joe Rylander</div>
      </div>
    </header>
  );
};

export default Header;
