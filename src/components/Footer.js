import React from "react";
import { HashLink } from "react-router-hash-link";
import "../assets/css/Footer.css";
import WhiteLogo from "../assets/statics/logo_25w-1.svg";
import Instagram from "../assets/statics/Icon simple-instagram.svg";
import Facebook from "../assets/statics/Icon ionic-logo-facebook.svg";
import Twitter from "../assets/statics/Icon simple-twitter.svg";
import Youtube from "../assets/statics/Icon simple-youtube.svg";
import Linkedin from "../assets/statics/Icon awesome-linkedin-in.svg";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__branding">
            <a href="/">
              <img src={WhiteLogo} alt="25Watts" />
            </a>
            <p className="footer__rights">2020 © All rights reserved.</p>
          </div>
          <div className="footer__links">
            <div className="footer__links-col">
              <ul>
                <li className="footer__link">
                  <HashLink className="link" smooth to={"#about"}>
                    About
                  </HashLink>
                </li>
                <li className="footer__link">
                  <HashLink className="link" smooth to={"#services"}>
                    Services
                  </HashLink>
                </li>
                <li className="footer__link">
                  <HashLink className="link" smooth to={"#product"}>
                    Products
                  </HashLink>
                </li>
              </ul>
            </div>
            <div className="footer__links-col">
              <ul>
                <li className="footer__link">
                  <HashLink className="link" smooth to={"#details"}>
                    Details
                  </HashLink>
                </li>
                <li className="footer__link">
                  <HashLink className="link" smooth to={"#contact"}>
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__social">
            <h4 className="social__title">Follow us</h4>
            <div className="social__links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="social__icons"
                />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={Facebook} alt="Facebook" className="social__icons" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src={Twitter} alt="Twitter" className="social__icons" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <img src={Youtube} alt="YouTube" className="social__icons" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img src={Linkedin} alt="LinkedIn" className="social__icons" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
