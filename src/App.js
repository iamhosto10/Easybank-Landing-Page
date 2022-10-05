import styled from "styled-components";
import "./App.css";
import Footer from "./Componentes/Footer";
import LatestArticle from "./Componentes/LatestArticle";
import Navbar from "./Componentes/Navbar";
import Portada from "./Componentes/Portada";
import Whysection from "./Componentes/Whysection";

const Main = styled.main`
  overflow: hidden;
`;
function App() {
  return (
    <>
      <Navbar />
      <Main>
        <Portada />
        <Whysection />
        <LatestArticle />
      </Main>
      <Footer />
    </>
  );
}

export default App;
