import React from 'react'
import Image from 'next/image'

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



const PageBody = () => {
    return (
        <>
            <div className='relative'>
                <Image src={pic6} alt="pic6" layout="responsive" />
                <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='w-1/2'>
                        <Image src={picM1} alt="m1" layout="responsive" />
                    </div>
                </div>
            </div>
            <div className='relative'>
                <Image src={GIF1} alt="m1" layout="responsive" />
            </div>
            <div className='relative'>
                <Image src={pic8} alt="pic8" layout="responsive" />
                <div className='absolute inset-0 flex justify-center items-center'>
                    {/* <audio controls>
                        <source src={SNG1} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>  */}
                </div>
            </div>
        </>
    )
}

export default PageBody