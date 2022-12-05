import React, { forwardRef } from "react";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import * as s from "./SliderButtonTeam.module.css";

export const SliderButtonTeam = forwardRef(
  ({ back = false, aria = "button" }, ref) => {
    console.log(ref);
    return (
      <button
        ref={ref}
        type="button"
        aria-label={aria}
        className={s.buttonNextCertificate}
      >
        {back ? (
          <MdOutlineArrowBackIosNew size={40} />
        ) : (
          <MdOutlineArrowForwardIos size={40} />
        )}
      </button>
    );
  }
);
