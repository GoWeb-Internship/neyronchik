import React from "react";
import * as s from "./HandInCircle.module.css";
import Hand from "../../../static/img/hand.inline.svg";
import classnames from "classnames";

export const HandInCircle = ({
  color = "red",
  name = "",
  mobile = false,
  activeText = "",
  className = "",
  onClick = {},
}) => {
  return mobile ? (
    <button
      name={name}
      type="button"
      aria-label={name}
      onClick={onClick}
      className={classnames(
        s.wrapper,
        s.mobile,
        { [s.redColor]: color === "red" },
        { [s.blueColor]: color === "blue" },
        { [s.yellowColor]: color === "yellow" },
        { [s.activeTextRed]: color === "red" && name === activeText },
        { [s.isActiveBlue]: color === "blue" && name === activeText },
        { [s.isActiveYellow]: color === "yellow" && name === activeText },
        { [s.isActive]: name === activeText },
        className
      )}
    >
      <Hand className={s.hand} />
    </button>
  ) : (
    <div
      className={classnames(
        s.wrapper,

        { [s.redColor]: color === "red" },
        { [s.blueColor]: color === "blue" },
        { [s.yellowColor]: color === "yellow" }
      )}
    >
      <Hand className={s.hand} />
    </div>
  );
};
