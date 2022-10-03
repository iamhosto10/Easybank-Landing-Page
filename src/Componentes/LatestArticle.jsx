import React from "react";
import styled from "styled-components";

const Latest = styled.section`
  padding: 3.75rem 1.25rem;
  background: hsl(0, 0%, 98%);
  h2 {
    font-size: 2.38rem;
    font-weight: 300;
    margin-bottom: 1.88rem;
  }
`;
function LatestArticle() {
  return (
    <>
      <Latest>
        <h2>Latest Article</h2>
        <div className="Articulos">
          <article>
            <a href="http://localhost:3000/" />
            <div className="Contenedor-Imagenes">
              <img />
            </div>
            <div className="Contenido-Articulo">
              <p className="Autor"></p>
              <h3 className="Titulo"></h3>
              <p className="Texto"></p>
            </div>
          </article>
          <article>
            <a href="http://localhost:3000/" />
            <div className="Contenedor-Imagenes">
              <img />
            </div>
            <div className="Contenido-Articulo">
              <p className="Autor"></p>
              <h3 className="Titulo"></h3>
              <p className="Texto"></p>
            </div>
          </article>
          <article>
            <a href="http://localhost:3000/" />
            <div className="Contenedor-Imagenes">
              <img />
            </div>
            <div className="Contenido-Articulo">
              <p className="Autor"></p>
              <h3 className="Titulo"></h3>
              <p className="Texto"></p>
            </div>
          </article>
          <article>
            <a href="http://localhost:3000/" />
            <div className="Contenedor-Imagenes">
              <img />
            </div>
            <div className="Contenido-Articulo">
              <p className="Autor"></p>
              <h3 className="Titulo"></h3>
              <p className="Texto"></p>
            </div>
          </article>
        </div>
      </Latest>
    </>
  );
}

export default LatestArticle;
