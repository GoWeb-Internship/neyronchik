import React, { useState } from "react";
import Slider from "react-slick";
import {
  arrow,
  prev,
  next,
  wrapper,
  activeSlide,
  slide,
  wrapperHero,
} from "./Carusel.module.css";
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

  const setSettings = (type) => {
    switch (type) {
      case "hero":
        return {
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
        };
      case "gallery":
        return {
          infinite: true,
          lazyLoad: true,
          speed: 200,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: 0,
          dots: true,

          // nextArrow: <NextArrow />,
          // prevArrow: <PrevArrow />,
          beforeChange: (current, next) => setImageIndex(next),
        };
      case "team":
        return {
          lazyLoad: true,
          speed: 400,
          slidesToShow: 3,
          slidesToScroll: 1,

          dots: false,
          // autoplaySpeed: 3000,
          arrows: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        };

      default:
        return null;
    }
  };
  const settings = setSettings(type);

  {
    type === "gallery" && console.log(settings);
  }
  console.log(data);
  return (
    <div className={type === "hero" ? wrapperHero : wrapper}>
      <Slider {...settings}>
        {data.hero.edges.map(({ node }, idx) => (
          <div
            className={classNames({
              [slide]: type === "gallery",
              [activeSlide]: idx === imageIndex && type === "gallery",
            })}
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
