import React from 'react'
import Image from 'next/image'

import picL1 from "../../../public/longBody/row-1-column-1.webp"
import picL2 from "../../../public/longBody/row-2-column-1.webp"
import picL3 from "../../../public/longBody/row-3-column-1.webp"
import picL4 from "../../../public/longBody/row-4-column-1.webp"
import picL5 from "../../../public/longBody/row-5-column-1.webp"
import picL6 from "../../../public/longBody/row-6-column-1.webp"
import picL7 from "../../../public/longBody/row-7-column-1.webp"

import L1 from "../../../public/long2/top1.png"
import L2 from "../../../public/long2/L2_edit2.png"
import L3 from "../../../public/long2/SWU21-copy_3_3412x4799.jpg"
import L4 from "../../../public/long2/SWU21-copy_4_3412x4799.jpg"
import L5 from "../../../public/long2/SWU21-copy_5_3412x4799.png"
import L6 from "../../../public/long2/SWU21-copy_6_3412x4799.jpg"
import LV from "../../../public/long2/podfilm.png"

import T1 from "../../../public/long2/edit_short.png"
import T2 from "../../../public/long2/Screenshot 2024-07-04 at 20.10.22.png"

import pic1 from "./../../../public/B1.webp"
import pic2 from "./../../../public/B2.webp"
import pic3 from "./../../../public/B3.webp"
import pic4 from "./../../../public/B4.webp"
import pic5 from "./../../../public/B5.webp"
import pic6 from "./../../../public/B6.webp"
import pic7 from "./../../../public/B7.webp"
import pic8 from "./../../../public/B8.webp"
import picM1 from "./../../../public/MAXWEBJPG4.webp"
import GIF1 from "./../../../public/StepWebPolangGif-ezgif.com-optimize (1).gif"

import END from "./../../../public/long2/end_short.png"

import SNG1 from "./../../../public/audio/64.mp3"
import AudioPlayer from './AudioPlayer'



const PageBody = () => {
    return (
        <>
            
            <div className='relative'>
                <Image src={T1} alt="m1" layout="responsive" className='' />
                {/* <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='w-1/2'>
                        <Image src={pic1} alt="m1" layout="responsive" />
                    </div>
                </div> */}
            </div>
            
            <div className='relative'>
                <Image src={L5} alt="m1" layout="responsive" className='' />
                {/* <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='w-1/2'>
                        <Image src={pic1} alt="m1" layout="responsive" />
                    </div>
                </div> */}
            </div>
            <div className='relative'> 
                <Image src={L1} alt="pic6" layout="" className=''/>
                {/* <p className='text-clip mix-blend-difference absolute top-0 ml-8 mr-16 mt-24 left-0 text-justify sm:text-2xl text-sm  lg:w-1/2 '>
                    Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer common the appear ham beauty her had. Or belonging zealously existence as by resources.
                </p> */}
                <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='w-3/4 mt-2'>
                        <Image src={pic1} alt="m1" layout="responsive" />
                    </div>
                </div>
            </div>
            <div className='relative'>
                <Image src={L2} alt="m1" layout="responsive" />
                {/* <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='w-1/2'>
                        <Image src={pic1} alt="m1" layout="responsive" />
                    </div>
                </div> */}
            </div>
            <div className='relative'>
                <Image src={LV} alt="pic8" layout="responsive" className='rotate-180'/>
                <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='absolute inset-0 flex justify-center items-center'>
                        <div className='w-3/4'>
                            <Image src={GIF1} alt="m1" layout="responsive" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <Image src={END} alt="m1" layout="responsive" className='rotate-180'/>
            </div>
            {/* <div className='relative '>
                <Image src={L4} alt="pic8" layout="responsive" />
                <div className='absolute inset-0 flex justify-center items-center'>

                    <div className='w-3/4'>
                        <Image src={picM1} alt="m1" layout="responsive" />
                    </div>

                </div>
            </div> */}
            {/* <div className='relative'>
                <div className=''>
                    <AudioPlayer />
                </div>
                
                <div className='absolute top-1/4 ml-40 w-96 h-1/2 text-black '>
                    <Image src={pic5} alt="pcc" className='' />
                </div>
            </div> */}
            
        </>
    )
}

export default PageBody

//