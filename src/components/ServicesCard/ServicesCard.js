import React from "react";
import * as s from "./ServicesCard.module.css";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";

export const ServicesCard = ({ data }) => {
  const { language } = useI18next();
  const { t } = useTranslation();
  const { time, currency } = t("servicesValues", {
    returnObjects: true,
  });
  return (
    <div className={s.wrapper}>
      <div className={s.pinkRectangle}></div>
      <div className={s.infoBlock}>
        <p className={s.title}>{data[`${language}_service_title`]}</p>
        <ul>
          {data.service_list.map((list) => (
            <li key={list.en_service_description}>
              <p>{list[`${language}_service_description`]}</p>
              <span>{list.service_duration}</span>
              <span>{time}</span>
              <p>{list.service_price}</p>
              <span>{currency}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
