import "components/ContactUs/contactUs.scss";
import Input from "components/Input";

const ContactUs = () => {
  return (
    <section className="commonSection contact" id="contact">
      <div className="container">
        <div className="commonHeading">
          <h1>Contact</h1>
          <p>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>

        <div className="contactForm">
          <Input
            type="text"
            name="name"
            placeholderText="Enter Your Name"
            labelName="Name"
          />
          <Input
            type="email"
            name="email"
            placeholderText="Enter Your Email"
            labelName="Email"
          />
          <textarea
            className="textArea"
            rows="6"
            cols="50"
            name="message"
            placeholder="Enter Your Thought's"
          ></textarea>

          <div className="contactFormButton">
            <div className="commonButton">Submit</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
