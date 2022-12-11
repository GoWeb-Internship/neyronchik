import React, { useState } from "react";
import {
  Autoplay,
  EffectCoverflow,
  Lazy,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useI18next } from "gatsby-plugin-react-i18next";

import * as s from "./CaruselGallery.module.css";
import classNames from "classnames";

import { GatsbyImage } from "gatsby-plugin-image";

export const CaruselGallery = ({ images }) => {
  const { language } = useI18next();
  console.log(images);
  const settings = {
    modules: [Navigation, EffectCoverflow, Pagination, Lazy, Autoplay],
    loop: true,
    lazy: true,
    speed: 300,
    slidesPerView: 1.2,
    className: "gallerySwiper",
    centeredSlides: true,
    pagination: { clickable: true },
    slideToClickedSlide: true,
    effect: "coverflow",
    coverflowEffect: {
      scale: 0.95,
      rotate: 0,
      slideShadows: false,
      pagination: {
        clickable: true,
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 1.35,
        spaceBetween: 0,
      },

      1280: {
        slidesPerView: 1.6,
        spaceBetween: 0,
      },
    },
  };

  return (
    <div id="carusel" className="wrapperGallery">
      {images && (
        <Swiper {...settings}>
          {images.map(({ node }) => (
            <SwiperSlide key={node.id}>
              {({ isActive }) => (
                <div
                  className={classNames(s.slideGallery, {
                    [s.slideGalleryActive]: isActive,
                  })}
                >
                  <GatsbyImage
                    image={
                      node.frontmatter.gallery_item.childImageSharp
                        .gatsbyImageData
                    }
                    alt={node.frontmatter[`${language}_gallery_item_alt`]}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
