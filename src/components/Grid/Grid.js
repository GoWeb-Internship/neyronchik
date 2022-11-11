import React from "react";
import classNames from "classnames";
import { type1, type2, type3 } from "./Grid.module.css";

export const Grid = ({ children, section, className, ...props }) => {
  return (
    <div
      className={classNames(className, {
        [type1]: section === "hero",
        [type2]: section === "about",
        [type3]: section === "workVector",
        // [type4]: section === "choose",
        // [type5]: section === "team",
      })}
      {...props}
    >
      {children}
    </div>
  );
};
