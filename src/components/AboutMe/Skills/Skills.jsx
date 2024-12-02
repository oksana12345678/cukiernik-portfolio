import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  ArrowIconNext,
  ButtonNext,
  ContainerSliderItem,
  SwiperSlideItem,
  SwiperWrapper,
} from "./Skills.styled";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const swiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const SKILLS = [
    "Kreatywność",
    "Estetyka",
    "Znajomość technik cukierniczych",
    "Zdolności kulinarno-techniczne",
    "Precyzyjność i dbałość o szczegóły",
    "Zmysł smaku i zapachu",
    "Zarządzanie czasem",
    "Praca zespołowa",
    "Temperowanie czekolady",
    "Dekorowanie ciast i tortów",
    "Glassage",
    "Velure",
  ];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("realIndexChange", () => {
        setActiveIndex(swiperRef.current.realIndex);
      });
    }
  }, []);

  return (
    <SwiperWrapper>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1440: { slidesPerView: 6 },
        }}
      >
        {SKILLS.map((skill, index) => (
          <SwiperSlide key={index}>
            <ContainerSliderItem $isHighlighted={index === activeIndex}>
              <SwiperSlideItem>{skill}</SwiperSlideItem>
            </ContainerSliderItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonNext onClick={() => swiperRef.current?.slideNext()}>
        <ArrowIconNext />
      </ButtonNext>
    </SwiperWrapper>
  );
};

export default Skills;
