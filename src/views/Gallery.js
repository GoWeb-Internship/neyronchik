import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

export const Gallery = () => {
  return (
    <section className="w-full " id="hero">
      <div className="container relative">
        <Headings type="h2">Gallery</Headings>

        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "orange",
          }}
        ></div>
      </div>
    </section>
  );
};
