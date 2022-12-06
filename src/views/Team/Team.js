import React, { useState } from "react";
import { Headings } from "src/components/Headings/Headings";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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

  const breakpoints = useBreakpoint();
  const [height, setHeight] = useState(0.1);
  const visibleTeam = data.allMarkdownRemark.edges.slice(0, 3);
  const hiddenTeam =
    data.allMarkdownRemark.edges.length > 3
      ? data.allMarkdownRemark.edges.slice(3)
      : null;

  return (
    <section className="w-full " id="teamSection">
      <div className=" container ">
        {breakpoints.sm && data.allMarkdownRemark.edges.length && (
          <div className="mobileCertificatesRrapper">
            <Headings type="h2" className={s.heading}>
              {/* TODO lang */}
              {language === "uk" ? " Наша команда" : "Our team"}
            </Headings>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              speed={300}
              slidesPerView={1}
            >
              {data.allMarkdownRemark.edges?.map(({ node }) => (
                <SwiperSlide>
                  <div>
                    <TeamCard
                      key={node.id}
                      id={node.id}
                      data={node.frontmatter}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {breakpoints.notSm && (
          <div className={classnames(s.teamBg)}>
            <Headings type="h2" className={s.heading}>
              {language === "uk" ? " Наша команда" : "Our team"}
            </Headings>
            {visibleTeam.map(({ node }) => (
              <TeamCard key={node.id} id={node.id} data={node.frontmatter} />
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
                      <TeamCard
                        key={node.id}
                        id={node.id}
                        data={node.frontmatter}
                      />
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
        )}
      </div>
    </section>
  );
};
