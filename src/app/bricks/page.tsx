import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import pic1 from "../../../public/new_photo/SWU12_1.webp";  // Example image for "polska1"
import pic2 from "../../../public/new_photo/SWU14-5.webp"; // Example image for "all photos"

import NavBar from '../components/NavBar';

const AlbumsPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4 mt-10">
        {/* Tile for "polska1" */}
        <Link href="/photo">
          <div className="relative group cursor-pointer w-64 h-64 sm:w-80 sm:h-80">
            <Image
              src={pic1}
              alt="polska1"
              className="transition duration-300 ease-in-out transform group-hover:scale-105 object-cover"
              layout="fill"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-bold">polska1</span>
            </div>
          </div>
        </Link>

        {/* Tile for "all photos" */}
        <Link href="/all-photos">
          <div className="relative group cursor-pointer w-64 h-64 sm:w-80 sm:h-80">
            <Image
              src={pic2}
              alt="all photos"
              className="transition duration-300 ease-in-out transform group-hover:scale-105 object-cover"
              layout="fill"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-bold">all photos</span>
            </div>
          </div>
        </Link>
      </div>
      <NavBar home={0} isSelected={2} />
    </div>
  );
};

export default AlbumsPage;