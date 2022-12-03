import React from "react";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import { buttonNextHero, buttonPrevHero } from "./SliderButton.module.css";

export const SliderButton = ({ back = false, className = "" }) => {
  return (
    <div className={className}>
      {back ? (
        <MdOutlineArrowBackIosNew size={40} />
      ) : (
        <MdOutlineArrowForwardIos size={40} />
      )}
    </div>
  );
};
