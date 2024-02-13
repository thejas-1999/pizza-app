import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Contacts from "./Components/Contacts";

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
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
