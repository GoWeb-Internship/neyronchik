import React from "react";
import ReactModal from "react-modal";
ReactModal.setAppElement("#portal");
import { GatsbyImage } from "gatsby-plugin-image";
import * as s from "./Modal.module.css";

export const Modal = ({
  image,
  alt = "",
  isModalOpen = false,
  handleCloseModal = {},
}) => {
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };
  return (
    <ReactModal
      isOpen={isModalOpen}
      contentLabel="Modal"
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      className={s.modal}
      overlayClassName={s.overlay}
      onAfterOpen={disableScroll}
    >
      <div className={s.contentWrapper}>
        {image && <GatsbyImage image={image} alt={alt} />}
        <button
          type="button"
          className={s.closeButton}
          onClick={handleCloseModal}
        >
          X
        </button>
      </div>
    </ReactModal>
  );
};
