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
    <div className='h-3/4 bg-white text-black text-2xl'>
      <div className='justify-center items-center gap-y-0  grid grid-flow-row '>
      <Link href="https://www.selective-mgmt.pl/men/max-gontard-583" className="hover:underline mt-2 text-center text-3xl">selective mgmt</Link>
      <div className='grid grid-flow-row px-40 sm:px-0 sm:text-2xl text-lg'>
        <h1 className='font-light text-center'>mila@selective-mgmt.pl</h1>
        <h1 className='font-light text-center'>sylwia@selective-mgmt.pl </h1>
      </div>
      <Link href="https://www.premium-models.com/maximilien" className="hover:underline mt-2 text-center text-3xl">premium models</Link>
      <div className='grid grid-flow-row sm:grid-flow-row px-40 sm:text-2xl text-lg'>
        <h1 className='font-light text-center'>gaetan.flamanc@premium-models.com </h1>
        <h1 className='font-light text-center'>louis.labrosse@premium-models.com </h1>
        <h1 className='font-light text-center'>cloe.villax@premium-models.com  </h1>
      </div>
      <Link href="https://www.nextmanagement.com/madrid/madrid-men-new-faces/all/2406076/max-gontard#portfolio" className="hover:underline mt-2 text-center text-3xl">next management</Link>
      <div className='grid grid-flow-row sm:grid-flow-row px-40 sm:text-2xl text-lg'>
        <h1 className='font-light text-center'>mariateresam@nextmanagement.com </h1>
        <h1 className='font-light text-center'>camillab@nextmanagement.com  </h1>
        

      </div>
      <Link href="https://elitemodelmanagement.com/copenhagen/development/11395-max-gontard.web" className="hover:underline mt-2 text-center text-3xl">elite model management</Link>
      <h1 className='font-light text-center'>m.knudsen@elitemodel.dk   </h1>
      <Link href="https://www.models1.co.uk/men/newfaces/5212-maxymilian-gontard/" className="hover:underline mt-2 text-center text-3xl ">Models1</Link>
      <Link href="https://models.com/models/max-gontard" className="hover:underline mt-2 text-center mb-12 text-3xl">models.com</Link>
      </div>
    </div>
    <div className='flex justify-center items-center bg-white '>
      <Image src={pic2} alt="pic3" className='sm:w-1/4 w-1/2 mb-12 sm:mb-8'/>
 


      <NavBar isSelected={1} home={0} />
    </div>
    </>
    
  )
}

export default page