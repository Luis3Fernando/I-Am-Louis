import React from "react";
import "./header.css";
import abajo from "../../assets/icon/angulo-abajo.png";
import logo from "../../assets/louis.png";

function Header() {
  return (
    <header>
      <div className="header__left">
        <img src={abajo} alt="flecha abajo" />
      </div>
      <div className="header__right">
        <img src={logo} alt="" />
        {/* esto es para tablets y pc*/}
        <div className="header__right--links">
          <a href="">About</a>
          <a href="">Blog</a>
          <a href="https://wa.me/51904479320">Contact</a>
          <a href="">Project</a>
          <a href="">Work</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
