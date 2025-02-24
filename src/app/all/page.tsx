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

import all1 from "./../../../public/public2/gaps/GAPS1_con.webp"
import all2 from "./../../../public/public2/gaps/GAPS2_con.webp"
import all3 from "./../../../public/public2/gaps/GAPS3_con.webp"
import all4 from "./../../../public/public2/gaps/GAPS4_con.webp"
import all5 from "./../../../public/public2/gaps/GAPS5_con.webp"
import all6 from "./../../../public/public2/gaps/GAPS6_con.webp"
import all7 from "./../../../public/public2/gaps/GAPS7_con.webp"
import all8 from "./../../../public/public2/gaps/GAPS8_con.webp"
import all9 from "./../../../public/public2/gaps/GAPS9_con.webp"
import all10 from "./../../../public/public2/gaps/GAPS10_con.webp"
import all11 from "./../../../public/public2/gaps/GAPS11_con.webp"
import all12 from "./../../../public/public2/gaps/GAPS12_con.webp"


const pictures = [all1, all2, all3, all4, all5, all6, all7, all8, all9, all10, all11, all12];

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

