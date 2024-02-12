import Logo from "../Asssets/pizzaLogo.png";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="logo" />
      </div>
      <div className="rightSide"></div>
    </div>
  );
};
export default NavBar;
