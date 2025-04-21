"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

// Define the type for each slider item
interface SliderItem {
  id: string | number;
  titleLine1: string;
  description: React.ReactNode;
}

interface SimpleSliderProps {
  items: SliderItem[];
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({ items }) => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex !h-auto border border-blue-600 shadow-md"
          >
            <div className="p-8 gap-3 rounded-lg flex flex-col justify-start text-sm h-full">
              <h2 className="text-lg text-center font-semibold text-white">
                {item.titleLine1}
              </h2>
              <div className="text-gray-400 text-center flex items-center justify-center">
                <div className="text-center">{item.description}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimpleSlider;
