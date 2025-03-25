import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';

import PIC1 from "../../../public/long2/podfilm.png";

const Page = () => {
  return (
    <div className='relative bg-black h-screen'>
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
      <div className='h-full flex flex-col relative z-10'>
        {/* Centered Video */}
        <div className='flex-grow flex justify-center items-center flex-col'>
          <div className='h-2/3 w-2/3'>
            <iframe
              src="https://player.vimeo.com/video/1066539949?h=aabd23ba92"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className='object-contain h-full w-full'
            ></iframe>
          </div>

          {/* Centered Text directly under video */}
          <div className="text-center text-white w-full pt-2">
            <p className="text-lg">Short film, Warsaw Boy (2022)</p>
            <p className="text-lg">Directed by Natalia Naomi</p>
            <p className="text-lg">Contact for link</p>
          </div>
        </div>

        {/* Navigation */}
        <NavBar home={0} isSelected={4} />
      </div>
    </div>
  );
}

export default Page;
