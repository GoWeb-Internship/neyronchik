import React from "react";
import { graphql } from "gatsby";
import { Hero } from "src/views/Hero";
import { About } from "src/views/About";
import { Directions } from "src/views/Directions";
import { Why } from "src/views/Why";

import { Team } from "src/views/Team/Team";
import { Services } from "src/views/ServicesSection/Services";

import { Gallery } from "src/views/Gallery/Gallery";
import { News } from "src/views/News";
import { Contacts } from "src/views/Contacts";
import useSliderQuery from "src/queries/useSliderQuery";
import useTeamQuery from "src/queries/useTeamQuery";
import Layout from "components/Layout";

const HomePage = () => {
  const teamData = useTeamQuery();
  const images = useSliderQuery();

  return (
    <>
      <Layout>
        <Hero images={images?.hero} />
        <About />
        <Directions />
        <Why />
        <Team data={teamData} />
        <Services />
        <Gallery images={images?.gallery} />
        <News />
        <Contacts />
      </Layout>
    </>
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
