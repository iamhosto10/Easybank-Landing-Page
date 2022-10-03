import styled from "styled-components";
import "./App.css";
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
      </Main>
    </body>
  );
}

export default App;
