import React, { useState } from "react";
import { Headings } from "src/components/Headings/Headings";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";

import AnimateHeight from "react-animate-height";

import { TeamCard } from "../../components/TeamCard/TeamCard";
import * as s from "./Team.module.css";
import classnames from "classnames";

export const Team = ({ data }) => {
  const { language } = useI18next();
  const { t } = useTranslation();
  const { teamBtn, teamHideBtn } = t("button", {
    returnObjects: true,
  });

  console.log(data);

  const [height, setHeight] = useState(0.1);
  const visibleTeam = data.allMarkdownRemark.edges.slice(0, 3);
  const hiddenTeam =
    data.allMarkdownRemark.edges.length > 3
      ? data.allMarkdownRemark.edges.slice(3)
      : null;

  return (
    <section className="w-full " id="team">
      <div className=" container ">
        <Headings type="h2" className={s.heading}>
          {language === "uk" ? " Наша команда" : "Our team"}
        </Headings>
        <div className={classnames(s.teamBg)}>
          {visibleTeam.map(({ node }) => (
            <TeamCard key={node.id} data={node.frontmatter} />
          ))}
          {hiddenTeam && (
            <div>
              <AnimateHeight
                id="example-panel"
                duration={700}
                height={height}
                aria-hidden="false"
              >
                {hiddenTeam &&
                  hiddenTeam.map(({ node }) => (
                    <TeamCard key={node.id} data={node.frontmatter} />
                  ))}
              </AnimateHeight>
              <button
                className="h-10 w-48 bg-green-500"
                type="button"
                aria-expanded={height !== 0.1}
                aria-controls="example-panel"
                onClick={() => setHeight(height === 0.1 ? "auto" : 0.1)}
              >
                {height === 0.1 ? `${teamBtn}` : `${teamHideBtn}`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
