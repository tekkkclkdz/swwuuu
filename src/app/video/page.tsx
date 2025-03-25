"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import PIC1 from '../../../public/long2/podfilm.png';
import NavBar from '../components/NavBar';

const slides = [
  { type: 'iframe', src: 'https://player.vimeo.com/video/1066539301?h=82e66574d6' },
  { type: 'iframe', src: 'https://player.vimeo.com/video/1066539558?h=8605c19742' },
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
          <iframe
            src={slides[currentSlide].src}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className='object-contain h-full w-full'
          ></iframe>
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
      <NavBar home={0} isSelected={2}/>
    </div>
  );
};

export default Page;