import React from 'react'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import pic1 from "./../../../public/B1.webp";
import pic2 from "./../../../public/B2.webp";
import pic3 from "./../../../public/B3.webp";
import pic4 from "./../../../public/B4.webp";
import pic5 from "./../../../public/B5.webp";
import pic6 from "./../../../public/B6.webp";
import pic7 from "./../../../public/B7.webp";
import pic8 from "./../../../public/B8.webp";
import picM1 from "./../../../public/MAXWEBJPG4.webp";
import GIF1 from "./../../../public/StepWebPolangGif-ezgif.com-optimize.gif";

import SNG1 from "./../../../public/audio/64.mp3";

import AllPhotosBody from "./../components/AllPhotosBody"

const PageBody = () => {
    return (
        <>
           
                <AllPhotosBody />
           
            
            <NavBar home={0} isSelected={2}/>
        </>
    )
}

export default PageBody;