import React, { useState, useEffect } from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Carusel } from "components/Carusel/Carusel";
import { SliderButton } from "components/SliderButton/SliderButton";
import classnames from "classnames";

export const Hero = ({ images }) => {
  return (
    <section id="hero" className="pt-[100px]">
      <div className="container relative px-0  xl:h-[700px]">
        {images && (
          <>
            <Carusel type="hero" images={images} />
            <SliderButton back className="buttonPrevHero " />
            <SliderButton className="buttonNextHero  " />
          </>
        )}

        <HeroTextBlock />
      </div>
    </section>
  );
};
