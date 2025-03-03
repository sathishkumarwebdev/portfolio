import { useState } from "react";
import { Element } from "react-scroll";
import { FaRocket } from "react-icons/fa6";
import emailjs from "emailjs-com";

export function Contact() {
  const form = {
    firstname: "",
    lastname: "",
    emailaddress: "",
    message: "",
  };
  const [formData, setformData] = useState(form);
  const handleOnChange = (e) => {
    setformData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_lnlkb2d",
        "template_jqzrrzi",
        `${formData}`,
        "zaZPcuGHcGVV_syyG"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  console.log(formData);

  return (
    <Element className="contact-container" name="contact">
      <div className="contact-title">
        <div className="contact">Contact Me</div>
      </div>
      <div className="contact-center">
        <div className="first-last-name">
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handleOnChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="email">
          <input
            type="text"
            placeholder="Email Address"
            name="emailaddress"
            value={formData.emailaddress}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="text-area">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleOnChange}
            required
          ></textarea>
        </div>
        <div className="contact-btn">
          <button onClick={handleSubmit}>
            {" "}
            Send &nbsp;
            <FaRocket color="white" size={20} />
          </button>
        </div>
      </div>
    </Element>
  );
}
