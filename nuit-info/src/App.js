import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import Classement from "./pages/Classement";
import QuestionSlider from "./components/slider";
import Question from "./pages/question";

import "./App.css";

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/classement" element={<Classement />} />
          <Route path="/" element={<Question />} />
          <Route path="/questionSlider" element={<QuestionSlider />} />
        </Routes>
        {/* <header className="App-header">
          <QuestionSlider />
          <Question />

        </header> */}
      </BrowserRouter >
    </div>
  );
}

export default App;
