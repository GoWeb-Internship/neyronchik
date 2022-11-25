import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

export const Footer = () => {
  return (
    <section className="w-full " id="hero">
      <div className="container border-2">
        <div>
          {new Date().getFullYear()} Нейрончики - логопедичний центр. <br />
          Усі права захищені
        </div>
      </div>
    </section>
  );
};
