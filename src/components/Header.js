import React from "react";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import WhiteLogo from "../assets/statics/logo_25w-1.svg";
import MobileMenu from "../assets/statics/bars-solid.svg";
import MobileMenuClose from "../assets/statics/xmark-solid.svg";
import "../assets/css/Header.css";

export default function Header() {
  //CHANGE HEADER BG ON SCROLL
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 96) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  //MOBILE MENU
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <header id="home" className={navbar ? "header active" : "header"}>
        <a href="/">
          <img
            src={WhiteLogo}
            alt="25Watts White Logo"
            className="header__logo"
          />
        </a>
        <nav className="nav">
          <ul className={click ? "nav__menu active" : "nav__menu"}>
            <li className="nav__item">
              <HashLink
                className="nav__link"
                smooth
                to={"#top"}
                onClick={closeMobileMenu}
              >
                Home
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink
                className="nav__link"
                smooth
                to={"#about"}
                onClick={closeMobileMenu}
              >
                About us
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink
                className="nav__link"
                smooth
                to={"/#services"}
                onClick={closeMobileMenu}
              >
                Services
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink
                className="nav__link"
                smooth
                to={"/#product"}
                onClick={closeMobileMenu}
              >
                Products
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink
                className="nav__link"
                smooth
                to={"/#details"}
                onClick={closeMobileMenu}
              >
                Details
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink
                className="nav__link"
                smooth
                to={"/#contact"}
                onClick={closeMobileMenu}
              >
                Contact
              </HashLink>
            </li>
          </ul>
          <div className="menu__icon" onClick={handleClick}>
            <img
              height={"28px"}
              src={click ? MobileMenuClose : MobileMenu}
              alt=""
            />
          </div>
        </nav>
      </header>
    </>
  );
}
