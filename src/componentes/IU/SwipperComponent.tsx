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

export default function SwipperComponent({imagenes}: Props) {

    const [firstSwiper, setFirstSwiper] = useState(null);

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
            }}
            controller={{ control: firstSwiper }}
            speed={2000}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {imagenes.map((imagen, index) =>
                <SwiperSlide key={index}>
                    <div className={'h-screen w-full'}>
                        <img src={imagen}
                             alt={`Proyecto MMAJ ${index + 1}`}
                             className="h-full w-full object-cover"
                        />
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    );
}