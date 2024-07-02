import React from 'react'
import Image from 'next/image'

import picL1 from "../../../public/longBody/row-1-column-1.webp"
import picL2 from "../../../public/longBody/row-2-column-1.webp"
import picL3 from "../../../public/longBody/row-3-column-1.webp"
import picL4 from "../../../public/longBody/row-4-column-1.webp"
import picL5 from "../../../public/longBody/row-5-column-1.webp"
import picL6 from "../../../public/longBody/row-6-column-1.webp"
import picL7 from "../../../public/longBody/row-7-column-1.webp"

import pic1 from "./../../../public/B1.webp"
import pic2 from "./../../../public/B2.webp"
import pic3 from "./../../../public/B3.webp"
import pic4 from "./../../../public/B4.webp"
import pic5 from "./../../../public/B5.webp"
import pic6 from "./../../../public/B6.webp"
import pic7 from "./../../../public/B7.webp"
import pic8 from "./../../../public/B8.webp"
import picM1 from "./../../../public/MAXWEBJPG4.webp"
import GIF1 from "./../../../public/StepWebPolangGif-ezgif.com-optimize.gif"

import SNG1 from "./../../../public/audio/64.mp3"
import AudioPlayer from './AudioPlayer'



const PageBody = () => {
    return (
        <>
            <div className='relative'>
                <Image src={picL1} alt="pic6" layout="responsive" />
                <p className='text-clip mix-blend-difference absolute top-0 ml-8 mr-16 mt-24 left-0 text-justify sm:text-2xl text-sm  lg:w-1/2 '>
      Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer common the appear ham beauty her had. Or belonging zealously existence as by resources.
      </p>
            </div>
            <div className='relative'>
                <Image src={picL2} alt="m1" layout="responsive" />
                <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='w-1/2'>
                        <Image src={pic1} alt="m1" layout="responsive" />
                    </div>
                </div>
            </div>
            <div className='relative'>
                <Image src={picL3} alt="pic8" layout="responsive" />
                <div className='absolute inset-0 flex justify-center items-center'>
                <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='w-3/4'>
                        <Image src={GIF1} alt="m1" layout="responsive" />
                    </div>
                </div>
                </div>
            </div>
            <div className='relative '>
                <Image src={pic6} alt="pic8" layout="responsive" />
                <div className='absolute inset-0 flex justify-center items-center'>
                <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='w-3/4'>
                        <Image src={picM1} alt="m1" layout="responsive" />
                    </div>
                </div>
                </div>
            </div>
            <div className='relative '>
                {/* <Image src={picL6} alt="pic8" layout="responsive" /> */}
     
                
                        <AudioPlayer />
               
          
            </div>
        </>
    )
}

export default PageBody