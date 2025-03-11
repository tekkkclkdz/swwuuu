"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Masonry from "react-masonry-css";

import type { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

import pic1 from "../../../public/new_photo/SWU12_1.webp";
import pic2 from "../../../public/new_photo/SWU14-5.webp";
import pic3 from "../../../public/new_photo/SWU20-2.webp";
import pic4 from "../../../public/new_photo/SWU20-6.webp";
import pic5 from "../../../public/new_photo/SWU25-4.webp";
import pic6 from "../../../public/new_photo/SWU26.webp";
import pic7 from "../../../public/new_photo/SWU29-1-tiff.webp";
import pic8 from "../../../public/new_photo/SWU29-3-tiff.webp";
import pic9 from "../../../public/new_photo/SWU30-6.webp";
import pic10 from "../../../public/new_photo/SWU31-2.webp";

const pictures = [pic1, pic5, pic7, pic2, pic6, pic4, pic8, pic3, pic9, pic10];

const breakpointColumnsObj = {
  default: 5,
  1024: 4,
  768: 2,
};

export default function Home() {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Masonry Grid Wrapper */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-full sm:w-[50vw] mx-auto gap-4 px-4"
        columnClassName="flex flex-col gap-4"
      >
        {pictures.map((pics, idx) => (
          <div key={pics.src} className="my-2">
            <Image
              src={pics}
              alt="placeholder"
              className="transition duration-150 hover:opacity-70 cursor-pointer"
              placeholder="blur"
              onClick={() => {
                lightboxRef.current?.openGallery(idx);
              }}
              width={500} // Provide width and height for better performance
              height={200}
              layout="responsive"
            />
          </div>
        ))}
      </Masonry>

      {/* Lightbox */}
      <LightGalleryComponent
        onInit={(ref) => {
          if (ref) {
            lightboxRef.current = ref.instance;
          }
        }}
        speed={500}
        plugins={[]}
        dynamic
        download={false}
        dynamicEl={pictures.map((allImg) => ({
          src: allImg.src,
        }))}
        closable={true}
        hideBarsDelay={3000}
        mobileSettings={{
          controls: true,
          showCloseIcon: true,
          download: false,
        }}
      />
    </div>
  );
}