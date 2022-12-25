import { useI18next } from "gatsby-plugin-react-i18next";
import React, { useState } from "react";
import { Lazy, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import { Modal } from "components/Modal/Modal";
import { GatsbyImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

export const CaruselCertificates = ({ cerificates, id = "" }) => {
  const { language } = useI18next();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalImageAlt, setModalImageAlt] = useState(null);

  const { t } = useTranslation();
  const { nextSlide } = t("button", {
    returnObjects: true,
  });

  const handleOpenModal = (image, alt) => {
    setModalImage(image);
    setModalImageAlt(alt);
    setIsModalOpen(true);
  };

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
    height: 108,
    breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 24,
      },

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
      className="wrapperCertificates  relative flex truncate xl:h-[90px] xl:w-[260px]"
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
        aria-label={nextSlide}
        className={`buttonNextCertificate id-${id}`}
      >
        <MdOutlineArrowForwardIos size={13} />
      </button>
    </div>
  );
};
