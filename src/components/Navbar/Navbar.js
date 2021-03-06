import React, { useState, useEffect } from "react";
import "./navbar.scss";
import logo from "../../images/logo.svg";

function Nav({ name }) {
  return (
    <ul className={name}>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Careers</a>
      </li>
      <li>
        <a href="#">Events</a>
      </li>
      <li>
        <a href="#">Products</a>
      </li>
      <li>
        <a href="#">Support</a>
      </li>
    </ul>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  useEffect(() => {
    let value = isOpen ? "translate(0)" : "translate(-200%)";
    document.querySelector(".nav__mobile-menu").style.transform = value;
  }, [isOpen]);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      setIsOpen(false);
      setChangeColor(false);
    }
    if (window.innerWidth < 801 && window.scrollY > 150) {
      setChangeColor(true);
    }
  });
  window.addEventListener("scroll", () => {
    if (window.innerWidth > 800) return;
    if (window.scrollY > 150) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  });
  return (
    <nav
      className="nav"
      style={
        changeColor
          ? { backgroundColor: "#000" }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="nav__logo-box">
        <img src={logo} alt="logo" className="nav__logo" />
      </div>
      <Nav name="nav__desktop" />
      <div className="nav__mobile">
        <div
          className="nav__menu-box"
          onClick={() => setIsOpen((prevValue) => !prevValue)}
        >
          <div
            className={isOpen ? "nav__menu nav__menu--active" : "nav__menu"}
          ></div>
        </div>
        <Nav name="nav__mobile-menu" />
      </div>
    </nav>
  );
}

export default Navbar;
