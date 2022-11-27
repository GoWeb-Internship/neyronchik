import React from "react";
import { graphql } from "gatsby";
import { Hero } from "src/views/Hero";
import { About } from "src/views/About";
import { Directions } from "src/views/Directions";
import { Why } from "src/views/Why";
import { Team } from "src/views/Team";
import { Services } from "src/views/Services";
import { Header } from "src/views/Header";
import { Gallery } from "src/views/Gallery";
import { News } from "src/views/News";

import { Contacts } from "src/views/Contacts";
import { Footer } from "src/views/Footer";
import { Banner } from "../views/Banner/Banner";
import useImages from "../queries/sliderQuery";

const HomePage = () => {
  const images = useImages();
  console.log("🚀 ~ file: index.js ~ line 21 ~ HomePage ~ images", images);

  return (
    <div>
      <Banner />
      <Header />
      <Hero images={images?.hero} />
      <About />
      <Directions />
      <Why />
      <Team images={images?.hero} />
      <Services />
      <Gallery images={images?.hero} />
      <News />

      <Contacts />
      <Footer />
    </div>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
