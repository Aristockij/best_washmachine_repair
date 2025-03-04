"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const index = () => {
  const content = [
    "/brands/1.png",
    "/brands/2.png",
    "/brands/3.png",
    "/brands/4.png",
    "/brands/5.png",
    "/brands/6.png",
    "/brands/7.png",
    "/brands/8.png",
    "/brands/9.png",
    "/brands/10.png",
    "/brands/11.png",
    "/brands/12.png",
    "/brands/13.png",
    "/brands/14.png",
    "/brands/15.png",
    "/brands/16.png",
    "/brands/17.png",
  ];

  return (
    <Swiper
      spaceBetween={50}
      pagination={true}
      autoHeight={false}
      height={100}
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
        <SwiperSlide key={index} className='swiper__brand__slide'>
          <a href='tel:+79992256089' className='swiper__brand__img'>
            <img src={item} alt='img' />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default index;
