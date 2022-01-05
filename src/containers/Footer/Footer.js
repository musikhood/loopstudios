import React from "react";
import "./footer.scss";
import logo from "../../images/logo.svg";
import fb from "../../images/icon-facebook.svg";
import tw from "../../images/icon-twitter.svg";
import pt from "../../images/icon-pinterest.svg";
import insta from "../../images/icon-instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content-a">
          <div className="footer__logo-box">
            <img src={logo} alt="logo" className="footer__logo" />
          </div>
          <div className="footer__nav">
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className="footer__content-b">
          <div className="footer__social-media">
            <div className="footer__image-box">
              <img src={fb} alt="fb" className="footer__img" />
            </div>
            <div className="footer__image-box">
              <img src={tw} alt="tw" className="footer__img" />
            </div>
            <div className="footer__image-box">
              <img src={pt} alt="pt" className="footer__img" />
            </div>
            <div className="footer__image-box">
              <img src={insta} alt="insta" className="footer__img" />
            </div>
          </div>
          <div className="footer__copyright">
            &copy; 2022 Loopstudios. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
