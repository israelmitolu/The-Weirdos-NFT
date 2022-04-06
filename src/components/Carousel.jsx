import React from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";

import img1 from "../assets/Nfts/bighead.svg";
import img2 from "../assets/Nfts/bighead-1.svg";
import img3 from "../assets/Nfts/bighead-2.svg";
import img4 from "../assets/Nfts/bighead-3.svg";
import img5 from "../assets/Nfts/bighead-4.svg";
import img6 from "../assets/Nfts/bighead-5.svg";
import img7 from "../assets/Nfts/bighead-6.svg";
import img8 from "../assets/Nfts/bighead-7.svg";
import img9 from "../assets/Nfts/bighead-8.svg";
import img10 from "../assets/Nfts/bighead-9.svg";

import Arrow from "../assets/Arrow.svg";

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="The Weirdos" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  .swiper {
    height: 100%;
    width: 100%;

    &-slide {
      background-color: ${(props) => props.theme.carouselColor};
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-button-next {
      width: 4rem;
      right: 0;
      top: 60%;
      color: ${(props) => props.theme.text};
      background-image: url(${Arrow});
      background-position: center;
      background-size: cover;

      &::after {
        display: none;
      }
    }

    &-button-prev {
      width: 4rem;
      left: 0;
      top: 60%;
      color: ${(props) => props.theme.text};
      transform: rotate(180deg);
      background-image: url(${Arrow});
      background-position: center;
      background-size: cover;

      &::after {
        display: none;
      }
    }
  }
`;

export default Carousel;
