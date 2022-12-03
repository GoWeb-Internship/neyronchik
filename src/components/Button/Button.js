import React from "react";
import * as s from "./Button.module.css";
export const Button = ({
  phone,
  text = "button",
  className = "",
  onClick = {},
  aria = "button",
}) => {
  return phone ? (
    <a className={`${s.button} ${className}`} href={`tel:${phone}`}>
      {text}
    </a>
  ) : (
    <button
      onClick={onClick}
      aria-labelledby={aria}
      type="button"
      className={`${s.button} ${className}`}
    >
      {text}
    </button>
  );
};
