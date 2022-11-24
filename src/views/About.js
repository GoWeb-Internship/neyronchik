import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

export const About = () => {
  const { allMarkdownRemark } = useStaticQuery(
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
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `
  );

  const { language } = useI18next();
  const { edges } = allMarkdownRemark;

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
              image={frontmatter.about_img}
              alt={frontmatter[`${language}_about_title`]}
            />
            <p>{frontmatter[`${language}_about_body`]}</p>
          </Grid>
        </div>
      </section>
    );
  });

  // return (
  //   <section className="w-full " id="hero">
  //     <div className="container border-2">
  //       <Headings type="h2">Про нас</Headings>
  //       <Grid className="relative" section="hero">
  //         <div
  //           id="image2"
  //           style={{
  //             width: "100%",
  //             height: "300px",
  //             backgroundColor: "yellow",
  //           }}
  //         ></div>
  //         <p>
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
  //           amet, viverra nec pretium fermentum ut cras. Id odio velit id
  //           ultrices pretium aenean mauris neque, posuere. Varius nisi, ut fames
  //           lorem scelerisque eget vitae. Porta proin rhoncus elementum, non at.
  //           Eu aliquet etiam felis mi, eget justo, auctor diam nunc. Lectus non
  //           ipsum dui urna, accumsan fermentum scelerisque interdum. Felis non
  //           diam risus nibh dis at. Facilisis consequat libero, morbi erat
  //           commodo eu congue. Rhoncus, elementum, vulputate adipiscing amet nam
  //           vivamus mauris, lacinia. Nunc arcu in eget lorem lorem cras. Integer
  //           aliquam purus turpis volutpat. Dolor id turpis porttitor morbi
  //           ultrices fames aliquet. Malesuada blandit ornare volutpat dapibus.
  //           Egestas eros augue pulvinar non fermentum in sit neque convallis.
  //           Elementum amet integer in odio lobortis massa. Aliquam est, egestas
  //           malesuada gravida. Egestas nisi risus nec duis odio dignissim. Amet
  //           ultrices at bibendum fames id neq
  //         </p>
  //       </Grid>
  //     </div>
  //   </section>
  // );
};
