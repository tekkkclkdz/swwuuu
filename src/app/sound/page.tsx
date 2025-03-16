import React from 'react';
import AudioPlayer from '../components/Audio2';
import NavBar from '../components/NavBar';
import Image from 'next/image';

import rings from "../../../public/public2/Rings_con.webp";
import background from "./../../../public/ContentTlo2.jpg";

const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen relative">
      {/* Tło na większych ekranach */}
      <Image 
        src={background} 
        alt="Background Image" 
        layout="fill" 
        objectFit="cover" 
        className="absolute top-0 left-0 hidden sm:block"
      />

      {/* Czarne tło tylko na telefonach */}
      <div className="absolute top-0 left-0 w-full h-full bg-black block sm:hidden"></div>

      {/* Kontenery AudioPlayer z szarą linią pomiędzy */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex flex-col sm:w-3/4 w-full gap-2">
          <AudioPlayer title="Rings" image={rings} audioSrc="/sounds/Rings.mp3" />
          <div className="border-t border-gray-400"></div>
          <AudioPlayer title="Rings (Extended)" image={rings} audioSrc="/sounds/Rings(Extended).mp3" />
          <div className="border-t border-gray-400"></div>
          <AudioPlayer title="64" image={rings} audioSrc="/sounds/64.mp3" />
        </div>
      </div>

      {/* Nawigacja */}
      <NavBar home={0} isSelected={1} />
    </div>
  );
};

export default Home;