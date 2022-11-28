import React from "react";
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

import { GatsbyImage } from "gatsby-plugin-image";

export const Carusel = ({ type, images }) => {
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

          // nextArrow:
          // prevArrow:
          spaceBetween: 30,
          navigation: true,
        };

      default:
        return null;
    }
  };
  const typeData = (type, images) => {
    switch (type) {
      case "hero":
        return images.edges.map(({ node }) => (
          <SwiperSlide key={node.id}>
            <div className={s.slideHero} key={node.id}>
              <GatsbyImage
                image={node.childImageSharp.gatsbyImageData}
                alt={node.name}
              />
            </div>
          </SwiperSlide>
        ));
      case "gallery":
        return images.edges?.length
          ? images.edges.map(({ node }) => (
              <SwiperSlide key={node.id}>
                {(isActive) => (
                  <div
                    className={classNames(
                      s.slideGallery
                      // [s.activeSlide]: isActive
                    )}
                  >
                    <GatsbyImage
                      image={
                        node.frontmatter.gallery_item.childImageSharp
                          .gatsbyImageData
                      }
                      alt={node.frontmatter.en_gallery_item_alt || ""}
                    />
                  </div>
                )}
              </SwiperSlide>
            ))
          : null;
      case "team":
        return images.length
          ? images.map((item, idx) => (
              <SwiperSlide key={item.cert_img.id}>
                {(isActive) => (
                  <div>
                    <GatsbyImage
                      image={
                        item.cert_img.childrenImageSharp[0].gatsbyImageData
                      }
                      alt={item.en_cert_alt}
                    />
                  </div>
                )}
              </SwiperSlide>
            ))
          : null;

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
  const data = typeData(type, images);

  return (
    <div
      // onClick={(e) => console.log(e)}
      className={classNames({
        [s.wrapperHero]: type === "hero",
        [s.wrapperGallery]: type === "gallery",
        [s.wrapperTeam]: type === "team",
      })}
    >
      <Swiper {...settings}>{data}</Swiper>
      {/* <SliderButton />
      <SliderButton back /> */}
    </div>
  );
};
