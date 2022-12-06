import { useI18next } from "gatsby-plugin-react-i18next";
import React, { useRef, useState } from "react";
import { Lazy, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { SliderButton } from "components/SliderButton/SliderButton";

import { Modal } from "components/Modal/Modal";
import { GatsbyImage } from "gatsby-plugin-image";

export const CaruselCertificates = ({ cerificates, id = "" }) => {
  const { language } = useI18next();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalImageAlt, setModalImageAlt] = useState(null);

  const handleOpenModal = (image, alt) => {
    setModalImage(image);
    setModalImageAlt(alt);
    setIsModalOpen(true);
  };
  console.log(cerificates);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const settings = {
    modules: [Navigation, Lazy],
    lazy: true,
    speed: 500,
    height: 92,
    slidesPerView: 3,
    spaceBetween: 24,
    breakpoints: {
      // when window width is >= 320px

      // when window width is >= 480px
      768: {
        slidesPerView: "auto",
        spaceBetween: 24,
      },
      // when window width is >= 640px
      1280: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    navigation: { nextEl: `.id-${id}` },
  };

  return (
    <div
      id="caruselCertificates"
      className="wrapperCertificates md:auto relative flex truncate xl:h-[90px] xl:w-[260px]"
    >
      <Swiper {...settings}>
        {cerificates.map((item) => (
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
                style={{ objectFit: "contain" }}
                image={item.cert_img.childrenImageSharp[0].gatsbyImageData}
                alt={item[`${language}_cert_alt`]}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal
        image={modalImage}
        alt={modalImageAlt}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
      <button
        type="button"
        // TODO language
        aria-label={language === "en" ? "next slide" : "наступний слайд"}
        className={`buttonNextCertificate id-${id}`}
      >
        <MdOutlineArrowForwardIos size={13} />
      </button>
    </div>
  );
};
