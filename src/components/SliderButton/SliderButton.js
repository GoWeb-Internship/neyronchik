import React from "react";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";

export const SliderButton = ({ back = false, className, aria = "button" }) => {
  return (
    <button type="button" aria-label={aria} className={className}>
      {back ? (
        <MdOutlineArrowBackIosNew size={40} />
      ) : (
        <MdOutlineArrowForwardIos size={40} />
      )}
    </button>
  );
};
