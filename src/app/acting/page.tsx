import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';

import GIF1 from "../../../public/StepWebPolangGif-ezgif.com-optimize (1).gif";
import PIC1 from "../../../public/long2/podfilm.png"

import video from "../../../public/WBWEBCUTV2-ezgif.com-video-to-gif-converter.gif"

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
        {/* Centered Image */}
        <div className='flex-grow flex justify-center items-center flex-col'>
          <div className='h-2/3 w-2/3'>
            <Image src={video} alt="smm" className='object-contain h-full w-full' />
          </div>

          {/* Centered Text directly under video */}
          <div className="text-center text-white w-full pt-2">
            <p className="text-lg">Short film, Warsaw Boy (2022)</p>
            <p className="text-lg">Directed by Natalia Naomi</p>
            <p className="text-lg">Contact for link</p>
          </div>
        </div>

        {/* Navigation */}
        <NavBar home={0} isSelected={2} />
      </div>
    </div>
  );
}

export default Page;