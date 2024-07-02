"use client"
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image'; // Zakładając, że używasz Next.js

import pic1 from "./../../../public/B1.webp";
import pic2 from "./../../../public/B2.webp";
import pic3 from "./../../../public/B3.webp";
import pic4 from "./../../../public/B4.webp";
import pic5 from "./../../../public/B5.webp";
import pic6 from "./../../../public/B6.webp";
import pic7 from "./../../../public/B7.webp";
import pic8 from "./../../../public/B8.webp";

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
    <div className="absolute grid grid-flow-row top-0 mt-8 left-0 right-0 text-center text-2xl ">
        <label className="text-black ">album white n black pics</label>
        <label className="text-black text-sm  md:hidden">swipe right</label>

      </div>
    <div className="relative embla mx-auto ">
      <div className="embla__viewport embla__parallax embla__parallax__layer" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((image, index) => (
            <div className="embla__slide flex justify-center items-center" key={index}>
              <div className="relative w-full sm:min-h-full h-[600px] flex justify-center items-center">
                <Image 
                  src={image} 
                  alt={`Slide ${index + 1}`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute hidden inset-y-0 px-20 left-0 sm:flex items-center">
        <button
          className="text-black text-2xl"
          onClick={scrollPrev}
        >
          prev
        </button>
      </div>
      <div className="absolute hidden inset-y-0 px-20 right-0 sm:flex items-center">
        <button
          className="text-black text-2xl"
          onClick={scrollNext}
        >
          next
        </button>
      </div>
    </div>
    </>
    
  );
}