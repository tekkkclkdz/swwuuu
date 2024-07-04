import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';

import GIF1 from "../../../public/StepWebPolangGif-ezgif.com-optimize (1).gif";
import PIC1 from "../../../public/003221040027.webp"

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

        {/* Centered Image */}
       
        
        {/* Navigation */}
        <NavBar home={0} isSelected={4} />

    </div>
  );
}

export default Page;