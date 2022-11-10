import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Headings } from "src/components/Headings/Headings";

export const About = () => {
  return (
    <section className="w-full " id="hero">
      <div className="container border-2">
        <Headings type="h2">Про нас</Headings>
        <Grid className="relative" section="hero">
          <div
            id="image2"
            style={{
              width: "100%",
              height: "300px",
              backgroundColor: "yellow",
            }}
          ></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            amet, viverra nec pretium fermentum ut cras. Id odio velit id
            ultrices pretium aenean mauris neque, posuere. Varius nisi, ut fames
            lorem scelerisque eget vitae. Porta proin rhoncus elementum, non at.
            Eu aliquet etiam felis mi, eget justo, auctor diam nunc. Lectus non
            ipsum dui urna, accumsan fermentum scelerisque interdum. Felis non
            diam risus nibh dis at. Facilisis consequat libero, morbi erat
            commodo eu congue. Rhoncus, elementum, vulputate adipiscing amet nam
            vivamus mauris, lacinia. Nunc arcu in eget lorem lorem cras. Integer
            aliquam purus turpis volutpat. Dolor id turpis porttitor morbi
            ultrices fames aliquet. Malesuada blandit ornare volutpat dapibus.
            Egestas eros augue pulvinar non fermentum in sit neque convallis.
            Elementum amet integer in odio lobortis massa. Aliquam est, egestas
            malesuada gravida. Egestas nisi risus nec duis odio dignissim. Amet
            ultrices at bibendum fames id neq
          </p>
        </Grid>
      </div>
    </section>
  );
};
