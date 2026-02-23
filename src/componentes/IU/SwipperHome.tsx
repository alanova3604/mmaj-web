// Import Swiper React components
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper/modules";
import {useState} from "react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

interface Props {
    imagenes: string[];
}

export default function SwipperHome({imagenes}: Props) {


    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={2}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            speed={2000}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {imagenes.map((imagen, index) =>
                <SwiperSlide key={index}>
                    <div className={'h-[400px]'}>
                        <img src={imagen}
                             alt={`Proyecto MMAJ ${index + 1}`}
                             className="object-cover w-full h-full"
                        />
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    );
}