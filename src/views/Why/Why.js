import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Headings } from "components/Headings/Headings";
import * as s from "./Why.module.css";
import { HandInCircle } from "components/HandInCircle/HandInCircle";
import classnames from "classnames";

export const Why = () => {
  const { t } = useTranslation();
  const { whyUs_title } = t("titles", {
    returnObjects: true,
  });

  return (
    <section className="w-full " id="why">
      <div className="container border-2">
        <Headings>{whyUs_title}</Headings>
        <div className={s.borders}>
          <div className={classnames(s.borders, s.one)}>
            <HandInCircle color="blue" />
          </div>
          <div className={classnames(s.borders, s.two)}>
            <div>
              <HandInCircle />
            </div>
            <div>
              <HandInCircle />
            </div>
          </div>
          <div className={classnames(s.borders, s.middle)}>
            {" "}
            <div>
              <HandInCircle />
            </div>
            <div>
              <HandInCircle />
            </div>
          </div>
          <div className={classnames(s.borders, s.two)}>
            {" "}
            <div>
              <HandInCircle />
            </div>
            <div>
              <HandInCircle />
            </div>
          </div>
          <div className={classnames(s.borders, s.one)}>
            {" "}
            <div>
              <HandInCircle />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
