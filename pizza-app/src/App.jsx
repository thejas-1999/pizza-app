import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Menu from "./Components/Menu";

import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
