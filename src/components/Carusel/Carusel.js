import React, { useState } from "react";

import { Navigation, Pagination, Scrollbar, Lazy, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/lazy";
import "swiper/css/autoplay";

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
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Lazy, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {/* {data.hero.edges.map(({ node }, idx) => (
          <SwiperSlide key={node.name}>
            <GatsbyImage
              image={node.childImageSharp.gatsbyImageData}
              alt={node.name}
              // objectFit="cover"
              // objectPosition="50% 50%"
            />
          </SwiperSlide>
        ))} */}
        <SwiperSlide>
          <div
            style={{ width: "60px", height: "60px", backgroundColor: "red" }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ width: "60px", height: "60px", backgroundColor: "green" }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
