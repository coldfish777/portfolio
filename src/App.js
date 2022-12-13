import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Animation from "./Components/Animation";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Animation />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
