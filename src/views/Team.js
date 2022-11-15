import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";
import { Carusel } from "components/Carusel/Carusel";
export const Team = () => {
  const data = [
    {
      img: "foto1",
      title: "ПІБ1",
      sub: "Спеціалізація",

      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  amet, viverra nec pretium fermentum ut cras. Id odio velit id  ",
    },
    {
      img: "foto2",
      title: "ПІБ2",
      sub: "Спеціалізація",

      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  amet, viverra nec pretium fermentum ut cras. Id odio velit id  ",
    },
    {
      img: "foto3",
      title: "ПІБ3",
      sub: "Спеціалізація",

      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  amet, viverra nec pretium fermentum ut cras. Id odio velit id  ",
    },
    {
      img: "foto4",
      title: "ПІБ4",
      sub: "Спеціалізація",
      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  amet, viverra nec pretium fermentum ut cras. Id odio velit id  ",
    },
  ];
  return (
    <section className="w-full " id="team">
      <div className="container border-2">
        <Headings type="h2">Наша команда</Headings>
        <Grid className="relative" section="team">
          {data.map((i) => (

            <div className="flex p-5" key={i.img}>


              <div
                className="mr-16"
                style={{
                  width: "140px",
                  height: "70px",
                  backgroundColor: "yellow",
                }}
              ></div>
              <div>
                {" "}
                <h3 className="mb-4">{i.title}</h3>
                <p className="mb-4">{i.sub}</p>
                <p>{i.text}</p>
              </div>
              <div>
                <p className="pb-4">certificates</p>
                {/* <Carusel type="team" /> */}
              </div>{" "}
            </div>
          ))}
        </Grid>
      </div>
    </section>
  );
};
