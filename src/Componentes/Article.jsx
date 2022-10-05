import React from "react";
import styled from "styled-components";

const Artic = styled.article`
  /* min-width: 15%;
  max-width: 20%; */
  margin: 1.5rem;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  .Contenedor-Imagenes {
    height: 12.5rem;
  }
  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
  }
  .Contenido-Articulo {
    padding: 2rem;
  }
  .Autor {
    font-size: 0.7rem;
    color: hsl(233, 8%, 62%);
    margin-bottom: 0.4rem;
  }
  .Titulo {
    margin-bottom: 1rem;
    font-weight: 300;
    color: hsl(233, 26%, 24%);
  }
  .Texto {
    font-size: 0.85rem;
    color: hsl(233, 8%, 62%);
    margin-bottom: 1rem;
  }

  &:hover {
    transition: all 0.5s ease;
    transform: translate(0, -10px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

function Article({ img, autor, texto, titulo }) {
  return (
    <>
      <Artic>
        <a href="http://localhost:3000/">
          <div className="Contenedor-Imagenes">
            <img src={img} alt={titulo} />
          </div>
          <div className="Contenido-Articulo">
            <p className="Autor">{autor}</p>
            <h3 className="Titulo">{titulo}</h3>
            <p className="Texto">{texto}</p>
          </div>
        </a>
      </Artic>
    </>
  );
}

export default Article;
