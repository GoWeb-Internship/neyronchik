import React from "react";
import ReactModal from "react-modal";

import { GatsbyImage } from "gatsby-plugin-image";
import * as s from "./Modal.module.css";

export const Modal = ({
  image,
  alt = "",
  isModalOpen = false,
  handleCloseModal = {},
}) => {
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
      >
        X
      </button>
    </ReactModal>
  );
};
