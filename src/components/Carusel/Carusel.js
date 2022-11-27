import React, { forwardRef } from "react";
import {
  Autoplay,
  EffectCoverflow,
  Lazy,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

import * as s from "./Carusel.module.css";

import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import useImages from "../../queries/sliderQuery";

export const Carusel = ({ type, images }) => {
  // const { type, images } = props;
  // const images = useImages();

  const typeSettings = (type) => {
    switch (type) {
      case "hero":
        return {
          modules: [Navigation, EffectCoverflow, Pagination, Lazy, Autoplay],
          lazy: true,
          speed: 400,
          slidesPerView: 1,
          autoplay: { delay: 3000 },
          speed: 1000,
          loop: true,
          // navigation: true,
          // navigation: {
          //   nextEl: nextRef,
          //   prevEl: prevRef,
          // }
        };
      case "gallery":
        return {
          modules: [Navigation, EffectCoverflow, Pagination, Lazy, Autoplay],
          loop: true,
          lazy: true,
          speed: 300,
          slidesPerView: 3,
          className: s.mySwiper,
          centeredSlides: true,
          pagination: { clickable: true },
          // navigation
          // navigation:
          //   nextEl: nextRef,
          //   prevEl: prevRef,
          //
          effect: "coverflow",

          slideToClickedSlide: true,
          coverflowEffect: {
            scale: 0.5,
            rotate: 0,
            stretch: 0,
            depth: 30,
            modifier: 1,
            slideShadows: false,
            height: 700,
            pagination: {
              clickable: true,
            },
          },
        };
      case "team":
        return {
          modules: [Navigation, EffectCoverflow, Pagination, Lazy, Autoplay],
          lazy: true,
          speed: 400,
          navigation: true,
          slidesPerView: 3,
          slidesToScroll: 3,

          // nextArrow:
          // prevArrow:
          spaceBetween: 30,
          navigation: true,
        };

      default:
        return null;
    }
  };

  // const SliderButton = (props) => {
  //   return (
  //     <div
  //       style={{
  //         position: "absolute",
  //         width: "30px",
  //         height: "100%",
  //         zIndex: 20,
  //         top: 0,
  //         left: 0,
  //         backgroundColor: "red",
  //       }}
  //     >
  //       <p>*</p>
  //     </div>
  //   );
  // };
  const settings = typeSettings(type);

  console.log(images);
  return (
    <div
      // onClick={(e) => console.log(e)}
      className={classNames({
        [s.wrapperHero]: type === "hero",
        [s.wrapperGallery]: type === "gallery",
        [s.wrapperTeam]: type === "team",
      })}
    >
      <Swiper {...settings}>
        {images.edges.map(({ node }, idx) => (
          <SwiperSlide key={node.name}>
            {(isActive) => (
              <div
                className={classNames({
                  [s.slideGallery]: type === "gallery",
                  [s.slideHero]: type === "hero",
                  // [s.slideTeam]: type === "team",
                  // [activeSlide]: isActive && type === "gallery",
                })}
                key={node.name}
              >
                <GatsbyImage
                  image={node.childImageSharp.gatsbyImageData}
                  alt={node.name}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <SliderButton />
      <SliderButton back /> */}
    </div>
  );
};
