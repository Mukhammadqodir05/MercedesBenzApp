import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import bg1 from '/assets/bg1.jpg';
import bg2 from '/assets/bg2.jpg';
import bg3 from '/assets/bg3.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';

 const Home = () => {
  return (
    <main className='flex w-full h-screen items-center'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={bg1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bg3} alt="" /></SwiperSlide>
      </Swiper>
    </main>
  );
}


export default Home