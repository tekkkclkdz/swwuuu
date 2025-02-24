"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import GIF1 from '../../../public/StepWebPolangGif-ezgif.com-optimize (1).gif';
import PIC1 from '../../../public/long2/podfilm.png';
import video from '../../../public/AV1-ezgif.com-optimize.gif';
import NavBar from '../components/NavBar';

const slides = [
  { type: 'image', src: GIF1, alt: 'GIF Slide' },
  { type: 'video', src: video, alt: 'Video Slide' },
];

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative bg-black h-screen">
      {/* Background Image */}
      <Image
        src={PIC1}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="h-full flex flex-col justify-center items-center relative z-10">
        {/* Slideshow */}
        <div className="relative w-3/4 h-3/4">
          {slides[currentSlide].type === 'image' && (
            <Image
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              layout="fill"
              objectFit="contain"
              className="transition-opacity duration-500"
            />
          )}
          {slides[currentSlide].type === 'video' && (
            <Image
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              layout="fill"
              objectFit="contain"
              className="transition-opacity duration-500"
            />
          )}
        </div>

        {/* Navigation Arrows Below Slideshow */}
        <div className="flex justify-between w-1/2 mt-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="text-white text-4xl p-2"
          >
            &#8592;
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="text-white text-4xl p-2"
          >
            &#8594;
          </button>
        </div>
      </div>
      <NavBar home={0} isSelected={4}/>
    </div>
  );
};

export default Page;