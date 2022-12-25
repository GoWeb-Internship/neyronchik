import React, { useState } from "react";
import { Heading } from "src/components/Heading/Heading";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimateHeight from "react-animate-height";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

import { TeamCard } from "../../components/TeamCard/TeamCard";
import * as s from "./Team.module.css";
import classnames from "classnames";
import { Button } from "../../components/Button/Button";

export const Team = ({ data }) => {
  const { t } = useTranslation();
  const { teamBtn, teamHideBtn } = t("button", {
    returnObjects: true,
  });
  const { team_title } = t("titles", {
    returnObjects: true,
  });

  const breakpoints = useBreakpoint();
  const [height, setHeight] = useState(0.1);
  const visibleTeam = data.allMarkdownRemark.edges.slice(0, 3);
  const hiddenTeam =
    data.allMarkdownRemark.edges.length > 3
      ? data.allMarkdownRemark.edges.slice(3)
      : null;

  return (
    <section className="w-full " id="teamSection">
      <div className="containerPaddingBottom container">
        {breakpoints.sm && data.allMarkdownRemark.edges.length && (
          <div className="mobileCertificatesRrapper">
            <Heading type="h2" className={s.heading}>
              {team_title}
            </Heading>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              speed={300}
              slidesPerView={1}
            >
              {data.allMarkdownRemark.edges?.map(({ node }) => (
                <SwiperSlide key={node.id}>
                  <TeamCard id={node.id} data={node.frontmatter} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {breakpoints.notSm && (
          <div className={s.teamBg}>
            <Heading type="h2" className={s.heading}>
              {team_title}
            </Heading>
            {visibleTeam.map(({ node }) => (
              <TeamCard key={node.id} id={node.id} data={node.frontmatter} />
            ))}
            {hiddenTeam && (
              <div>
                <AnimateHeight
                  id="team-panel"
                  duration={700}
                  height={height}
                  aria-hidden="false"
                >
                  {hiddenTeam &&
                    hiddenTeam.map(({ node }) => (
                      <TeamCard
                        key={node.id}
                        id={node.id}
                        data={node.frontmatter}
                      />
                    ))}
                </AnimateHeight>
                <Button
                  className="mx-auto"
                  white
                  aria-expanded={height !== 0.1}
                  aria-controls="team-panel"
                  onClick={() => setHeight(height === 0.1 ? "auto" : 0.1)}
                  icon={
                    height === 0.1 ? (
                      <BsArrowDownShort size={25} />
                    ) : (
                      <BsArrowUpShort size={25} />
                    )
                  }
                  text={height === 0.1 ? `${teamBtn}` : `${teamHideBtn}`}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
