import "./header.css";
import uilogo from "../../images/uilogoblue.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={uilogo} alt="ubiquity logo" />
      </div>
      <div className="header__container">
        <div className="header__title">Devices</div>
        <div className="header__author">Joe Rylander</div>
      </div>
    </header>
  );
};

export default Header;
