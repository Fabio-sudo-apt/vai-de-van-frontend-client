import "./App.css";
import { Home } from "./components/pages/home";
import { GlobalStyled } from "./styles/globalStyles";
function App() {
  return (
    <>
      <GlobalStyled teste={true} />
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
