import React from "react";
import { TitleStyled } from "../App";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  return (
    <div className="page">
      <TitleStyled>Contact</TitleStyled>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
