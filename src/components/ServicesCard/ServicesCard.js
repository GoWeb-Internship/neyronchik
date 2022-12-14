import classnames from "classnames";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";
import { BsClockHistory, BsWallet2 } from "react-icons/bs";
import { capitalizeFirstLetter } from "utils/capitalizeFirst";
import * as s from "./ServicesCard.module.css";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

export const ServicesCard = ({ data }) => {
  const { language } = useI18next();
  const { t } = useTranslation();
  const { time, currency, service_header } = t("servicesValues", {
    returnObjects: true,
  });
  const breakpoints = useBreakpoint();
  return (
    <div className={s.wrapper}>
      <div className={classnames(s.pinkRectangle, s.pinkRectangleBg)}></div>
      <div className={classnames(s.infoBlock, s.infoBlockBg)}>
        <p className={classnames("text-shadow", s.cardTitle)}>
          {data[`${language}_service_title`]}
        </p>

        <table>
          <thead className={s.thead}>
            <tr>
              <th>{!breakpoints.sm && service_header}</th>
              <th>{<BsClockHistory size={24} />}</th>
              <th>{<BsWallet2 size={24} />}</th>
            </tr>
          </thead>
          <tbody>
            {data.service_list.map((list, index) => (
              <tr key={index} className={s.trow}>
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
      <div className={classnames(s.logo, s.logoBg)}></div>
    </div>
  );
};
