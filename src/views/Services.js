import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Markdown from "markdown-to-jsx";
import { GatsbyImage } from "gatsby-plugin-image";
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
  console.log(allMarkdownRemark);
  const { nodes } = allMarkdownRemark;
  console.log(nodes);

  return (
    <section className="w-full " id="hero">
      <div className="container border-2">
        <Headings type="h2">Послуги</Headings>

        {nodes.map(({ frontmatter }) => (
          <li key={frontmatter.en_service_title}>
            <p>{frontmatter.en_service_title}</p>
            <p>
              <Markdown>{frontmatter.en_service_description}</Markdown>
            </p>
            <GatsbyImage
              image={frontmatter.service_img?.childImageSharp.gatsbyImageData}
              alt=""
            />
          </li>
        ))}

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
