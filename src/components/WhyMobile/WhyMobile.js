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

  const handleClick = (e) => {
    setActiveText(e.target.name);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.textWrapper}>{activeText}</div>
      <div className={s.buttonsWrapper}>
        <div className={s.centerCirlce}>
          <div className={s.centerCirlceInner}></div>
        </div>
        <div className={classnames(s.one)}>
          <div className={s.buttonWrapper}>
            <HandInCircle
              name={text1}
              mobile
              onClick={handleClick}
              color="blue"
              activeText={activeText}
            />
          </div>
        </div>
        <div className={classnames(s.wrapper, s.two)}>
          <div className={s.buttonWrapper}>
            <HandInCircle
              name={text2}
              mobile
              onClick={handleClick}
              activeText={activeText}
            />
          </div>

          <div className={s.twoCenterBlock}></div>
          <div className={s.buttonWrapper}>
            <HandInCircle
              activeText={activeText}
              name={text3}
              mobile
              onClick={handleClick}
            />
          </div>
        </div>
        <div className={classnames(s.wrapper, s.three)}>
          <div className={s.buttonWrapper}>
            <HandInCircle
              activeText={activeText}
              name={text4}
              mobile
              onClick={handleClick}
              color="yellow"
            />
          </div>

          <div className={s.threeCenterBlock}></div>
          <div className={s.buttonWrapper}>
            <HandInCircle
              activeText={activeText}
              name={text5}
              mobile
              onClick={handleClick}
              color="blue"
            />
          </div>
        </div>
        <div className={classnames(s.wrapper, s.four)}>
          <div className={s.buttonWrapper}>
            <HandInCircle
              activeText={activeText}
              name={text6}
              mobile
              onClick={handleClick}
              color="blue"
            />
          </div>

          <div className={s.twoCenterBlock}></div>
          <div className={s.buttonWrapper}>
            <HandInCircle
              activeText={activeText}
              name={text7}
              mobile
              onClick={handleClick}
              color="yellow"
            />
          </div>
        </div>
        <div className={classnames(s.wrapper, s.five)}>
          <div className={s.buttonWrapper}>
            <HandInCircle
              name={text8}
              activeText={activeText}
              mobile
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
