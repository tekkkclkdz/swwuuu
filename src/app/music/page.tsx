import React from 'react';
import AudioPlayer from '../components/AudioPlayer';
import NavBar from '../components/NavBar';
import Image from 'next/image';

import pic1 from "../../../public/B8.webp"

const Home: React.FC = () => {
  return (
    <div>
      <div className='relative'>
                <div className=''>
                    <AudioPlayer />
                </div>
                
                <div className='absolute top-1/4 ml-40 w-96 h-1/2 text-black '>
                    <Image src={pic1} alt="pcc" className='' />
                </div>
            </div>
      <NavBar home={0} isSelected={3}/>
    </div>
  );
};

export default Home;