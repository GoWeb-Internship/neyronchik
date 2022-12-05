import { useI18next } from "gatsby-plugin-react-i18next";
import React, { useRef, useState } from "react";
import { Lazy, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { SliderButton } from "components/SliderButton/SliderButton";

import { Modal } from "components/Modal/Modal";
import { GatsbyImage } from "gatsby-plugin-image";

export const CaruselCertificates = ({ cerificates }) => {
  const { language } = useI18next();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalImageAlt, setModalImageAlt] = useState(null);

  const handleOpenModal = (image, alt) => {
    setModalImage(image);
    setModalImageAlt(alt);
    setIsModalOpen(true);
  };
  const caruselRef = useRef();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  console.log(caruselRef.current);

  const settings = {
    modules: [Navigation, Lazy],
    lazy: true,
    loop: true,
    speed: 500,
    height: 92,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 24,
    navigation: { nextEl: caruselRef.current },
    // navigation: { nextEl: ".buttonNextCertificate" },
  };

  return (
    <div id="caruselCertificates" className="wrapperCertificates">
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
        ref={caruselRef}
        type="button"
        aria-label="{aria}"
        className="buttonNextCertificate"
      >
        <MdOutlineArrowForwardIos size={40} />
      </button>
      {/* <SliderButton ref={caruselRef} className="buttonNextCertificate" /> */}
    </div>
  );
};
