"use client";
import Banner from "@/components/Banner";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ContentWrapper from "@/components/ContentWrapper";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const handleServices = ()=>{
    router.push('/services')
  }
  return (
    <div>
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

      <Section />

      <ContentWrapper>
        <h6 className="text-black text-lg font-medium uppercase tracking-wide">
          WHAT WE OFFER
        </h6>
        <h1 className="text-blue font-bold text-4xl mb-4">
          Industry Leading Technologies
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Button type="outlined" onClick={handleServices}>view all services</Button>
      </ContentWrapper>
    </div>
  );
}
