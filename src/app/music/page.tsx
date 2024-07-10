import React from 'react';
import AudioPlayer from '../components/AudioPlayer';
import NavBar from '../components/NavBar';
import Image from 'next/image';

import pic1 from "../../../public/B8.webp"
import pic2 from "../../../public/B4.webp"

const Home: React.FC = () => {
  return (
    <div>
      <div className='relative'>
                <div className=''>
                    <AudioPlayer />
                </div>
                
                <div className='absolute top-20 sm:top-1/4 ml-12 sm:ml-40 sm:w-96 w-60 sm:h-1/2 text-black '>
                    <Image src={pic1} alt="pcc" className='' />
                </div>
            </div>
      <NavBar home={0} isSelected={3}/>
    </div>
      
  );
};

export default Home;