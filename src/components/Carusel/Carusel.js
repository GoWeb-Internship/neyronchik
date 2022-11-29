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

import * as s from "./Carusel.module.css";
import classNames from "classnames";

import { GatsbyImage } from "gatsby-plugin-image";
import { Modal } from "components/Modal/Modal";

export const Carusel = ({ type, images }) => {
  const { language } = useI18next();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalImageAlt, setModalImageAlt] = useState(null);

  const handleOpenModal = (image, alt) => {
    console.log(alt);
    setModalImage(image);
    setModalImageAlt(alt);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
          navigation: {
            nextEl: ".buttonNextHero",
            prevEl: ".buttonPrevHero",
          },
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
                {({ isActive }) => (
                  <div
                    className={classNames(s.slideGallery, {
                      [s.activeSlide]: isActive,
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
            ))
          : null;
      case "team":
        return images.length
          ? images.map((item, idx) => (
              <SwiperSlide key={item.cert_img.id}>
                <div
                  onClick={() =>
                    handleOpenModal(
                      item.cert_img.childrenImageSharp[0].gatsbyImageData,
                      item[`${language}_cert_alt`]
                    )
                  }
                >
                  <GatsbyImage
                    image={item.cert_img.childrenImageSharp[0].gatsbyImageData}
                    alt={item[`${language}_cert_alt`]}
                  />
                </div>
              </SwiperSlide>
            ))
          : null;

      default:
        return null;
    }
  };

  const settings = typeSettings(type);
  const data = typeData(type, images);
  return (
    <div
      id="carusel"
      className={classNames({
        [s.wrapperHero]: type === "hero",
        [s.wrapperGallery]: type === "gallery",
        [s.wrapperTeam]: type === "team",
      })}
    >
      <Swiper {...settings}>{data}</Swiper>
      <Modal
        image={modalImage}
        alt={modalImageAlt}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};
