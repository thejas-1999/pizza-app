import { useState } from "react";
import "../Styles/NavBar.css";
import Logo from "../Asssets/gtec.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

const NavBar = () => {
  const [openLinks, setOpenLiks] = useState(false);

  const toggleNavBar = () => {
    setOpenLiks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavBar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};
export default NavBar;
