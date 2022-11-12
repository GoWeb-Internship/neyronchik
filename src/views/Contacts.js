import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

export const Contacts = () => {
  return (
    <section className="w-full " id="contacts">
      <div className="container border-2">
        <Headings type="h2">Contacts</Headings>

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
