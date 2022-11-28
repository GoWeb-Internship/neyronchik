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
import useSliderQuery from "../queries/useSliderQuery";
import useTeamQuery from "../queries/useTeamQuery";

const HomePage = () => {
  const teamData = useTeamQuery();
  const images = useSliderQuery();

  return (
    <div>
      <Banner />
      <Header />
      <Hero images={images?.hero} />
      <About />
      <Directions />
      <Why />
      <Team data={teamData} />
      <Services />
      <Gallery images={images?.gallery} />
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
