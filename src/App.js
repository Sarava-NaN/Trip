import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Offers from "./Components/Offers/Offers";
import Popular from "./Components/Popular/Popular";
// import { FloatingWhatsApp } from "react-floating-whatsapp";
// import IMG from "./Assets/dp.jpg";
// import { useState } from "react";

//
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
