import React from "react";
import Download from "../components/Download/Download";
import Features from "../components/Features/Features";
import Figures from "../components/Figures/Figures";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Testimonials from "../components/Testimonials/Testimonials";

const Main = () => {
  return (
    <div>
      Main
      <Header />
      <Testimonials />
      <Features />
      <Figures />
      <Download />
      <Footer />
    </div>
  );
};

export default Main;
