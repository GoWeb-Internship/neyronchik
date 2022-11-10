import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Slick } from "components/Slider/Slider";

export const Hero = () => {
  return (
    <section className="w-full" id="hero">
      <div className="container border-2">
        <Slick />
        <Grid className="relative" section="hero">
          <HeroTextBlock />
          <div
            id="image"
            style={{
              width: "100%",
              height: "300px",
              backgroundColor: "yellow",
            }}
          ></div>
        </Grid>
      </div>
    </section>
  );
};
