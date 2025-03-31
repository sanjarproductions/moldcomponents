import React from 'react'
import "./MainSlider.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Slide1 from "../../assets/main-slider/slide-1.svg"
import Slide2 from "../../assets/main-slider/slide-2.svg"

const MainSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                className="main-swiper"
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}>
                <SwiperSlide>
                    {/* Slide 1  */}
                    <img src={Slide1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    {/* Slide 2  */}
                    <img src={Slide2} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default MainSlider
