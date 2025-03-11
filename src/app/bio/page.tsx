import Image from 'next/image'
import { MailIcon,  } from '@heroicons/react/solid' // Importujemy ikony bez rozmiaru
import { FaInstagram, FaEnvelope } from 'react-icons/fa'
import bioImage from '../../../public/public2/bio.jpg' // Zmien ścieżkę w razie potrzeby
import NavBar from '../components/NavBar'


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white text-black text-center p-5">
      <div className="mb-5">
        <h1 className="text-2xl">2005</h1>
        <p className="text-lg ">French & Polish</p>
        <p className='text-lg'>born in 2005</p>
        <p className="text-lg">Based in London.</p>
      </div>

      {/* Ikony Instagrama i maila */}
      <div className="flex space-x-6 mt-6">
        <a href="https://www.instagram.com/maaxantoine/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-10 h-10 text-black hover:text-gray-700 transition-colors" />
        </a>
        <a href="mailto:maxantoine.swu@gmail.com">
          <MailIcon className="w-10 h-10 text-black hover:text-gray-700 transition-colors" />
        </a>
      </div>

      <div className="mt-20">
        <Image src={bioImage} alt="Bio1 Image " className="rotate-90" width={400} height={400} />
      </div>
      <NavBar home={0} isSelected={5} />
    </div>
  )
}