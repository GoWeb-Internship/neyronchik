import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/feature/HeroTextBlock/HeroTextBlock";

export const Hero = () => {
  return (
    <Grid className="relative" section="hero">
      <HeroTextBlock />
      <div></div>
    </Grid>
  );
};
