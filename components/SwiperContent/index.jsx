"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Index = () => {
  const content = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
  ];

  return (
    <Swiper
      spaceBetween={50}
      pagination={true}
      modules={[Pagination]}
      breakpoints={{
        450: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {content.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='swiper__img'>
            <img src={item} alt='img' />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Index;
