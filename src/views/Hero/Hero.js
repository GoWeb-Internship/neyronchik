import { Carusel } from "components/Carusel/Carusel";
import { SliderButton } from "components/SliderButton/SliderButton";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import classnames from "classnames";
import * as s from "./Hero.module.css";
export const Hero = ({ images }) => {
  const breakpoints = useBreakpoint();
  const { markdownRemark } = useStaticQuery(
    graphql`
      query Hero {
        markdownRemark(
          frontmatter: { contacts_identifier: { eq: "contacts" } }
        ) {
          frontmatter {
            phone_main
          }
        }
      }
    `
  );
  const { frontmatter } = markdownRemark;
  console.log(images);
  return (
    <section id="hero" className="pt-[100px]">
      <div className={classnames("container", s.heroContainer)}>
        {images && (
          <>
            <Carusel type="hero" images={images} />
            {breakpoints.xl && (
              <SliderButton back className="buttonPrevHero " />
            )}
            {breakpoints.xl && <SliderButton className="buttonNextHero  " />}
          </>
        )}

        <HeroTextBlock phone={frontmatter.phone_main} />
      </div>
    </section>
  );
};
