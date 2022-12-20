import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Tab } from "@headlessui/react";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import { useTranslation } from "gatsby-plugin-react-i18next";
import { Headings } from "src/components/Headings/Headings";

import { WorkDirectionsCard } from "../components/WorkDirectionsCard/WorkDirectionsCard";
import { Tabs } from "../components/Tabs/Tabs";

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
  // console.log(nodes);

  return (
    <section className="w-full py-10" id="directions">
      <div className="workDirectionsContainer container">
        <Headings className="mb-10" type="h2">
          {work_title}:
        </Headings>

        <Swiper
          className="hidden smOnly:block"
          modules={[Navigation, Pagination, EffectCoverflow]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          speed={500}
          centeredSlides={true}
          slideToClickedSlide={true}
          navigation={{
            prevEl: "#swiper-button-my-prev",
            nextEl: "#swiper-button-my-next",
          }}
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
          <div className="mt-10 flex w-[320px] flex-row justify-between px-[100px]">
            <div
              id="swiper-button-my-prev"
              className="flex h-8 w-10 cursor-pointer items-center justify-center"
            >
              <BsArrowLeft size={35} className="text-[#0EA5E9]" />
            </div>
            <div
              id="swiper-button-my-next"
              className="flex h-8 w-10 cursor-pointer items-center justify-center"
            >
              <BsArrowRight size={35} className="text-[#0EA5E9]" />
            </div>
          </div>
        </Swiper>

        <Tabs list={nodes} />
      </div>
    </section>
  );
};
