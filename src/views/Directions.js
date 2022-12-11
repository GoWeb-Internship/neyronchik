import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Headings } from "src/components/Headings/Headings";

import { WorkDirectionsCard } from "../components/WorkDirectionsCard/WorkDirectionsCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Directions = () => {
  const { t } = useTranslation();
  const { work_title } = t("titles", {
    returnObjects: true,
  });

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        filter: { frontmatter: { work_identifier: { eq: "work" } } }
        sort: { order: ASC, fields: frontmatter___work_range }
      ) {
        nodes {
          frontmatter {
            en_work_specialist
            en_work_text
            uk_work_specialist
            uk_work_text
            work_list {
              en_work_description
              uk_work_description
            }
          }
        }
      }
    }
  `);
  const { nodes } = allMarkdownRemark;
  console.log(nodes);

  return (
    <section className="w-full py-10" id="directions">
      <div className="workDirectionsContainer container">
        <Headings className="mb-10" type="h2">
          {work_title}:
        </Headings>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          speed={500}
          centeredSlides={true}
          slideToClickedSlide={true}
          pagination={{ clickable: true }}
        >
          {nodes &&
            nodes?.map(({ frontmatter }) => (
              <SwiperSlide key={frontmatter.en_work_specialist}>
                <div>
                  <WorkDirectionsCard
                    frontmatter={frontmatter}
                    key={frontmatter.en_work_specialist}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};
