import React from 'react';
import AudioPlayer from '../components/Audio2';
import NavBar from '../components/NavBar';
import Image from 'next/image';

import pic1 from "../../../public/B8.webp";
import pic2 from "../../../public/B4.webp";

import rings from "../../../public/public2/Rings_con.webp"

import background from "./../../../public/ContentTlo2.jpg"

const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen relative">
      {/* Tło */}
      <Image 
        src={background} 
        alt="Background Image" 
        layout="fill" 
        objectFit="cover" 
        className="absolute top-0 left-0"
      />

      {/* Kontenery AudioPlayer — bez przerw */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex flex-col w-3/4">
          <AudioPlayer title="curtesy/carnage" image={rings} audioSrc="/sounds/Curtesy.mp3" />
          <AudioPlayer title="Someday" image={rings} audioSrc="/sounds/Curtesy.mp3" />
          <AudioPlayer title="Hill Cave" image={pic2} audioSrc="/sounds/Curtesy.mp3" />
        </div>
      </div>

      {/* Nawigacja */}
      <NavBar home={0} isSelected={1} />
    </div>
  );
};

export default Home;