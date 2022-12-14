import {Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade, Parallax} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';
import img1 from '../img/bookPhoto.jpg'
import img2 from '../img/book1.jpg'

import '../style/Slider.css'
import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import React from "react";


const Slider = () => {

    const img = [img1,img2]
    return (
        <div className="Slider" key="Slider">
            <Swiper
                className="Swiper"
                modules={[Navigation, Pagination, Parallax, Scrollbar, Autoplay, EffectFade, A11y]}
                spaceBetween={50}
                parallax={true}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{clickable: true}}
            >
                {
                    img.map((item, index) =>
                        <SwiperSlide key = {Math.random()}  className="container">
                            <img src={item} width="70%" height="20%" alt=""/>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Slider;