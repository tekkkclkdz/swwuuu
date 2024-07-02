import React from 'react'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import Link from 'next/link'



import pic1 from "./../../../public/model/MDL1.webp"
import pic2 from "./../../../public/model/MDL2.webp"
import pic3 from "./../../../public/model/MDL3.webp"
import pic4 from "./../../../public/model/MDL4.webp"
import pic5 from "./../../../public/model/MDL5.webp"

const page = () => {
  return (
    <>
    <div className='h-96 bg-white text-black text-2xl'>
      <div className='justify-center items-center  grid grid-flow-row gap-12'>
      <Link href="https://www.selective-mgmt.pl/men/max-gontard-583" className="hover:underline mt-10">selective mgmt</Link>
      <Link href="https://www.premium-models.com/maximilien" className="hover:underline mt-10">premium models</Link>
      </div>
    </div>
    <div className='flex justify-center items-center bg-white'>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <Image className="h-auto max-w-full " src={pic1} alt="" />
          </div>
          <div>
            <Image className="h-auto max-w-full " src={pic2} alt="" />
          </div>
          <div>
            <Image className="h-auto max-w-full " src={pic3} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image className="h-auto max-w-full " src={pic4} alt="" />
          </div>
          <div>
            <Image className="h-auto max-w-full " src={pic5} alt="" />
          </div>
          <div>
            <Image className="h-auto max-w-full " src={pic1} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image className="h-auto max-w-full " src={pic2} alt="" />
          </div>
          <div>
            <Image className="h-auto max-w-full " src={pic3} alt="" />
          </div>
          <div>
            <Image className="h-auto max-w-full " src={pic4} alt="" />
          </div>
        </div>
        <div className="grid gap-4 ">
          <div>
            <Image className="h-auto max-w-full " src={pic5} alt="" />
          </div>
          <div>
            <Image className="h-auto max-w-full " src={pic1} alt="" />
          </div>
          <div>
            <Image className="h-auto max-w-full " src={pic2} alt="" />
          </div>
        </div>
      </div>

      <NavBar isSelected={2} home={0} />
    </div>
    </>
    
  )
}

export default page