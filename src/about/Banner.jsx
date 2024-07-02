import React from 'react';
import about1 from '../public/assets/Aboutus.png';

function Banner() {
  return(
    <div className="relative">
    <img src={about1} alt="Banner" className="w-full h-[50%] object-cover" />
    {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
    {/* <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">hello</h1>
    </div> */}
  </div>
  )
}

export default Banner;