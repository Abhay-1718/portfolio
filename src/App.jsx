import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/projects/Projects";
import Home from "./components/home/Home";
import Connect from "./components/contact/Connect";

function App() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Router>
        <Routes>
          <Route path="Projects" element={<Projects />} />
          <Route path="Connect" element={<Connect />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
