import { Carusel } from "components/Carusel/Carusel";
import { SliderButton } from "components/SliderButton/SliderButton";
import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
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
  const imageArray = images.edges;
  // const filterImages = (array, width) => {
  //   switch (width) {
  //     case value:
  //       320;
  //       return array.filter((item) => {
  //         item.node.childImageSharp.gatsbyImageData.width = 320;
  //       });
  //     case value:
  //       768;
  //       return array.filter((item) => {
  //         item.node.childImageSharp.gatsbyImageData.width = 768;
  //       });
  //     case value:
  //       1280;
  //       return array.filter((item) => {
  //         item.node.childImageSharp.gatsbyImageData.width = 1280;
  //       });

  //     default:
  //       return null;
  //   }
  // };
  const mobileImg = imageArray.filter((item) => {
    item.node.childImageSharp.gatsbyImageData.width === 320;
  });
  const tabletImg = imageArray.filter((item) => {
    item.node.childImageSharp.gatsbyImageData.width === 768;
  });
  const descktopImg = imageArray.filter((item) => {
    item.node.childImageSharp.gatsbyImageData.width === 1280;
  });

  console.log(imageArray);
  console.log(mobileImg);
  console.log(tabletImg);
  console.log(descktopImg);

  const { frontmatter } = markdownRemark;
  const [imagesSet, setImagesSet] = useState();
  // useEffect(() => {
  //   setImagesSet(filteredIages);
  // }, [breakpoints.sm, breakpoints.md, breakpoints.xl]);

  return (
    <section id="hero" className="pt-[100px]">
      <div className={classnames("container", s.heroContainer)}>
        {images && (
          <>
            <Carusel type="hero" images={images.edges} />
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
