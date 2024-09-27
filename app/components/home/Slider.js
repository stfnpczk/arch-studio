import { slides } from "@/app/data/data";

import ResponsiveNextImage from "@/app/utils/ResponsiveNextImage";
import CtaLink from "../shared/CtaLink";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";

import "swiper/css";

export default function Slider() {
  const pagination = {
    el: ".custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="relative">
      <Swiper
        className="relative"
        pagination={pagination}
        modules={[Autoplay, Pagination, Keyboard]}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex h-[35rem] w-auto flex-col px-8 pt-28 md:h-[45rem] md:px-14 md:py-44 xl:px-48">
              <h1 className="z-10 max-w-[19.4375rem] text-wrap text-5xl/12 font-bold tracking-[0.075rem] text-white md:max-w-[28.5625rem] md:text-8xl/20 lg:max-w-[34rem]">
                {slide.heading}
              </h1>

              <p className="z-10 mb-[5.1875rem] mt-3 max-w-96 text-lg/6 text-white md:mb-16 md:max-w-[clamp(18.75rem,55vw,37.5rem)] xl:mb-10 xl:max-w-[27.8125rem]">
                {slide.paragraph}
              </p>
              <ResponsiveNextImage
                className="z-0"
                mobileImgSrc={slide.mobileImgSrc}
                tabletImgSrc={slide.tabletImgSrc}
                desktopImgSrc={slide.desktopImgSrc}
                alt={`Image of ${slide.heading}`}
              />
              <span className="absolute left-0 top-0 h-full w-full bg-greyLayer"></span>

              <CtaLink
                text="See Our Portfolio"
                link="/portfolio"
                width="w-[fit-content]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination"></div>
    </div>
  );
}
