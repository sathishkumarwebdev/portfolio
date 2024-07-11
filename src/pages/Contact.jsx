import { Element } from "react-scroll";
import { FaRocket } from "react-icons/fa6";

export function Contact() {
  return (
    <Element className="contact-container" name="contact">
      <div className="contact-title">
        <div className="contact">Contact Me</div>
      </div>
      <div className="contact-center">
        <div className="first-last-name">
          <input type="text" placeholder="First Name"  />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="email">
          <input type="text" placeholder="Email Address" />
        </div>
        <div className="text-area">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="contact-btn">
          <button>
            {" "}
            Send &nbsp;
            <FaRocket color="white" size={20} />
          </button>
        </div>
      </div>
    </Element>
  );
}
