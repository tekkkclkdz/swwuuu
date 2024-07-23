import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import picL1 from "../../../public/longBody/row-1-column-1.webp"
import picL2 from "../../../public/longBody/row-2-column-1.webp"
import picL3 from "../../../public/longBody/row-3-column-1.webp"
import picL4 from "../../../public/longBody/row-4-column-1.webp"
import picL5 from "../../../public/longBody/row-5-column-1.webp"
import picL6 from "../../../public/longBody/row-6-column-1.webp"
import picL7 from "../../../public/longBody/row-7-column-1.webp"

import L1 from "../../../public/long_best/top1-ezgif.com-png-to-webp-converter.webp"
import L2 from "../../../public/long_best/L2_edit2-ezgif.com-optiwebp.webp"
import L3 from "../../../public/long2/SWU21-copy_3_3412x4799.jpg"
import L4 from "../../../public/long2/SWU21-copy_4_3412x4799.jpg"
import L5 from "../../../public/long_best/SWU21-copy_5_3412x4799-ezgif.com-optiwebp.webp"
import L6 from "../../../public/long2/SWU21-copy_6_3412x4799.jpg"
import LV from "../../../public/long_best/podfilm-ezgif.com-png-to-webp-converter.webp"

import T1 from "../../../public/long_best/edit_short-ezgif.com-png-to-webp-converter.webp"
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
            <div className='bg-black'>
                <div className='relative'>
                    <Image src={T1} alt="m1" layout="responsive" className='' />
                </div>
            
                <div className='relative'>
                    <Image src={L5} alt="m1" layout="responsive" className='' />
                </div>
                
                <div className='relative'>
                    <Image src={L1} alt="pic6" layout="" className=''/>
                    <div className='absolute inset-0 flex justify-center items-center'>
                        <div className='w-3/4 mt-2'>
                            <Link href="/photo">
                                <Image src={pic1} alt="m1" layout="responsive" className="cursor-pointer"/>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className='relative'>
                    <Image src={L2} alt="m1" layout="responsive" />
                </div>
                
                <div className='relative'>
                    <Image src={LV} alt="pic8" layout="responsive" className='rotate-180'/>
                    <div className='absolute inset-0 flex justify-center items-center'>
                        <div className='absolute inset-0 flex justify-center items-center'>
                            <div className='w-3/4'>
                                <Link href="/video">
                                    <Image src={GIF1} alt="m1" layout="responsive" className="cursor-pointer"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='relative'>
                    <Image src={END} alt="m1" layout="responsive" className='rotate-180'/>
                </div>
                
                <div className='relative'>
                    <div className=''>
                        <AudioPlayer />
                    </div>
                    <div className='absolute top-20 sm:top-1/4 ml-12 sm:ml-40 sm:w-96 w-60 sm:h-1/2 text-black '>
                        <Image src={pic5} alt="pcc" className='' />
                    </div>
                </div> 
            </div>
        </>
    )
}

export default PageBody