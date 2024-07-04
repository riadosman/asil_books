"use client";
import React, { useState } from "react";
import Image from "next/image";

const images = [
  "/images/slider/1.webp",
  "/images/slider/3.webp",
  "/images/slider/4.webp",
  "/images/slider/5.webp",
  "/images/slider/6.webp",
  "/images/slider/7.webp",
  "/images/slider/8.jpg",
  "/images/slider/9.jpg",
  "/images/slider/10.jpg",
  "/images/slider/11.jpg",
  "/images/slider/12.jpg",
  "/images/slider/13.jpg",
  "/images/slider/14.jpg",
  "/images/slider/15.jpg",
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative flex justify-center items-center h-[100vh] overflow-hidden my-4">
      {images.map((image, index) => (
        <div
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-5000 ease-custom-ease ${
            index === current ? "translate-x-0 z-20" : "translate-x-full z-10"
          }`}
          key={index}
        >
          <Image
            src={image}
            alt={`Slide ${index}`}
            width={2000}
            height={2000}
            className="h-full relative w-[100%] -top-12 rounded-md"
          />
        </div>
      ))}

      <button
        className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 bg-main h-10 w-10 flex items-center justify-center rounded-full text-white"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 bg-main h-10 w-10 flex items-center justify-center rounded-full text-white"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
