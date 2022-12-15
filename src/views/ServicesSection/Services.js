import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Heading } from "components/Heading/Heading";
import { ServicesCard } from "components/ServicesCard/ServicesCard";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../../components/Button/Button";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

export const Services = () => {
  const { allMarkdownRemark, phone } = useStaticQuery(graphql`
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
      phone: markdownRemark(
        frontmatter: { contacts_identifier: { eq: "contacts" } }
      ) {
        frontmatter {
          phone_main
        }
      }
    }
  `);
  const { phone_main } = phone.frontmatter;
  const { nodes } = allMarkdownRemark;
  const { t } = useTranslation();
  const { services_title } = t("titles", {
    returnObjects: true,
  });
  const { contactUsBtn, prevSlide, nextSlide } = t("button", {
    returnObjects: true,
  });
  const breakpoints = useBreakpoint();

  return (
    <section id="services">
      <div className="servicesContainer containerPaddingBottom container">
        <Heading type="h2" className="mb-20">
          {services_title}
        </Heading>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          loop={true}
          speed={300}
          slidesPerView={"auto"}
          centeredSlides={true}
          pagination={{ clickable: true }}
          slideToClickedSlide={true}
          effect="coverflow"
          navigation={{
            prevEl: ".services-prev",
            nextEl: ".services-next",
          }}
          coverflowEffect={{
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
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: "auto",
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: "auto",
              spaceBetween: 0,
            },
          }}
        >
          {nodes &&
            nodes?.map(({ frontmatter }) => (
              <SwiperSlide key={frontmatter.en_service_title}>
                <div>
                  <ServicesCard data={frontmatter} />
                </div>
              </SwiperSlide>
            ))}
          <button
            type="button"
            aria-label={prevSlide}
            className="services-prev"
          >
            <BsArrowLeft size={breakpoints.sm ? 35 : 49} />
          </button>
          <button
            type="button"
            aria-label={nextSlide}
            className="services-next"
          >
            <BsArrowRight size={breakpoints.sm ? 35 : 49} />
          </button>
        </Swiper>
        <Button
          className="mx-auto mt-[92px]"
          blue
          phone={phone_main}
          aria={contactUsBtn}
          text={contactUsBtn}
        />
      </div>
    </section>
  );
};
