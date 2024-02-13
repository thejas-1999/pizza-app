import "../Styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "../Asssets/pizza.jpeg";
const Home = () => {
  return (
    <div className="home" style={{ background: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>TK </h1>
        <h2>lets go</h2>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
