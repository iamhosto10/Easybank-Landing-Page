import React from "react";
import styled from "styled-components";
import Article from "./Article";
import Foto1 from "../images/image-currency.jpg";
import Foto2 from "../images/image-restaurant.jpg";
import Foto3 from "../images/image-plane.jpg";
import Foto4 from "../images/image-confetti.jpg";

const Latest = styled.section`
  padding: 3.75rem 1.25rem;
  background: hsl(0, 0%, 98%);
  h2 {
    font-size: 2.38rem;
    font-weight: 300;
    margin-bottom: 1.88rem;
  }
  /* ************************ */
  /* MEDIA QUERIES */
  /* ************************ */
  /* ************************ */
  /* OVER 750PX */
  /* ************************ */
  @media (min-width: 750px) {
    padding: 3.75rem 7rem;
    h2 {
      padding: 1.35rem;
    }
    .Articulos {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  /* ************************ */
  /* OVER 1100PX */
  /* ************************ */
  @media (min-width: 1100px) {
    padding: 3.75rem 7rem;
    h2 {
      padding: 1.35rem;
    }
    .Articulos {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

function LatestArticle() {
  return (
    <>
      <Latest>
        <h2>Latest Article</h2>
        <div className="Articulos">
          <Article
            img={Foto1}
            autor="By Wilson Hutton"
            titulo="Receive money in any currency with no fees"
            texto=" The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …"
          />
          <Article
            img={Foto2}
            autor="By Wilson Hutton"
            titulo="Treat yourself without worrying about money"
            texto="Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …"
          />
          <Article
            img={Foto3}
            autor="By Wilson Hutton"
            titulo="Take your Easybank card wherever you go"
            texto="We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …"
          />
          <Article
            img={Foto4}
            autor="By Claire Robinson"
            titulo="Our invite-only Beta accounts are now live!"
            texto="After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ..."
          />
        </div>
      </Latest>
    </>
  );
}

export default LatestArticle;
