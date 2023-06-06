'use client';
import Banner from "@/components/Banner";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const BannerSwiper = () => {
  return (
    <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
      </Swiper>
  )
}

export default BannerSwiper