import React from 'react';
import Image from 'next/image';
import pic1 from "../../../public/new_photo/SWU12_1 copy.webp";
import pic2 from "../../../public/new_photo/SWU14-5 copy.webp";
import pic3 from "../../../public/new_photo/SWU20-2 copy.webp";
import pic4 from "../../../public/new_photo/SWU20-6 copy.webp";
import pic5 from "../../../public/new_photo/SWU25-4 copy.webp";
import pic6 from "../../../public/new_photo/SWU26 copy 2.webp";
import pic7 from "../../../public/new_photo/SWU29-1-tiff copy.webp";
import pic8 from "../../../public/new_photo/SWU29-3-tiff copy.webp";
import pic9 from "../../../public/new_photo/SWU30-6 copy.webp";
import pic10 from "../../../public/new_photo/SWU31-2 copy.webp";

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

const MediaBody = () => {
  return (
    <div className='flex justify-center items-center bg-white'>
      <div className="columns-2 md:columns-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="mb-4 break-inside-avoid-column">
            <Image className="h-auto max-w-full" src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className='h-screen'>

      </div>
    </div>
  );
}

export default MediaBody;