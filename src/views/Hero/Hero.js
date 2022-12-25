import classnames from "classnames";
import { CaruselHero } from "components/CaruselHero/CaruselHero";
import { graphql, useStaticQuery } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { useEffect, useState } from "react";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import * as s from "./Hero.module.css";

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export const Hero = ({ images }) => {
  const breakpoints = useBreakpoint();

  const { markdownRemark } = useStaticQuery(
    graphql`
      query Phone {
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
  const { frontmatter } = markdownRemark;

  const [imagesSet, setImagesSet] = useState(null);
  const { t } = useTranslation();
  const { nextSlide, prevSlide } = t("button", {
    returnObjects: true,
  });

  useEffect(() => {
    breakpoints.sm &&
      setImagesSet(
        imageArray.filter((item) => {
          return item.node.childImageSharp.gatsbyImageData.width === 320;
        })
      ),
      breakpoints.md &&
        setImagesSet(
          imageArray.filter((item) => {
            return item.node.childImageSharp.gatsbyImageData.width === 768;
          })
        ),
      breakpoints.xl &&
        setImagesSet(
          imageArray.filter((item) => {
            return item.node.childImageSharp.gatsbyImageData.width === 1280;
          })
        );
  }, [breakpoints.sm, breakpoints.md, breakpoints.xl]);

  return (
    <section id="hero">
      <div
        className={classnames(
          "containerPaddingBottom container ",
          s.heroContainer
        )}
      >
        {imagesSet && (
          <>
            <CaruselHero images={imagesSet} />
            <button type="button" aria-label={prevSlide} className="prevHero">
              <MdOutlineArrowBackIosNew size={40} />
            </button>
            <button type="button" aria-label={nextSlide} className="nextHero">
              <MdOutlineArrowForwardIos size={40} />
            </button>
          </>
        )}

        <HeroTextBlock phone={frontmatter.phone_main} />
      </div>
    </section>
  );
};
