import React, { useState } from "react";
import "../assets/css/Contact.css";
import FormInput from "./Form/FormInput";
import ContactImage from "../assets/statics/image.png";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Please, enter your name",
      label: "Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please, eneter a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "Phone",
      errorMessage: "Please, enter your phone number",
      label: "Phone",
      required: true,
    },
  ];

  const handleSubmit = (e) => {};

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div id="contact" className="contact">
        <div className="contact__container">
          <div className="contact__form">
            <h1 className="contact__title">
              Get in touch <br /> <span>We are hiring!</span>
            </h1>
            <form className="form" onSubmit={handleSubmit} action="post">
              {inputs.map((input) => (
                <FormInput
                  className="form__input"
                  key={input.id}
                  {...input}
                  onChange={onChange}
                />
              ))}
              <label className="form__label" htmlFor="Message">
                Message
              </label>
              <textarea
                name="message"
                rows="3"
                cols="21"
                minLength="20"
                required
              />
              <button className="form__button btn" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="contact__image">
            <img src={ContactImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
