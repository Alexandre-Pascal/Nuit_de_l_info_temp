import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import Classement from "./pages/Classement";
import Question from "./components/slider";
import "./App.css";

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/classement" element={<Classement />} />
        </Routes>
        <header className="App-header">
          <Question />
        </header>
      </BrowserRouter >
    </div>
  );
}

export default App;
