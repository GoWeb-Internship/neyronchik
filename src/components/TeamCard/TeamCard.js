import React from "react";
import * as s from "./TeamCard.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { CaruselCertificates } from "components/CaruselCertificates/CaruselCertificates";
import classnames from "classnames";

export const TeamCard = ({ data, id }) => {
  const { language } = useI18next();
  const { t } = useTranslation();
  const { certificates } = t("team", {
    returnObjects: true,
  });
  return (
    <div className={s.bgWrapper}>
      <div className={s.wrapper}>
        <div className={s.infoAndPhotoWrapper}>
          <div className={s.photo}>
            <GatsbyImage
              image={
                data.team_member_photo.childrenImageSharp[0].gatsbyImageData
              }
              alt={data[`${language}_team_member_name`]}
            />
          </div>
          <div className={s.textBlock}>
            <h3 className={s.name}>{data[`${language}_team_member_name`]}</h3>
            <p className={s.specification}>
              {data[`${language}_team_member_specialization`]}
            </p>
            <p className={classnames("innerScroll", s.experience)}>
              {data[`${language}_team_member_experience`]}
            </p>
          </div>
        </div>
        <div className={s.caruselWrapper}>
          <p className={s.sertificates}>{certificates}</p>
          {data?.cert_list?.length && (
            <div className={s.caruselNavigationWrapper}>
              <CaruselCertificates id={id} cerificates={data.cert_list} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
