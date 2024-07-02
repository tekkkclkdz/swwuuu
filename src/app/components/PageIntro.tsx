import React from 'react'
import Image from '../../../node_modules/next/image'
import pic1 from "../../../public/Intro.webp"
import NavBar from './NavBar'

const PageIntro = () => {
  return (
    <div className='relative w-screen h-[calc(100svh)] overflow-hidden'>
        <Image 
          src={pic1} 
          alt="intro" 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center"
        />
        <NavBar home={1} isSelected={0}/>
    </div>
  )
}

export default PageIntro