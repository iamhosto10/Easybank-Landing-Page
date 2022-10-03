import React from "react";
import styled from "styled-components";
import OnlineBanking from "../images/icon-online.svg";
import SimpleBudgeting from "../images/icon-budgeting.svg";
import FastOnboarding from "../images/icon-onboarding.svg";
import OpenAPI from "../images/icon-api.svg";

const Why = styled.section`
  background-color: hsl(220, 16%, 96%);
  padding: 3.75rem 1.25rem;

  h2 {
    color: hsl(233, 26%, 24%);
    font-weight: 300;
    margin-top: 3rem;
    margin-bottom: 1.7rem;
    padding: 0 5rem;
    font-size: 2rem;
    text-align: center;
  }
  p {
    color: hsl(233, 8%, 62%);
    line-height: 1.5;
    padding: 0 2.5rem;
    text-align: center;
    font-size: 1.1rem;
  }
  .Cards {
    margin-top: 2rem;
    .Card {
      margin: 2rem 0;
    }
    h3 {
      color: hsl(233, 26%, 24%);
      margin-top: 1.3rem;
      margin-bottom: 1rem;
      font-weight: 300;
      font-size: 1.2rem;
      text-align: center;
    }
    img {
      display: block;
      margin: 0 auto;
    }
  }

  /* ************************ */
  /* MEDIA QUERIES */
  /* ************************ */

  /* ************************ */
  /* OVER 1100PX */
  /* ************************ */
  @media (min-width: 68.75em) {
    padding-left: 8.8rem;
    h2 {
      padding: 0;
      font-size: 2.5rem;
      text-align: left;
    }
    p {
      padding: 0;
      max-width: 40.63rem;
      text-align: left;
    }
    .Cards {
      display: flex;
      h3 {
        text-align: left;
      }
      p {
        font-size: 1rem;
        text-align: left;
      }
      img {
        margin: 0;
      }
    }
  }
`;

function Whysection() {
  return (
    <>
      <Why>
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <section className="Cards">
          <div className="Card Online_Banking">
            <img src={OnlineBanking} alt="Online Banking" />
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="Card Simple_Budgeting">
            <img src={SimpleBudgeting} alt="Simple Budgeting" />
            <h3>Simple Budgeting</h3>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div className="Card Fast_Onboarding">
            <img src={FastOnboarding} alt="Fast Onboarding" />
            <h3>Fast Onboarding</h3>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="Card Open_API">
            <img src={OpenAPI} alt="Open API" />
            <h3>Open API</h3>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </section>
      </Why>
    </>
  );
}

export default Whysection;
