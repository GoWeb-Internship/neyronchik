import React from "react";
import ReactModal from "react-modal";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { GatsbyImage } from "gatsby-plugin-image";
import * as s from "./Modal.module.css";

export const Modal = ({
  image,
  alt = "",
  isModalOpen = false,
  handleCloseModal = {},
}) => {
  const { t } = useTranslation();
  const { closeModal } = t("button", {
    returnObjects: true,
  });
  return (
    <ReactModal
      isOpen={isModalOpen}
      contentLabel="Modal"
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.contentWrapper}>
        {image && (
          <GatsbyImage
            image={image}
            imgStyle={{
              objectFit: "contain",
              objectPosition: "50% 50%",
            }}
            alt={alt}
          />
        )}
      </div>{" "}
      <button
        type="button"
        className={s.closeButton}
        onClick={handleCloseModal}
        aria-label={closeModal}
      >
        X
      </button>
    </ReactModal>
  );
};
