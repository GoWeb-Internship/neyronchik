import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

export const Team = () => {
  const data = [
    {
      img: "foto",
      title: "ПІБ1",
      sub: "Спеціалізація",

      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  amet, viverra nec pretium fermentum ut cras. Id odio velit id  ",
    },
    {
      img: "foto",
      title: "ПІБ2",
      sub: "Спеціалізація",

      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  amet, viverra nec pretium fermentum ut cras. Id odio velit id  ",
    },
    {
      img: "foto",
      title: "ПІБ3",
      sub: "Спеціалізація",

      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  amet, viverra nec pretium fermentum ut cras. Id odio velit id  ",
    },
    {
      img: "foto",
      title: "ПІБ4",
      sub: "Спеціалізація",
      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  amet, viverra nec pretium fermentum ut cras. Id odio velit id  ",
    },
  ];
  return (
    <section className="w-full " id="hero">
      <div className="container border-2">
        <Headings type="h2">Наша команда</Headings>
        <Grid className="relative" section="hero">
          {data.map((i) => (
            <div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "yellow",
                }}
              ></div>
              <h3>{i.title}</h3>
              <p>{i.sub}</p>
              <p>{i.text}</p>
            </div>
          ))}
        </Grid>
      </div>
    </section>
  );
};
