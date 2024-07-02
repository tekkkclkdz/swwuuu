import React from 'react';
import Image from 'next/image';
import pic2 from '../../../public/pic2.webp';

const Bio = () => {
  return (
    <div className='relative w-full h-64'>
      <Image src={pic2} alt="pic2" layout="fill" objectFit="cover" />
      <p className='text-clip absolute top-0 ml-8 mr-8 mt-8 left-0 text-justify sm:text-2xl text-sm  lg:w-1/2 '>
      Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer common the appear ham beauty her had. Or belonging zealously existence as by resources.
      </p>
    </div>
  );
}

export default Bio;