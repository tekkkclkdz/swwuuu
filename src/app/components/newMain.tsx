import Image from "next/image";

import pic1 from "../../../public/public2/MainPageTlo1.jpg"
import pic2 from "../../../public/public2/MainPageTlo2.jpg"
import pic3 from "../../../public/public2/MainPageTlo3.jpg"


import React from 'react'

const newMain = () => {
  return (
    <div className="flex flex-col">
  <div className="w-screen h-auto relative">
    <Image
      src={pic1}
      alt="Image 1"
      layout="intrinsic"
      objectFit="contain"
      className="w-full"
    />
  </div>
  <div className="w-screen h-auto relative">
    <Image
      src={pic2}
      alt="Image 2"
      layout="intrinsic"
      objectFit="contain"
      className="w-full"
    />
  </div>
  
</div>
  )
}

export default newMain



// const FullScreenImages = () => {
//   return (
//     <div className="w-screen h-screen flex flex-col">
//       <div className="w-full h-1/3 relative">
//         <Image
//           src={pic1}
//           alt="Image 1"
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//       <div className="w-full h-1/3 relative">
//         <Image
//           src={pic2}
//           alt="Image 2"
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//       <div className="w-full h-1/3 relative">
//         <Image
//           src={pic3}
//           alt="Image 3"
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default FullScreenImages;