import React from "react";
import { Hero } from "src/views/Hero";
import { About } from "src/views/About";
import { Directions } from "src/views/Directions";
import { Why } from "src/views/Why";
import { Team } from "src/views/Team";
import { Services } from "src/views/Services";
import { Header } from "src/views/Header";
import { Gallery } from "src/views/Gallery";
import { News } from "src/views/News";
import { Donate } from "src/views/Donate";
import { Form } from "src/views/Form";
import { Contacts } from "src/views/Contacts";
import { Footer } from "src/views/Footer";
import { Banner } from "../views/Banner/Banner";

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <Header />
      <Hero />
      <About />
      <Directions />
      <Why />
      <Team />
      <Services />
      <Gallery />
      <News />
      <Donate />
      <Form />
      <Contacts />
      <Footer />
    </div>
  );
};
export default HomePage;
