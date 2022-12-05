import React, { useState } from "react";
import * as s from "./ServicesCard.module.css";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { BsClockHistory, BsWallet2 } from "react-icons/bs";
import classnames from "classnames";
import { useSwiperSlide } from "swiper/react";
import { capitalizeFirstLetter } from "utils/capitalizeFirst";

export const ServicesCard = ({ data }) => {
  const { language } = useI18next();
  const { t } = useTranslation();
  const { time, currency } = t("servicesValues", {
    returnObjects: true,
  });
  const swiperSlide = useSwiperSlide();

  return (
    <div
      className={classnames(s.wrapper, s.wrapperBg, {
        [s.wrapperActive]: swiperSlide.isActive,
      })}
    >
      <div
        className={classnames(s.pinkRectangle, s.pinkRectangleBg, {
          [s.pinkRectangleActive]: swiperSlide.isActive,
        })}
      ></div>
      <div
        className={classnames(s.infoBlock, s.infoBlockBg, {
          [s.infoBlockActive]: swiperSlide.isActive,
        })}
      >
        <p className={s.cardTitle}>{data[`${language}_service_title`]}</p>

        <table>
          <thead className={s.thead}>
            <tr>
              {/* TODO language */}
              <th>{capitalizeFirstLetter("послуга")}</th>
              <th>{<BsClockHistory size={24} />}</th>
              <th>{<BsWallet2 size={24} />}</th>
            </tr>
          </thead>
          <tbody>
            {data.service_list.map((list, index) => (
              <tr
                key={index}
                className={classnames(s.trow, {
                  [s.trowActive]: swiperSlide.isActive,
                })}
              >
                <td>
                  {capitalizeFirstLetter(
                    list[`${language}_service_description`]
                  )}
                </td>
                <td>{`${list.service_duration} ${time}`}</td>
                <td>{`${list.service_price} ${currency}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className={classnames(s.logo, s.logoBg, {
          [s.logoActive]: swiperSlide.isActive,
        })}
      ></div>
    </div>
  );
};
