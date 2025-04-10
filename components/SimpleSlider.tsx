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

// Define the props for the SimpleSlider component
interface SimpleSliderProps {
  items: SliderItem[];
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({ items }) => {
  return (
    <div className="relative w-full">
      {/* Container with max-width */}
      <Swiper
        // Install modules
        modules={[Navigation, Pagination]}
        spaceBetween={20} // Space between slides
        slidesPerView={3} // Default: Show 1 slide on small screens
        navigation // Enable navigation buttons
        pagination={{ clickable: true }} // Enable pagination dots
        loop={true} // Enable continuous loop mode
        breakpoints={{
          // when window width is >= 640px (sm)
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 1024px (lg)
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="pb-10 flex justify-center items-center"
          >
            {/* Add padding-bottom for pagination */}
            <div className="border border-blue-600 p-6 gap-3 rounded-lg shadow-md h-48 flex flex-col items-center justify-between text-sm">
              {/* Simple card style */}
              <h2 className="text-lg text-center font-semibold text-white">
                {item.titleLine1}
              </h2>
              <div className="text-gray-400 text-center flex-grow">
                {item.description}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimpleSlider;
