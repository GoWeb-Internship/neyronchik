import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
import { Heading } from "src/components/Heading/Heading";

export const About = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query AboutQuery {
        markdownRemark(frontmatter: { about_identifier: { eq: "about" } }) {
          frontmatter {
            en_about_body
            uk_about_body
            about_img {
              id
              publicURL
              childImageSharp {
                gatsbyImageData(formats: [AUTO, WEBP])
              }
            }
          }
        }
      }
    `
  );

  const { language } = useI18next();
  const { t } = useTranslation();
  const { about_title } = t("titles", {
    returnObjects: true,
  });
  const { frontmatter } = markdownRemark;
  const aboutImg = frontmatter.about_img?.childImageSharp.gatsbyImageData;

  return (
    <section className="w-full " id="about">
      <div className="containerPaddingBottom container border-2">
        <Heading type="h2">{about_title}</Heading>
        <div className="flex">
          <GatsbyImage image={aboutImg} alt={about_title} />
          <p>{frontmatter[`${language}_about_body`]}</p>
        </div>
      </div>
    </section>
  );
};
