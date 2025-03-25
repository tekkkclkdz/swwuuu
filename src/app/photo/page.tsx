"use client";

import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Link from "next/link";

import pl2 from "./../../../public/public2/poland/P1-2_con.webp";
import all1 from "./../../../public/public2/gaps/GAPS1_con.webp";

const PageBody = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* Nawigacja */}
      <NavBar home={0} isSelected={2} />

      {/* Wersja mobilna */}
      <div className="flex flex-col w-full h-screen">
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