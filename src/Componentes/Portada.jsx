import React from "react";
import styled from "styled-components";
import mockup from "../images/image-mockups.png";
import background from "../images/bg-intro-mobile.svg";
import backgroundcompu from "../images/bg-intro-desktop.svg";

const Port = styled.section`
  padding-bottom: 3.75rem;
  background: hsl(0, 0%, 98%);

  .hero-img-container {
    background: url(${background}) no-repeat top;
    background-size: cover;
    padding: 0 0.94rem;
    margin-bottom: 2.5rem;
  }
  .hero-img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: bottom;
  }
  .hero-heading {
    font-size: 3rem;
    font-weight: 300;
    color: hsl(233, 26%, 24%);
    text-align: center;
    margin-bottom: 1.25rem;
    padding: 0 1.25rem;
  }
  .hero-text {
    font-size: 1.2rem;

    color: hsl(233, 8%, 62%);
    text-align: justify;
    line-height: 1.7;
    margin-bottom: 1.88rem;
    padding: 0 2.5rem;
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

  /* ************************ */
  /* MEDIA QUERIES */
  /* ************************ */

  /* ************************ */
  /* OVER 1100PX */
  /* ************************ */

  @media (min-width: 68.75em) {
    display: flex;
    align-items: center;
    padding: 0;

    .hero-img-container {
      width: 55%;
      background: url(${backgroundcompu}) no-repeat bottom left;
      background-size: 150%;
      margin: 0;
      padding: 0;
      order: 1;
    }
    .hero-img {
      width: 75%;
      transform: translate(11rem, -0.63rem) scale(1.3);
      aspect-ratio: unset;
    }
    .hero-container {
      order: 0;
      padding-left: 10rem;
    }

    .hero-heading {
      font-size: 3.44rem;
      text-align: left;
      padding: 0;
    }

    .hero-text {
      max-width: 28.13rem;
      text-align: left;
      padding: 0;
      margin: 0;
      margin-bottom: 1.88rem;
    }

    .cta-btn {
      margin: 0;
    }
  }
`;

function Portada() {
  return (
    <>
      <Port>
        <div class="hero-img-container slide-in-right">
          <img
            class="hero-img"
            src={mockup}
            alt="Illustration of several cellphones"
          />
        </div>
        <div class="hero-container slide-in-left">
          <h1 class="hero-heading">Next generation digital banking</h1>
          <p class="hero-text">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button class="cta-btn" href="http://localhost:3000/">
            Request Invite
          </button>
        </div>
      </Port>
    </>
  );
}

export default Portada;
