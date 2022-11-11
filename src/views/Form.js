import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

export const Form = () => {
  return (
    <section className="w-full " id="hero">
      <div className="container border-2">
        <Headings type="h2">Form</Headings>
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "pink",
          }}
        ></div>
      </div>
    </section>
  );
};
