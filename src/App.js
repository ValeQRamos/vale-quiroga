import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Projects, Error } from "./pages";
import { Navbar } from "./components";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="*" element={<Error />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
