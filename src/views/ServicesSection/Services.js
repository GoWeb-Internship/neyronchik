import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
// import Markdown from 'markdown-to-jsx';
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { Headings } from "components/Headings/Headings";
import {
  Autoplay,
  EffectCoverflow,
  Lazy,
  Navigation,
  Pagination,
  Zoom,
} from "swiper";
import { ServicesCard } from "components/ServicesCard/ServicesCard";
import { Swiper, SwiperSlide } from "swiper/react";

export const Services = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___service_range }
        filter: {
          frontmatter: {
            services_identifier: { eq: "services" }
            en_service_title: { ne: "Service-example (do not delete!)" }
          }
        }
      ) {
        nodes {
          frontmatter {
            en_service_title
            uk_service_title
            service_list {
              en_service_description
              uk_service_description
              service_duration
              service_price
            }
          }
        }
      }
    }
  `);

  const { nodes } = allMarkdownRemark;

  const { language } = useI18next();
  const { t } = useTranslation();
  const { services_title } = t("titles", {
    returnObjects: true,
  });
  const { servicesBtn, servicesHideBtn } = t("button", {
    returnObjects: true,
  });

  const items =
    nodes &&
    nodes?.map(({ frontmatter }) => (
      <ServicesCard data={frontmatter} key={frontmatter.en_service_title} />
    ));
  return (
    <section
      className={` w-full overflow-hidden transition-all duration-[2500ms] ease-linear`}
      id="services"
    >
      <div className="servicesContainer container">
        <Headings type="h2" className="mb-20">
          {services_title}
        </Headings>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          loop={true}
          speed={300}
          slidesPerView={"auto"}
          // spaceBetween={20}
          centeredSlides={true}
          pagination={{ clickable: true }}
          slideToClickedSlide={true}
          effect="coverflow"
          coverflowEffect={{
            // scale: 0.95,
            stretch: -120,
            depth: 250,
            modifier: 1,
            rotate: 0,
            slideShadows: false,
            pagination: {
              clickable: true,
            },
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 1.3,
              spaceBetween: 0,
            },
            // when window width is >= 640px
            1280: {
              slidesPerView: 2.5,
              spaceBetween: 0,
            },
          }}
        >
          {nodes &&
            nodes?.map(({ frontmatter }) => (
              <SwiperSlide>
                <div>
                  <ServicesCard
                    data={frontmatter}
                    key={frontmatter.en_service_title}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};
