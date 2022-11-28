import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Markdown from "markdown-to-jsx";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
// import { GatsbyImage } from "gatsby-plugin-image";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

export const Services = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { services_identifier: { eq: "services" } } }
      ) {
        nodes {
          frontmatter {
            en_service_title
            en_service_description
            en_service_price
            uk_service_title
            uk_service_description
            uk_service_price
            service_img {
              childImageSharp {
                gatsbyImageData(
                  jpgOptions: { progressive: true }
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                  width: 200
                )
              }
            }
          }
        }
      }
    }
  `);
  // console.log(allMarkdownRemark);
  const { nodes } = allMarkdownRemark;
  // console.log(nodes);

  const { language } = useI18next();
  const { t } = useTranslation();
  const { services_title } = t("titles", {
    returnObjects: true,
  });

  return (
    <section className="w-full " id="services">
      <div className="container border-2">
        <Headings type="h2">{services_title}</Headings>
        <ul>
          {nodes.map(({ frontmatter }) => (
            <li key={frontmatter[`${language}_service_title`]}>
              <p>{frontmatter[`${language}_service_title`]}</p>

              <Markdown>
                {frontmatter[`${language}_service_description`]}
              </Markdown>

              {/* <GatsbyImage
                image={frontmatter.service_img?.childImageSharp.gatsbyImageData}
                alt=""
              /> */}
            </li>
          ))}
        </ul>
        <div className="flex  h-[600px] w-full flex-row flex-wrap overflow-y-hidden">
          <div className="h-80 w-64 bg-orange-400">
            <p>service 1</p>
          </div>
          <div className="h-80 w-64 bg-orange-400">
            <p>service 2</p>
          </div>
          <div className="h-80 w-64 bg-orange-400">
            <p>service 3</p>
          </div>
          <div className="h-80 w-64 bg-orange-400">
            <p>service 4</p>
          </div>
          <div className="h-80 w-64 bg-orange-400">
            <p>service 5</p>
          </div>
          <div className="h-80 w-64 bg-orange-400">
            <p>service 6</p>
          </div>
        </div>
        <button className="h-10 w-48 bg-green-500" type="button">
          See more...
        </button>
      </div>
    </section>
  );
};
