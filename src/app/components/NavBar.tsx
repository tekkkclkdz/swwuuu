"use client";
import React, { useState, useEffect } from 'react';
import TabButton from './TabButton';
import Link from 'next/link';


// const NavBar = ({ stillOrMoving, intro }:{
//   stillOrMoving: number;
//   intro: number;
// }) => {
//   const stillStyle = stillOrMoving === 0 ? 'font-bold' : 'font-light';
//   const movingStyle = stillOrMoving === 1 ? 'font-bold' : 'font-light';


const NavBar = ({ home, isSelected }:{
  home: number;
  isSelected: number;
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

  const tabLabels = ["home", "photo", "model", "music", "video", ];

  return (
    <>
      {/* Vertical Captions Navbar */}
      {home === 1 && (
        <div
          className={`text-black text-right  text-3xl lg:text-4xl font-normal transition-opacity duration-800 ease-in-out absolute bottom-20 right-0 mr-16 grid gap-4 grid-rows-3 z-0 ${
            isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{ transition: 'opacity 0.4s ease-in-out' }}
        >
          <ul className='text-right'>Maximilien Antoine Gontard</ul>
          {/* <Link href="/contact" className='hover:underline text-right'>Contact</Link> */}
        </div>
      )}

      {/* Bottom Navbar */}
      <div
        className={`text-black  text-2xl lg:text-4xl font-normal transition-opacity duration-800 ease-in-out fixed bottom-0 left-0 w-full grid grid-cols-5 bg-white z-10 ${
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