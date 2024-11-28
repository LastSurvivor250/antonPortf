"use client";

import TestimonialCard from "./TestimonialCard";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import React, { useState } from "react";

const testimonials = [
  {
    name: "Antonio Rogers",
    work: "Vercel",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an",
  },
  {
    name: "Antonio Rogers",
    work: "Vercel",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an",
  },
  {
    name: "Antonio Rogers",
    work: "Vercel",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an",
  },
  {
    name: "Antonio Rogers",
    work: "Vercel",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an",
  },
  {
    name: "Antonio Rogers",
    work: "Vercel",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an",
  },
];

const Testimonial = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the visibility state
  };
  return (
    <div id="testimonials" className="w-full h-fit pb-30 relative bg-black">
      <div className="max-w-[1400px] w-[91%] mx-auto">
        <div className="flex justify-center">
          <button
            onClick={toggleVisibility}
            className="bg-purple-500 px-2 text-xl font-extrabold border uppercase rounded-md mb-5"
          >
            {isVisible ? "Hide Testimonials" : "Testimonials"}
          </button>
        </div>
        {isVisible && (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            speed={500}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full bg-white"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}{" "}
      </div>
    </div>
  );
};

export default Testimonial;
