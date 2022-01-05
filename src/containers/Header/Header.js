import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./header.scss";
function Header() {
  return (
    <header className="header" role="banner">
      <Navbar />
      <div className="header__content">
        <h1>immersive experiences that deliver</h1>
      </div>
    </header>
  );
}

export default Header;
