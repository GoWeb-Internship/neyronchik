import React from "react";
import { Headings } from "components";
import { Button } from "../../components/Button/Button";
import * as s from "./HeroTextBlock.module.css";
export const HeroTextBlock = ({ phone = 103 }) => {
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
      <Button
        phone={phone}
        // TODO language
        aria={"call us"}
        text={"Записатися на прийом"}
      />
    </div>
  );
};
