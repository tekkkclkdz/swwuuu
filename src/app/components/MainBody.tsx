import React from 'react'

import pic1 from "../../../public/public2/MainPageTlo1.jpg"
import pic2 from "../../../public/public2/MainPageTlo2.jpg"
import pic3 from "../../../public/public2/MainPageTlo3.jpg"

import Image from 'next/image'

const MainBody = () => {
  return (
    <>
     
               

                <div className='relative'>
                    <Image src={pic1} alt="pic8" layout="responsive" className='' />
                    <div className='absolute inset-0 flex justify-center items-center'>
                        <div className='absolute inset-0 flex justify-center items-center'>
                            <div className='w-5/12'>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image src={pic2} alt="pic8" layout="responsive" className='' />
                    <div className='absolute inset-0 flex justify-center items-center'>
                        <div className='absolute inset-0 flex justify-center items-center'>
                            <div className='w-5/12'>
                               
                            </div>
                        </div>
                    </div>
                </div>
    </>
   
  )
}

export default MainBody