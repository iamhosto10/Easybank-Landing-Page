import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";

const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  .navbar {
    background-color: hsl(0, 0%, 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem;
  }

  .navbar-toggle-btn {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0 1.25rem;
  }
  .navbar-toggle-btn span {
    display: block;
    background: hsl(233, 26%, 24%);
    width: 1.56rem;
    height: 0.19rem;
    transition: 0.25s ease;
  }
  .navbar-toggle-btn.active .one {
    transform: rotate(45deg) translateY(0.31rem);
  }
  .navbar-toggle-btn.active .two {
    display: none;
  }

  .navbar-toggle-btn.active .three {
    transform: rotate(-45deg) translateY(-0.31rem);
  }

  .nav-menu {
    position: fixed;
    background-color: hsla(0, 0%, 100%, 0.95);
    top: 3.75rem;
    left: 1.75rem;
    right: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    padding: 2.5rem 0;
    border-radius: 0.31rem;
    z-index: -1;
    opacity: 0;
    transition: 0.5s ease;
    pointer-events: none;
  }
  .nav-menu a {
    color: hsl(233, 26%, 24%);
    display: block;
  }
  .nav-menu.active a:hover {
    color: hsl(136, 65%, 51%);
    display: block;
    transition: 0.5s ease;
  }
  .nav-menu.active {
    top: calc(3.75rem + 1.25rem);
    opacity: 1;
    box-shadow: 0 3.13rem 6.25rem 6.25rem hsla(233, 26%, 24%, 0.5);
    pointer-events: all;
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
  .navbar .cta-btn {
    display: none;
  }
  /* ************************ */
  /* MEDIA QUERIES */
  /* ************************ */

  /* ************************ */
  /* OVER 1100PX */
  /* ************************ */
  @media (min-width: 43.75em) {
    position: static;

    .navbar {
      padding: 0 10rem;
    }
    .navbar-toggle-btn {
      display: none;
    }
    .nav-menu {
      position: static;
      padding: 0;
      z-index: 0;
      flex-direction: row;
      gap: 1.88rem;
      opacity: 1;
      pointer-events: all;
    }
    .nav-menu a {
      font-size: 0.94rem;
      color: hsl(233, 8%, 62%);
      padding: 1.88rem 0;
      transition: 0.25s ease;
    }
    .nav-menu a:hover {
      color: hsl(233, 26%, 24%);
      box-shadow: inset 0 -0.19rem 0 hsl(136, 65%, 51%);
    }

    .navbar .cta-btn {
      display: block;
      margin: 0;
    }
  }
`;

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <Head>
      <nav class="navbar slide-in-top">
        <div class="logo">
          <img src={Logo} alt="Easybank's company logo" />
        </div>
        <button
          class={`navbar-toggle-btn ${active ? "active" : ""}`}
          onClick={() => {
            setActive(!active);
          }}
        >
          <span class="one"></span>
          <span class="two"></span>
          <span class="three"></span>
        </button>
        <ul class={`nav-menu ${active ? "active" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
        <button class="cta-btn" href="#">
          Request Invite
        </button>
      </nav>
    </Head>
  );
}

export default Navbar;
