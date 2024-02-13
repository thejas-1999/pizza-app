import { Instagram } from "@mui/icons-material";
import { YouTube } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { X } from "@mui/icons-material";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram />
        <YouTube />
        <Facebook />
        <X />
      </div>
      <p className="footerP"> &copy; 2024 TK</p>
    </div>
  );
};
export default Footer;
