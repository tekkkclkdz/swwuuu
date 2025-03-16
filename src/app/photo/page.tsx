"use client";

import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Link from "next/link";

// Importy grafik
import background1 from "../../../public/ContentTlo1.jpg";
import strip1 from "../../../public/B7.webp";

import pl1 from "./../../../public/public2/poland/P1-1_con.webp";
import pl2 from "./../../../public/public2/poland/P1-2_con.webp";
import pl3 from "./../../../public/public2/poland/P1-3_con.webp";
import pl4 from "./../../../public/public2/poland/P1-4_con.webp";
import pl5 from "./../../../public/public2/poland/P1-5_con.webp";
import pl6 from "./../../../public/public2/poland/P1-6_con.webp";
import pl7 from "./../../../public/public2/poland/P1-7_con.webp";
import pl8 from "./../../../public/public2/poland/P1-8_con.webp";
import pl9 from "./../../../public/public2/poland/P1-09_con.webp";
import pl10 from "./../../../public/public2/poland/P1-10_con.webp";

import all1 from "./../../../public/public2/gaps/GAPS1_con.webp";
import all2 from "./../../../public/public2/gaps/GAPS2_con.webp";
import all3 from "./../../../public/public2/gaps/GAPS3_con.webp";
import all4 from "./../../../public/public2/gaps/GAPS4_con.webp";
import all5 from "./../../../public/public2/gaps/GAPS5_con.webp";
import all6 from "./../../../public/public2/gaps/GAPS6_con.webp";
import all7 from "./../../../public/public2/gaps/GAPS7_con.webp";
import all8 from "./../../../public/public2/gaps/GAPS8_con.webp";

const images = [pl1, pl2, pl3, pl4, pl5, pl6, pl7, pl8, pl9, pl10];
const images2 = [all1, all2, all3, all4, all5, all6, all7, all8];

const PageBody = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* Tło strony */}
      <div className="absolute inset-0 -z-10">
        <Image src={background1} alt="Background" layout="fill" objectFit="cover" />
      </div>

      {/* Nawigacja */}
      <NavBar home={0} isSelected={2} />

      {/* Wersja desktopowa */}
      <div className="hidden md:block">
        <div className="flex flex-col items-center w-full min-h-screen">
          {/* Pierwszy pasek */}
          <Link href="/poland" legacyBehavior>
            <div className="relative w-[80%] h-[125px] flex justify-center items-center mt-10 overflow-hidden cursor-pointer">
              <Image src={pl2} alt="Strip1" layout="fill" objectFit="cover" />
              <p className="absolute left-0 ml-10 text-white text-2xl font-bold">POLAND</p>
            </div>
          </Link>

          {/* Zdjęcia - zawsze 10 w rzędzie */}
          <div className="w-[80%] mx-auto grid grid-cols-10 gap-2 py-4 justify-center items-center">
            {images.map((img, index) => (
              <div key={index} className="w-full">
                <Image src={img} alt={`pic${index + 1}`} layout="responsive" width={100} height={120} />
              </div>
            ))}
          </div>

          {/* Drugi pasek */}
          <Link href="/all" legacyBehavior>
            <div className="relative w-[80%] h-[125px] flex justify-center items-center mt-10 overflow-hidden cursor-pointer">
              <Image src={all1} alt="Strip1" layout="fill" objectFit="cover" />
              <p className="absolute left-0 ml-10 text-white text-2xl font-bold">ALL FOTOS</p>
            </div>
          </Link>

          {/* Galeria - 8 zdjęć w rzędzie */}
          <div className="w-4/5 mx-auto flex justify-between mt-4">
            {images2.map((src, index) => (
              <div key={index} className="flex-shrink-0">
                <Image src={src} alt={`Obraz ${index + 1}`} className="h-[150px] w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wersja mobilna */}
      <div className="flex flex-col w-full h-screen md:hidden">
        {/* POLAND - górna połowa ekranu */}
        <Link href="/poland" className="relative group w-full h-1/2">
          <div className="relative w-full h-full overflow-hidden cursor-pointer">
            <Image src={pl2} alt="Poland" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <p className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">POLAND</p>
          </div>
        </Link>

        {/* ALL FOTOS - dolna połowa ekranu */}
        <Link href="/all" className="relative group w-full h-1/2">
          <div className="relative w-full h-full overflow-hidden cursor-pointer">
            <Image src={all1} alt="All Fotos" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <p className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">ALL FOTOS</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PageBody;