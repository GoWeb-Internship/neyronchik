import React, { forwardRef } from "react";
import { prev, next } from "./SliderButton.module.css";

export const SliderButton = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={props.back ? prev : next}>
      <p>*</p>
    </div>
  );
});
