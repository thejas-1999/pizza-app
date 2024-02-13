import ContactImg from "../Asssets/pizzaLeft.jpg";
import "../Styles/Contact.css";
const Contacts = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{
          background: `url(${ContactImg}) `,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form action="" id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter Full Name..." />
          <label htmlFor="email">E-Mail</label>
          <input type="email" name="email" placeholder="Enter Your Mail..." />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="6"
            placeholder="Enter Message..."
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
export default Contacts;
