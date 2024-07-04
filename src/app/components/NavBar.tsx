"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NavBar = ({ home, isSelected }:{
  home: number
  isSelected: number
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const halfPageHeight = window.innerHeight / 2;
    setIsVisible(window.scrollY <= halfPageHeight);
  };

  useEffect(() => {
    if (home === 1) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [home]);

  const tabLabels = ["home", "photo", "model", "music", "video", "poetry"];

  return (
    <>
      {/* Vertical Captions Navbar */}
      {home === 1 && (
        <div
          className={`mix-blend-difference  text-center text-3xl lg:text-8xl font-normal transition-opacity duration-800 ease-in-out absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap z-50 ${
            isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } top-3/4 md:top-3/4 lg:top-3/4 sm:top-[60%]`}
        >
          Maximilien Antoine Gontard
        </div>
      )}

      {/* Bottom Navbar */}
      <div
        className={`text-black text-2xl lg:text-4xl z-50 font-normal transition-opacity duration-800 ease-in-out fixed bottom-0 left-0 w-full grid grid-cols-6 bg-white z-10 ${
          home === 1 ? (isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100') : 'opacity-100'
        }`}
        style={{ transition: 'opacity 0.4s ease-in-out' }}
      >
        {tabLabels.map((label, index) => (
          <Link href={`/${label === 'home' ? '' : label}`}
            key={index}
            className={`p-4 text-sm sm:text-4xl text-center ${isSelected === index ? 'underline' : ''} hover:underline`}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavBar;
