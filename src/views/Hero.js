import React, { useRef } from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Carusel } from "components/Carusel/Carusel";
import { SliderButton } from "components/SliderButton/SliderButton";
import classNames from "classnames";

export const Hero = ({ images }) => {
  // const nextRef = useRef(null);
  // const prevRef = useRef(null);
  // const rrr = useRef({ prevRef, nextRef });
  // console.log(images);
  return (
    <section id="hero">
      <div className="heroContainer container relative">
        {images && <Carusel type="hero" images={images} />}
        {/* <SliderButton back ref={prevRef} />
        <SliderButton ref={nextRef} />{" "} */}
        <Grid section="hero">
          <HeroTextBlock />
          <div
            style={{
              padding: "40px",
            }}
          ></div>
        </Grid>
      </div>
    </section>
  );
};
