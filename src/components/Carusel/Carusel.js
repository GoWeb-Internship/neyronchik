import React, { useState } from "react";

import {
  Autoplay,
  EffectCards,
  EffectCoverflow,
  Lazy,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";

import {
  activeSlide,
  slide,
  slideTeam,
  wrapperGallery,
  wrapperHero,
  wrapperTeam,
} from "./Carusel.module.css";

import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const Carusel = ({ type }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const data = useStaticQuery(graphql`
    query HeroSliderQuery {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
            name
            relativeDirectory
          }
        }
      }
      hero: allFile(
        filter: { sourceInstanceName: {}, relativeDirectory: { in: "hero" } }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
            name
            relativeDirectory
          }
        }
      }
    }
  `);

  const setSettings = (type) => {
    switch (type) {
      case "hero":
        return {
          modules: [Navigation, Pagination, Scrollbar, Lazy, Autoplay],
          lazy: true,
          speed: 400,
          slidesPerView: 1,

          autoplay: true,
          speed: 1000,

          loop: true,
        };
      case "gallery":
        return {
          modules: [
            Navigation,
            Pagination,
            Scrollbar,
            Lazy,
            Autoplay,
            EffectCoverflow,
          ],
          lazy: true,

          slidesPerView: 3,
          loop: true,
          centeredSlides: true,
          effect: "coverflow",
          coverflowEffect: {
            // scale: 0.5,
            rotate: 0,
            stretch: 0,
            depth: 390,
            modifier: 1,
            slideShadows: false,
            height: 700,
          },

          slideToClickedSlide: true,

          pagination: { clickable: true },
        };
      case "team":
        return {
          lazy: true,
          speed: 400,
          slidesPerView: 2,
          slidesToScroll: 1,

          dots: false,

          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        };

      default:
        return null;
    }
  };
  const settings = setSettings(type);
  const swiperSlide = useSwiperSlide();
  return (
    <div
      className={classNames({
        [wrapperHero]: type === "hero",
        // [wrapperGallery]: type === "about",
        [wrapperTeam]: type === "team",
      })}
    >
      <Swiper {...settings} className="h-[700px]">
        {data.hero.edges.map(({ node }, idx) => (
          <SwiperSlide key={node.name}>
            {(isActive) => (
              <div
                className={classNames({
                  // [slide]: type === "gallery",
                  [slideTeam]: type === "team",
                  [activeSlide]: isActive && type === "gallery",
                })}
                key={node.name}
              >
                <GatsbyImage
                  image={node.childImageSharp.gatsbyImageData}
                  alt={node.name}
                  // objectFit="cover"
                  // objectPosition="50% 50%"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
