import React from "react";
import { Headings } from "components";
import { Button } from "../../components/Button/Button";

export const HeroTextBlock = () => {
  return (
    <div className="pl-[177px] pt-[118px]">
      <Headings className="select-none text-[#38BDF8]" type="h1">
        НЕЙРОНЧИКИ
      </Headings>
      <p className="mb-7 select-none text-2xl text-rose-600" type="h2">
        Логопедичний центр
      </p>
      <p className=" mb-[60px] max-w-[486px] select-none font-light leading-6 tracking-[-0.019em]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
        tempus elementum enim diam. Facilisis integer ut sed viverra facilisi
        molestie
      </p>
      <Button
        phone="4654654634"
        aria={"call us"}
        text={"Записатися на прийом"}
      />
    </div>
  );
};
