import React, { useState } from "react";
import * as s from "./WhyMobile.module.css";
import { HandInCircle } from "components/HandInCircle/HandInCircle";
import classnames from "classnames";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";

export const WhyMobile = () => {
  const { t } = useTranslation();
  const { text1, text2, text3, text4, text5, text6, text7, text8 } = t("why", {
    returnObjects: true,
  });

  const [activeText, setActiveText] = useState(text1);

  const handleClick = (newText) => {
    setActiveText(newText);
  };
  return (
    <div className={s.borders}>
      <div className={classnames(s.one)}>
        <HandInCircle onClick={handleClick} color="blue" />
      </div>
      <div className={classnames(s.borders, s.two)}>
        <HandInCircle onClick={handleClick} />
        <div className={s.twoCenterBlock}></div>
        <HandInCircle />
      </div>
      <div className={classnames(s.borders, s.three)}>
        <HandInCircle onClick={handleClick} color="yellow" />
        <div className={s.threeCenterBlock}>
          <div className={s.centerCirlce}></div>
        </div>
        <HandInCircle onClick={handleClick} color="blue" />
      </div>
      <div className={classnames(s.borders, s.four)}>
        <HandInCircle onClick={handleClick} color="blue" />

        <div className={s.twoCenterBlock}></div>
        <HandInCircle onClick={handleClick} color="yellow" />
      </div>
      <div className={classnames(s.borders, s.five)}>
        <HandInCircle onClick={handleClick} />
      </div>
    </div>
  );
};
