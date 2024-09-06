import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import PIC1 from "../../../public/003221040027.webp";

const Page = () => {
  return (
    <div className="relative bg-black h-screen">
      {/* Background Image */}
      <Image
        src={PIC1}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 z-0"
      />

      {/* Overlay Grid */}
      <div className="relative z-10 grid grid-cols-2 h-full">
        {/* Left Half */}
        <Link href="/bricks" className="relative group flex items-center justify-center cursor-pointer">
          {/* Darken effect and text on hover */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <span className="text-white text-4xl font-bold transition-opacity duration-300">
            PHOTO
          </span>
        </Link>

        {/* Right Half */}
        <Link href="/video" className="relative group flex items-center justify-center cursor-pointer">
          {/* Darken effect and text on hover */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <span className="text-white text-4xl font-bold transition-opacity duration-300">
            VIDEO
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <NavBar home={0} isSelected={2} />
    </div>
  );
};

export default Page;