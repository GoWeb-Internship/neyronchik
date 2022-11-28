import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";
import { Carusel } from "components/Carusel/Carusel";
import { GatsbyImage } from "gatsby-plugin-image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { TeamCard } from "../../components/TeamCard/TeamCard";
import * as s from "./Team.module.css";
import classnames from "classnames";

export const Team = ({ data }) => {
  const { language } = useI18next();

  console.log(data);

  return (
    <section className="w-full " id="team">
      <div
        className={classnames(
          "container border-2 bg-amber-400 pt-10 pb-14",
          s.teamBg
        )}
      >
        <Headings
          type="h2"
          className="shadow- mb-14 text-center text-5xl text-white "
        >
          {language === "uk" ? " Наша команда" : "Our team"}
        </Headings>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <TeamCard key={node.id} data={node.frontmatter} />
        ))}
      </div>
    </section>
  );
};
