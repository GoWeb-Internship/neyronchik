import React from "react";
import { Headings } from "components";
import { Button } from "../../components/Button/Button";
import * as s from "./HeroTextBlock.module.css";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";

export const HeroTextBlock = ({ phone }) => {
  const { t } = useTranslation();
  const { contactUsBtn } = t("button", {
    returnObjects: true,
  });

  return (
    <div className={s.wrapper}>
      <Headings className="sm:pb-1 md:pb-3" type="h1">
        НЕЙРОНЧИКИ
      </Headings>
      <p className={s.subtitle}>Логопедичний центр</p>
      <p className={s.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
        tempus elementum enim diam. Facilisis integer ut sed viverra facilisi
        molestie
      </p>
      <Button phone={phone} red aria={contactUsBtn} text={contactUsBtn} />
    </div>
  );
};
