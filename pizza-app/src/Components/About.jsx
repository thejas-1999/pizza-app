import AboutImageA from "../Asssets/multiplePizzas.jpeg";
import "../Styles/About.css";
const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{
          background: `url(${AboutImageA}) `,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          exercitationem voluptatibus consectetur saepe corrupti debitis veniam
          cumque asperiores praesentium at officia, similique ut animi impedit
          aliquam et. Quis culpa dolore quia voluptatum corporis accusamus error
          ea, minima earum recusandae dolorum consequuntur eius tempora, modi,
          dignissimos blanditiis magni? Saepe voluptates optio omnis eaque
          recusandae eveniet explicabo, deleniti, rem quibusdam eum minima
          libero, maiores fugit enim cupiditate commodi alias! Labore odit atque
          maxime vitae sapiente voluptatibus quas facilis, saepe laborum
          voluptas explicabo repudiandae, animi numquam similique accusantium,
          voluptate iste deserunt corrupti molestiae perferendis amet. Expedita,
          voluptatum ab. Rerum sequi veniam veritatis. Minus.
        </p>
      </div>
    </div>
  );
};
export default About;
