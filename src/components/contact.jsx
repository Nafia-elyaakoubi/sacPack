import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, phone, message }, setState] = useState(initialState);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const sendConfirmationEmail = (email, name) => {
    const templateParams = {
      to_email: email,
      to_name: name,
    };

    return emailjs
      .send("service_48p7gv9", "template_rg9ju5s", templateParams, "LIN_jJ63oerGaTzlp");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    emailjs
      .sendForm("service_48p7gv9", "template_xwjakal", form.current, "LIN_jJ63oerGaTzlp")
      .then(async (result) => {
        console.log("Message sent:", result.text);
        await sendConfirmationEmail(email, name); // Await confirmation email
        clearState();
        toast.success("Message envoyé avec succès !");
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        toast.error("Échec de l'envoi du message, veuillez réessayer.");
      });
  };

  return (
    <div>
      <ToastContainer /> {/* Add ToastContainer for notifications */}
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Demander un deivs</h2>
                <p>
                  Veuillez remplir le formulaire ci-dessous pour nous envoyer un email, et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
              <form ref={form} name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nom"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row"> {/* New row for phone input */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel" // Change input type to "tel" for phone number
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Téléphone"
                        required
                        onChange={handleChange}
                        value={phone}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <div style={{
                  width: "100%",
                  display: "flex",
                }}
                id="contactBtn">

                  <button type="submit" className="btn btn-custom btn-lg">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h2>Contact</h2>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Adresse
                </span>
                {props.data ? props.data.address : "chargement..."}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Téléphone
                </span>{" "}
                {props.data ? props.data.phone : "chargement..."}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "chargement..."}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.whatsapp : "/"}>
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Sac-Pack. Conçu et développé par{" "}
            <a href="https://el-yaakoubi-nafia-portfolio.vercel.app/" rel="nofollow">
              El Yaakoubi Nafia
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
