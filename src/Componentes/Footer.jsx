import React from "react";
import styled from "styled-components";
import Logo from "../images/logo-white.svg";
import Facebook from "../images/icon-facebook.svg";
import Youtube from "../images/icon-youtube.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Instagram from "../images/icon-instagram.svg";

const Foot = styled.footer`
  background-color: hsl(233, 26%, 24%);
  text-align: center;
  color: hsl(220, 16%, 96%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  .flex {
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }
  .easybank {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .footer-logo {
    width: 35%;
  }
  .sm-links {
    display: flex;
    gap: 1.5rem;
  }
  .Redes {
    width: 135%;
  }
  li {
    margin-top: 1rem;
  }
  .cta-btn {
    color: hsl(0, 0%, 100%);
    padding: 0.88rem 1.88rem;
    border-radius: 3.13rem;
    font-size: 0.94rem;
    font-weight: 400;
    display: block;
    margin: auto;
    transition: 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 300% 300%;
    background-image: linear-gradient(
      -45deg,
      hsl(136, 77%, 63%) 0%,
      hsl(136, 65%, 51%) 25%,
      hsl(192, 70%, 51%) 75%,
      hsl(192, 65%, 60%) 100%
    );
    animation: AnimateBG 10s ease infinite;
  }
  @keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .cta-btn:hover {
    filter: brightness(1.2);
    transition: 0.5s ease;
  }
  .copyright {
    margin: 1rem 0;
    font-size: 0.88rem;
    color: hsl(233, 8%, 62%);
  }
  /* ************************ */
  /* MEDIA QUERIES */
  /* ************************ */
  /* ************************ */
  /* OVER 750PX */
  /* ************************ */
  @media (min-width: 750px) {
    flex-direction: row;
    padding: 3.13rem 10rem;
    justify-content: space-between;

    .flex {
      padding-top: 0;
      flex-direction: row;
      align-items: center;
      gap: 5rem;
      width: 50%;
    }
    .easybank {
      /* display: block; */
      height: 100%;
      align-items: start;
      justify-content: space-between;
    }
    .footer-logo {
      width: 80%;
      margin: 0;
    }
    .sm-links {
      gap: 0.75rem;
    }
    .Redes {
      width: 100%;
    }
    .footer-nav {
      display: flex;
      width: 50%;
      height: 100%;
      justify-content: space-between;
      align-items: flex-start;
    }
    li {
      margin-top: 0;
      margin-bottom: 1rem;
      text-align: left;
    }
    .cta-btn {
      margin: 0;
      margin-left: auto;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
`;
function Footer() {
  return (
    <>
      <Foot>
        <div className="flex">
          <div className="easybank">
            <img
              className="footer-logo"
              src={Logo}
              alt="Easybank's company logo"
            />
            <div className="sm-links">
              <a href="http://localhost:3000/">
                <img className="Redes Facebook" src={Facebook} alt="Facebook" />
              </a>
              <a href="http://localhost:3000/">
                <img className="Redes Youtube" src={Youtube} alt="Youtube" />
              </a>
              <a href="http://localhost:3000/">
                <img className="Redes Twitter" src={Twitter} alt="Twitter" />
              </a>
              <a href="http://localhost:3000/">
                <img
                  className="Redes Pinterest"
                  src={Pinterest}
                  alt="Pinterest"
                />
              </a>
              <a href="http://localhost:3000/">
                <img
                  className="Redes Instagram"
                  src={Instagram}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
          <div className="footer-nav">
            <ul>
              <li>
                <a href="http://localhost:3000/">About Us</a>
              </li>
              <li>
                <a href="http://localhost:3000/">Contact</a>
              </li>
              <li>
                <a href="http://localhost:3000/">Blog</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="http://localhost:3000/">Careers</a>
              </li>
              <li>
                <a href="http://localhost:3000/">Support</a>
              </li>
              <li>
                <a href="http://localhost:3000/">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="wrapper">
          <button className="cta-btn" href="http://localhost:3000/">
            Request Invite
          </button>
          <p className="copyright"> &#169; Easybank. All Rights Reserved</p>
        </div>
      </Foot>
    </>
  );
}

export default Footer;
