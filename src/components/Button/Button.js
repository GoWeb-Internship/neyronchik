import React from "react";
import * as s from "./Button.module.css";
import classnames from "classnames";

export const Button = (
  {
    icon,
    phone,
    red,
    white,
    blue,
    text = "button",
    className = "",
    onClick = {},
    aria = "button",
  },
  rest
) => {
  return phone ? (
    <a
      className={classnames(
        s.button,
        { [s.buttonRed]: red },
        { [s.buttonBlue]: blue },
        { [s.buttonWhite]: white },
        className
      )}
      href={`tel:${phone}`}
    >
      {text}
    </a>
  ) : (
    <button
      {...rest}
      onClick={onClick}
      aria-label={aria}
      type="button"
      className={classnames(
        s.button,
        { [s.buttonRed]: red },
        { [s.buttonBlue]: blue },
        { [s.buttonWhite]: white },
        className
      )}
    >
      {text}
      {icon && icon}
    </button>
  );
};
