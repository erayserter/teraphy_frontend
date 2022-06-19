import React from "react";

import "./App.scss";

import {
  Main,
  About,
  Testimonials,
  Suits,
  Offers,
  Galery,
  Footer,
} from "./Layouts";

import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <About />
      <Suits />
      <Testimonials />
      <Offers />
      <Galery />
      <Footer />
    </div>
  );
};

export default App;
