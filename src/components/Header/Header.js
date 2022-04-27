import "./Header.scss";
import Logo from "../../assets/images/quiz.svg";
import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img className="logo" alt="Quiz logo" src={Logo} />
        </div>
      </Link>
    </div>
  );
}

export default Header;
