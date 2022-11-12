import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

export const Services = () => {
  return (
    <section className="w-full " id="services">
      <div className="container border-2">
        <Headings type="h2">Послуги</Headings>
        <Grid className="relative" section="hero">
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "yellow",
            }}
          ></div>
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "yellow",
            }}
          ></div>
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "yellow",
            }}
          ></div>
        </Grid>
      </div>
    </section>
  );
};
