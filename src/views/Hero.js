import React from "react";
import { Grid } from "src/components";
import { HeroTextBlock } from "src/features/HeroTextBlock/HeroTextBlock";
import { Carusel } from "components/Carusel/Carusel";
// import Carusel from "nuka-carousel";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
export const Hero = () => {
  // const params = {
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "bullets",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   spaceBetween: 30,
  // };
  return (
    <section className="w-full" id="hero">
      <div className="container relative">
        {/* <Carusel
          slidesToShow={1}
          infinit={true}
          lazyLoad={true}
          spaceBetween={50}
          // spaceBetween={50}
          // slidesPerView={3}
          // onSlideChange={() => console.log("slide change")}
          // onCarusel={(swiper) => console.log(swiper)}
        >
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
        </Carusel> */}

        <Carusel type="hero" />
        <Grid section="hero">
          <HeroTextBlock />
          <div
            style={{
              padding: "40px",
            }}
          >
            <div
              id="image"
              style={{
                padding: "20px",
                width: "100%",
                height: "300px",
                backgroundColor: "yellow",
              }}
            ></div>
          </div>
        </Grid>
      </div>
    </section>
  );
};
