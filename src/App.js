import "./App.css";
import Portfolio from "./Components/Portfolio";
import { Routes, Route } from "react-router";
import HeadContent from "./Components/HeadContent";
import TechStack from "./Components/TechStack";
import Nav from "./Components/Nav";
import Project from "./Components/Project";
import About from "./Components/About";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/" element={<Nav />} />
        <Route path="/HeadContent" element={<HeadContent />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/TechStack" element={<TechStack />} />
        <Route path="/Project" element={<Project/>}/>
      </Routes>
    </div>
  );
}

export default App;
