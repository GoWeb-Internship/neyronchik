import React, { useState } from "react";
import Slider from "react-slick";
import { arrow, prev, next, wrapper } from "./Carusel.module.css";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import classNames from "classnames";

export const Carusel = ({ type }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const data = useStaticQuery(graphql`
    query HeroSliderQuery {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
            name
            relativeDirectory
          }
        }
      }
      hero: allFile(
        filter: { sourceInstanceName: {}, relativeDirectory: { in: "hero" } }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
            name
            relativeDirectory
          }
        }
      }
    }
  `);
  console.log(data.hero);
  const NextArrow = ({ onClick }) => {
    return (
      <div className={classNames(arrow, next)} onClick={onClick}>
        <BsChevronCompactRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={classNames(arrow, prev)} onClick={onClick}>
        <BsChevronCompactLeft />
      </div>
    );
  };
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    // beforeChange: (current, next) => {
    //   !flat && setImageIndex(next);
    // },
  };

  return (
    <div className={wrapper}>
      <Slider {...settings}>
        {data.hero.edges.map(({ node }, idx) => (
          <div
            style={{ height: "300px" }}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
            key={node.name}
          >
            <GatsbyImage
              image={node.childImageSharp.gatsbyImageData}
              alt={node.name}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
