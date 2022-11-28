import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Carusel } from "components/Carusel/Carusel";
import { SliderButton } from "components/SliderButton/SliderButton";
import classNames from "classnames";

export const Hero = ({ images }) => {
  console.log(images);
  return (
    <section id="hero">
      <div className=" heroContainer container relative">
        {images && (
          <>
            <Carusel type="hero" images={images} />{" "}
            <SliderButton className="buttonPrevHero" />
            <SliderButton className="buttonNextHero" />
          </>
        )}

        <Grid section="hero">
          <HeroTextBlock />
          <div
            style={{
              padding: "40px",
            }}
          ></div>
        </Grid>
      </div>
    </section>
  );
};
