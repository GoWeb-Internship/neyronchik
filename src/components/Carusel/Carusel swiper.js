import React, { useState } from "react";

import { Navigation, Pagination, Scrollbar, Lazy, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

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

  return (
    <div>
      <Swiper className="w-full">
        {data.hero.edges.map(({ node }, idx) => (
          <SwiperSlide key={node.name}>
            <GatsbyImage
              image={node.childImageSharp.gatsbyImageData}
              alt={node.name}
              // objectFit="cover"
              // objectPosition="50% 50%"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
