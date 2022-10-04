import React from "react";
import styled from "styled-components";
import Logo from "../images/logo-white.svg";

const Foot = styled.footer``;
function Footer() {
  return (
    <>
      <div className="flex">
        <div>
          <img
            className="footer-logo"
            src={Logo}
            alt="Easybank's company logo"
          />
          <div className="sm-links">
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i className="bi bi-pinterest"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-nav">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrapper">
        <button className="cta-btn" href="#">
          Request Invite
        </button>
        <p className="copyright">&copf; Easybank. All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
