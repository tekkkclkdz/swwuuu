import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import Link from 'next/link';

import pic2 from './../../../public/model/MDL2.webp';

const page = () => {
  return (
    <>
      <div className='h-3/4 bg-white text-black text-2xl'>
        <div className='grid lg:grid-cols-2 items-center'>
          {/* Lewa strona: napisy */}
          <div className='flex flex-col justify-center items-center lg:items-start lg:px-16 px-4'>
            <Link href="https://www.selective-mgmt.pl/men/max-gontard-583" className="hover:underline mt-2 text-3xl text-center lg:text-left">selective</Link>
            <h1 className='font-light text-center lg:text-left'>mila@selective-mgmt.pl</h1>
            <h1 className='font-light text-center lg:text-left'>sylwia@selective-mgmt.pl</h1>
            <hr className='my-4 w-44 border-black'></hr>

            <Link href="https://www.premium-models.com/maximilien" className="hover:underline mt-2 text-3xl text-center lg:text-left">premium</Link>
            <h1 className='font-light text-center lg:text-left'>gaetan.flamanc@premium-models.com</h1>
            <h1 className='font-light text-center lg:text-left'>louis.labrosse@premium-models.com</h1>
            <h1 className='font-light text-center lg:text-left'>cloe.villax@premium-models.com</h1>
            <hr className='my-4 w-44 border-black'></hr>

            <Link href="https://www.nextmanagement.com/madrid/madrid-men-new-faces/all/2406076/max-gontard#portfolio" className="hover:underline mt-2 text-3xl text-center lg:text-left">next</Link>
            <h1 className='font-light text-center lg:text-left'>mariateresam@nextmanagement.com</h1>
            <h1 className='font-light text-center lg:text-left'>camillab@nextmanagement.com</h1>
            <hr className='my-4 w-44 border-black'></hr>

            <Link href="https://elitemodelmanagement.com/copenhagen/development/11395-max-gontard.web" className="hover:underline mt-2 text-3xl text-center lg:text-left">elite</Link>
            <h1 className='font-light text-center lg:text-left'>m.knudsen@elitemodel.dk</h1>
            <hr className='my-4 w-44 border-black'></hr>

            <Link href="https://www.models1.co.uk/men/newfaces/5212-maxymilian-gontard/" className="hover:underline mt-2 text-3xl text-center lg:text-left">Models1</Link>
            <hr className='my-4 w-44 border-black'></hr>

            <Link href="https://models.com/models/max-gontard" className="hover:underline mt-2 mb-12 text-3xl text-center lg:text-left">models.com</Link>
          </div>

          {/* Prawa strona: obraz */}
          <div className='flex justify-center items-center lg:pl-16'>
            <Image src={pic2} alt="pic2" className='w-full lg:w-3/4' />
          </div>
        </div>
      </div>

      <NavBar isSelected={3} home={0} />
    </>
  );
}

export default page;