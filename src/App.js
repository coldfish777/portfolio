import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Animation from "./Components/Animation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Animation />}>
          <Route path="/portfolio/home" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
