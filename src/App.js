import Home from "./Pages/Home";
import Bio from "./Pages/Bio";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
