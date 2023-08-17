import "./App.css";
import { Rotas } from "./components/pages/Rotas";
import { Home } from "./components/pages/home";
import { GlobalStyled } from "./styles/globalStyles";
function App() {
  return (
    <>
      <GlobalStyled teste={true} />
      <Rotas/>
    </>
  );
}

export default App;
