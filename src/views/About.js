import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

export const About = () => {
  const { allMarkdownRemark, file } = useStaticQuery(
    graphql`
      query AboutQuery {
        allMarkdownRemark(
          filter: { frontmatter: { about_identifier: { eq: "about" } } }
        ) {
          edges {
            node {
              frontmatter {
                en_about_body
                en_about_title
                about_img
                uk_about_title
                uk_about_body
              }
            }
          }
        }
        file(name: { eq: "main" }) {
          id
          publicURL
          childImageSharp {
            gatsbyImageData(formats: [AUTO, WEBP])
          }
        }
      }
    `
  );

  const { language } = useI18next();
  const { edges } = allMarkdownRemark;
  const aboutImg = file.childImageSharp.gatsbyImageData;

  return edges.map((edge) => {
    const { frontmatter } = edge.node;
    return (
      <section className="w-full " id="hero">
        <div className="container border-2">
          <Headings type="h2">
            {frontmatter[`${language}_about_title`]}
          </Headings>
          <Grid className="relative" section="hero">
            <GatsbyImage
              image={aboutImg}
              alt={frontmatter[`${language}_about_title`]}
            />
            <p>{frontmatter[`${language}_about_body`]}</p>
          </Grid>
        </div>
      </section>
    );
  });
};
