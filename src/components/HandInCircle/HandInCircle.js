import React from "react";
import * as s from "./HandInCircle.module.css";
import Hand from "../../../static/img/hand.svg";
import classnames from "classnames";

export const HandInCircle = ({
  color = "red",
  mobile = false,
  isActive = false,
  onClick = {},
}) => {
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
      {/* TODO language */}
      <img className={s.image} src={Hand} alt="hand" />
    </div>
  );
};
