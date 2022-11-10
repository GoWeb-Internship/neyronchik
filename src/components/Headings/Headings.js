import React from "react";
import classNames from "classnames";
import { h1, h2, h3 } from "./Headings.module.css";

export const Headings = ({ children, type = "h2", className, ...props }) => {
  switch (type) {
    case "h1":
      return (
        <h1 className={classNames(h1, className)} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={classNames(h2, className)} {...props}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={classNames(h2, className)} {...props}>
          {children}
        </h3>
      );

    default:
      return null;
  }
};
