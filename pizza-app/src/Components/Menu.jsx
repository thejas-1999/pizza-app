import MenuList from "../Components/MenuList";
import MenuItem from "../Components/MenuItem";

import "../Styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menuTitle">
        <h1>OUR MENU</h1>
      </div>
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
          />
        ))}
      </div>
    </div>
  );
};
export default Menu;
