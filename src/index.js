import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./assets/css/index.css";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Details from "./components/Details";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Details />
      <Contact />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
