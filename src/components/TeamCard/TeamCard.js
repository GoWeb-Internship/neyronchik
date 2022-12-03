import React from "react";
import * as s from "./TeamCard.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { Carusel } from "components/Carusel/Carusel";
import { SliderButton } from "components/SliderButton/SliderButton";
export const TeamCard = ({ data }) => {
  const { language } = useI18next();

  return (
    <div className={s.wrapper}>
      <div className={s.photo}>
        <GatsbyImage
          image={data.team_member_photo.childrenImageSharp[0].gatsbyImageData}
          alt={data[`${language}_team_member_name`]}
        />
      </div>
      <div className={s.textBlock}>
        <h3 className={s.name}>{data[`${language}_team_member_name`]}</h3>
        <p className={s.specification}>
          {data[`${language}_team_member_specialization`]}
        </p>
        <p className={s.experience}>
          {data[`${language}_team_member_experience`]}
        </p>
      </div>

      <div className={s.caruselWrapper}>
        <p className={s.sertificates}>
          {language === "uk" ? "Сартифікати:" : "Certificates:"}
        </p>
        <div className={s.caruselNavigationWrapper}>
          {" "}
          <Carusel type="team" images={data.cert_list} />
          <SliderButton className="buttonNextCertificate" />
        </div>
      </div>
    </div>
  );
};
