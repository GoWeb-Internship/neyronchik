import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/feature/HeroTextBlock/HeroTextBlock";

export const Hero = () => {
  return (
    <section id="hero" className="text-red-600">
      <Grid className="relative" section="hero">
        <HeroTextBlock />
        <div className="h-[400px] w-[400px] bg-red-300"></div>
      </Grid>
    </section>
  );
};
