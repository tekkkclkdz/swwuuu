"use client"
import Image from "next/image";
import React from "react";
import NavBar from "../../../src/app/components/NavBar";
import Masonry from "react-masonry-css";
import { useMediaQuery } from "react-responsive";
import {  useRef } from 'react';

import type { LightGallery } from 'lightgallery/lightgallery';
import LightGalleryComponent from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import pl1 from "./../../../public/public2/poland/P1-1_con.webp"
import pl2 from "./../../../public/public2/poland/P1-2_con.webp"
import pl3 from "./../../../public/public2/poland/P1-3_con.webp"
import pl4 from "./../../../public/public2/poland/P1-4_con.webp"
import pl5 from "./../../../public/public2/poland/P1-5_con.webp"
import pl6 from "./../../../public/public2/poland/P1-6_con.webp"
import pl7 from "./../../../public/public2/poland/P1-7_con.webp"
import pl8 from "./../../../public/public2/poland/P1-8_con.webp"
import pl9 from "./../../../public/public2/poland/P1-09_con.webp"
import pl10 from "./../../../public/public2/poland/P1-10_con.webp"
import pl11 from "./../../../public/public2/poland/P1-11_con.webp"
import pl12 from "./../../../public/public2/poland/P1-12_con.webp"


const pictures = [pl1, pl2, pl3, pl4, pl5, pl6, pl7, pl8, pl9,pl10];

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const breakpointCols = isMobile ? 1 : 2;

  const lightboxRef = useRef<LightGallery | null>(null)

  // document.addEventListener("contextmenu", function (e) {
  //   e.preventDefault();
  // });

  return (
    <div className="absolute w-full h-full left-0 top-0" suppressHydrationWarning={true}>
      <NavBar />
      <Masonry className="flex gap-2 bg-white" columnClassName="" breakpointCols={breakpointCols}>
              {pictures.map((pics, idx) => (
              <Image
                  key={pics.src}
                  src={pics}
                  alt="placeholder"
                  className="static transition duration-150 hover:opacity-70 cursor-pointer my-2 "
                  placeholder="blur" 
                  onClick={() => {
                  lightboxRef.current?.openGallery(idx);
                  }}
              />
              ))}   
          </Masonry>

          <LightGalleryComponent
      onInit={(ref) => {
          if (ref) {
              lightboxRef.current = ref.instance
          }
      }}
      speed={500}
      plugins={[]}
      dynamic
      download={false}
      dynamicEl={pictures.map((allImg) => ({
          src: allImg.src,
      }))}
  />
    </div>
  );
}

