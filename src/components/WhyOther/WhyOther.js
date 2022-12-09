import React from "react";
import * as s from "./WhyOther.module.css";
import { HandInCircle } from "components/HandInCircle/HandInCircle";
import classnames from "classnames";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";

export const WhyOther = () => {
  const { t } = useTranslation();

  const { text1, text2, text3, text4, text5, text6, text7, text8 } = t("why", {
    returnObjects: true,
  });

  return (
    <div className={s.borders}>
      <div className={classnames(s.one)}>
        <div className={s.justCenter}>
          <span className={s.textToTop}>{text1}</span>
          <HandInCircle color="blue" />
        </div>
      </div>
      <div className={classnames(s.borders, s.two)}>
        <div className={s.horizontalTextAlignToCircle}>
          <span className={s.textToLeft}>{text2}</span>
          <HandInCircle />
        </div>
        <div className={s.twoCenterBlock}></div>
        <div className={s.horizontalTextAlignToCircle}>
          <HandInCircle />
          <span className={s.textToRight}>{text3}</span>
        </div>
      </div>
      <div className={classnames(s.borders, s.three)}>
        <div className={s.horizontalTextAlignToCircle}>
          <span className={s.textToLeft}>{text4}</span>
          <HandInCircle color="yellow" />
        </div>
        <div className={s.threeCenterBlock}>
          <div className={s.centerCirlce}>
            <div className={s.centerCirlceInner}></div>
          </div>
        </div>
        <div className={s.horizontalTextAlignToCircle}>
          <HandInCircle color="blue" />
          <span className={s.textToRight}>{text5}</span>
        </div>
      </div>
      <div className={classnames(s.borders, s.four)}>
        <div className={s.horizontalTextAlignToCircle}>
          {" "}
          <span className={s.textToLeft}>{text6}</span>
          <HandInCircle color="blue" />
        </div>
        <div className={s.twoCenterBlock}></div>
        <div className={s.horizontalTextAlignToCircle}>
          <HandInCircle color="yellow" />
          <span className={s.textToRight}>{text7}</span>
        </div>
      </div>
      <div className={classnames(s.borders, s.five)}>
        <div className={s.justCenter}>
          <HandInCircle />
          <span className={s.textToBottom}>{text8}</span>
        </div>
      </div>
    </div>
  );
};
