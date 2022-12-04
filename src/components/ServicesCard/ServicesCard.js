import React, { useState } from "react";
import * as s from "./ServicesCard.module.css";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { BsClockHistory, BsWallet2 } from "react-icons/bs";

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
        <p className={s.cardTitle}>{data[`${language}_service_title`]}</p>

        <table>
          <thead className={s.thead}>
            <tr>
              <th>Послуга</th>
              <th>{<BsClockHistory size={24} />}</th>
              <th>{<BsWallet2 size={24} />}</th>
            </tr>
          </thead>
          <tbody>
            {data.service_list.map((list, index) => (
              <tr className={s.trow} key={index}>
                <td>{list[`${language}_service_description`]}</td>
                <td>{`${list.service_duration} ${time}`}</td>
                <td>{`${list.service_price} ${currency}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={s.logo}></div>
    </div>
  );
};
