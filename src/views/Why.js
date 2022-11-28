import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

export const Why = () => {
  const data = [
    {
      img: "foto1",
      title: "Advantage1",
      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  amet, viverra nec pretium fermentum ut cras. Id odio velit id  ",
    },
    {
      img: "foto2",
      title: "Advantage2",
      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  amet, viverra nec pretium fermentum ut cras. Id odio velit id  ",
    },
    {
      img: "foto3",
      title: "Advantage3",
      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  amet, viverra nec pretium fermentum ut cras. Id odio velit id  ",
    },
    {
      img: "foto4",
      title: "Advantage4",
      text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  amet, viverra nec pretium fermentum ut cras. Id odio velit id  ",
    },
  ];

  const { t } = useTranslation();
  const { whyUs_title } = t("titles", {
    returnObjects: true,
  });

  return (
    <section className="w-full " id="why">
      <div className="container border-2">
        <Headings type="h2">{whyUs_title}</Headings>
        <Grid className="relative" section="hero">
          {data.map((i) => (
            <div key={i.img}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "yellow",
                }}
              ></div>
              <h3>{i.title}</h3>
              <p>{i.text}</p>
            </div>
          ))}
        </Grid>
      </div>
    </section>
  );
};
