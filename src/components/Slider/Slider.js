// import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Slider from "react-slick";
import pic1 from "../../img/goldfinch.jpg";
import pic2 from "../../img/grasshopper.jpg";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const images = [pic1, pic2];

export const Slick = ({ flat = true }) => {
  const [imageIndex, setImageIndex] = useState(0);
  console.log(images);
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 400,
    slidesToShow: 1,
    centerPadding: 0,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      !flat && setImageIndex(next);
    },
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <BsChevronCompactRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <BsChevronCompactLeft />
      </div>
    );
  };

  return (
    <div className="h-[400px] w-full">
      <Slider {...settings}>
        <div>
          <StaticImage
            src="../../img/grasshopper.jpg"
            width={600}
            height={600}
            formats={["auto", "webp"]}
            alt="A Dog Image"
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
            quality={90}
          />
        </div>
      </Slider>
    </div>
  );
};
