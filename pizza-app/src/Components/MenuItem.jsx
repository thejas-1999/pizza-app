const MenuItem = ({ image, name, price }) => {
  return (
    <div className="menuItem">
      <div
        className="imageContainer"
        style={{
          background: `url(${image}) `,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <h1>{name}</h1>
      <p>Price:${price}</p>
    </div>
  );
};
export default MenuItem;
