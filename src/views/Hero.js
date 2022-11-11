import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Carusel } from "components/Carusel/Carusel";

export const Hero = () => {
  return (
    <section className="w-full" id="hero">
      <div className="container relative">
        <Carusel type="hero" />
        <Grid section="hero">
          <HeroTextBlock />
          <div
            style={{
              padding: "40px",
            }}
          >
            <div
              id="image"
              style={{
                padding: "20px",
                width: "100%",
                height: "300px",
                backgroundColor: "yellow",
              }}
            ></div>
          </div>
        </Grid>
      </div>
    </section>
  );
};
