import { GatsbyImage } from "gatsby-plugin-image";
import { useI18next } from "gatsby-plugin-react-i18next";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Lazy,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const CaruselHero = ({ images }) => {
  const settings = {
    modules: [Navigation, EffectCoverflow, Pagination, Lazy, Autoplay],
    lazy: true,
    speed: 400,
    slidesPerView: 1,
    autoplay: { delay: 3000 },
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: ".nextHero",
      prevEl: ".prevHero",
    },
    breakpoints: {
      1280: {
        enabled: true,
      },

      320: {
        enabled: false,
      },
    },
  };

  return (
    <div id="caruselHero" className="wrapperHero">
      <Swiper {...settings}>
        {images.map(({ node }) => (
          <SwiperSlide key={node.id}>
            <div key={node.id}>
              <GatsbyImage
                image={node.childImageSharp.gatsbyImageData}
                alt={node.name}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
