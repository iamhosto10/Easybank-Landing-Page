import styled from "styled-components";
import "./App.css";
import LatestArticle from "./Componentes/LatestArticle";
import Navbar from "./Componentes/Navbar";
import Portada from "./Componentes/Portada";
import Whysection from "./Componentes/Whysection";

const Main = styled.main`
  overflow: hidden;
`;
function App() {
  return (
    <body>
      <Navbar />
      <Main>
        <Portada />
        <Whysection />
        <LatestArticle />
      </Main>
    </body>
  );
}

export default App;
