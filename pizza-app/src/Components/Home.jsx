import "../Styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "../Asssets/pizza.jpeg";
const Home = () => {
  return (
    <div className="home">
      <div
        className="headerContainer"
        style={{ background: `url(${BannerImage})` }}
      >
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
