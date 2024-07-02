import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='bg-white w-screen h-screen text-black font-mono flex text-center items-center justify justify-center'>
      <div className='grid grid-flow-row gap-12 text-2xl'>
      <Link href="https://www.instagram.com/3sswwuu/" className="hover:underline">@3sswwuu</Link>
        <h1>3sswwuu@gmail.com</h1>
        <h1>+48 606 975 070</h1>
      </div>

    </div>
  )
}

export default page