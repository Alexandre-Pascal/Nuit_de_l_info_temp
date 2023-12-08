import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import Classement from "./pages/Classement";

function App() {
  return (
    <div id="App">
        <BrowserRouter>
          <Routes>
            <Route path="/classement" element={<Classement />} />
          </Routes>
        </BrowserRouter >
    </div>
  );
}

export default App;
