import React from "react";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";
import { Carusel } from "components/Carusel/Carusel";

export const Team = ({ data, images }) => {
  const { language } = useI18next();
  const { t } = useTranslation();
  const { team_title } = t("titles", {
    returnObjects: true,
  });
  // console.log("🚀 ~ file: Team.js ~ line 7 ~ Team ~ data", data);

  return (
    <section className="w-full " id="team">
      <div className="container border-2">
        <Headings type="h2">{team_title}</Headings>
        <Grid className="relative" section="team">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="flex p-5" key={node.id}>
              <div
                className="mr-16"
                style={{
                  display: "flex",
                  width: "150px",
                  height: "150px",
                  backgroundColor: "yellow",
                }}
              >
                <GatsbyImage
                  image={
                    node.frontmatter.team_member_photo.childrenImageSharp[0]
                      .gatsbyImageData
                  }
                  alt={node.frontmatter[`${language}_team_member_name`]}
                />
              </div>
              <div>
                <h3 className="mb-4">
                  {node.frontmatter[`${language}_team_member_name`]}
                </h3>
                <p className="mb-4">
                  {node.frontmatter[`${language}_team_member_specialization`]}
                </p>
                <p>{node.frontmatter[`${language}_team_member_experience`]}</p>
              </div>
              <div>
                <p className="pb-4">certificates</p>
                <Carusel type="team" images={node.frontmatter.cert_list} />
              </div>
            </div>
          ))}
        </Grid>
      </div>
    </section>
  );
};
