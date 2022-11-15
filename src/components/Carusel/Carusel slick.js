import React, { useState } from "react";
import Slider from "react-slick";

import {
  arrow,
  prev,
  next,
  activeSlide,
  slide,
  slideTeam,
  wrapperHero,
  wrapperGallery,
  wrapperTeam,
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
      <div
        className={classNames({
          // arrow: type === "gallery",
          // prev: type === "gallery",
          arrow: type === "team",
          prev: type === "team",
        })}
        onClick={onClick}
      >
        <BsChevronCompactRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className={classNames({
          // arrow: type === "gallery",
          // prev: type === "gallery",
          arrow: type === "team",
          prev: type === "team",
        })}
        onClick={onClick}
      >
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
          className: "center",
          lazyLoad: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          // centerPadding: "60px",
          dots: true,
          arrows: true,
          focusOnSelect: true,
          style: { paddingTop: "80px", paddingBottom: "400px" },
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
          arrows: true,
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
    <div
      className={classNames({
        [wrapperHero]: type === "hero",
        [wrapperGallery]: type === "about",
        [wrapperTeam]: type === "team",
      })}
    >
      <Slider {...settings}>
        {data.hero.edges.map(({ node }, idx) => (
          <div
            className={classNames({
              [slide]: type === "gallery",
              [slideTeam]: type === "team",
              [activeSlide]: idx === imageIndex && type === "gallery",
            })}
            key={node.name}
          >
            <GatsbyImage
              className=""
              image={node.childImageSharp.gatsbyImageData}
              alt={node.name}
              // objectFit="cover"
              // objectPosition="50% 50%"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
