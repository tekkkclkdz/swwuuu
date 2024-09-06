import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';

import GIF1 from "../../../public/StepWebPolangGif-ezgif.com-optimize (1).gif";
import PIC1 from "../../../public/long2/podfilm.png"

import video from "../../../public/AV1-ezgif.com-optimize.gif"

const Page = () => {
  return (
    <div className='relative bg-black'>
      {/* Section 1 */}
      <div className='h-screen relative'>
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
          <div className='flex-grow flex justify-center items-center'>
            <div className='h-3/4 w-3/4'>
              <Image src={GIF1} alt="smm" className='object-contain h-full w-full' />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Duplicate */}
      <div className='h-screen relative'>
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
          <div className='flex-grow flex justify-center items-center'>
            <div className='h-3/4 w-3/4'>
              <Image src={video} alt="smm" className='object-contain h-full w-full' />
            </div>
          </div>

          {/* Navigation (optional, if needed for both sections) */}
          <NavBar home={0} isSelected={2} />
        </div>
      </div>
    </div>
  );
}

export default Page;