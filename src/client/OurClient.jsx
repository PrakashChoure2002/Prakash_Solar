import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { TbSquareAsteriskFilled } from "react-icons/tb";

import { IoMdPerson } from "react-icons/io";
import ourClientInfo from './ourClientInfo';
import BookNow from './BookNow';
import Testonimials from './Testonimials';
// import Test from './Test';
import Test2 from './Components';


const OurClient = () => {
  return (
    <div className='py-5'>
      <div className=" mx-4 md:mx-24  space-x-2 md:space-x-5  text-justify ">
        <h1 className='text-black text-2xl font-bold sm:text-3xl md:text-6xl lg:text-4xl'>----Our Latest Project</h1>
       
        <h1 className= "py-3  text-blue-500 font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-5xl">Explore our Portfolio of</h1>
        <h1 className="text-black text-2xl sm:text-3xl md:text-5xl lg:text-5xl">Featured Projects</h1>
          </div>
          <Test2/>


         
          

          <BookNow/>
          <Testonimials/>
          {/* <Test/> */}
          
        

     
    </div>
  )
}

export default OurClient
