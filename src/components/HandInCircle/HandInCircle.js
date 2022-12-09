import React from "react";
import * as s from "./HandInCircle.module.css";
import Hand from "../../../static/img/hand.inline.svg";
import classnames from "classnames";

export const HandInCircle = ({
  color = "red",
  mobile = false,
  isActive = false,
  onClick = {},
}) => {
  const handColor =
    (color === "blue" && "#0EA5E9",
    color === "yellow" && "#FBBF24",
    color === "red" && "#EC1E66");
  return mobile ? (
    <button
      type="button"
      onClick={onClick}
      className={classnames(
        s.wrapper,
        s.mobile,
        { [s.redColor]: color === "red" },
        { [s.blueColor]: color === "blue" },
        { [s.yellowColor]: color === "yellow" },
        { [s.isActiveRed]: color === "red" },
        { [s.isActiveBlue]: color === "blue" },
        { [s.isActiveYellow]: color === "yellow" },
        { [s.isActive]: isActive }
      )}
    ></button>
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
