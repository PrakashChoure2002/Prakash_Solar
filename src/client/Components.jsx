import React from 'react'
import ourClientInfo from './ourClientInfo'
import { FaLocationDot } from "react-icons/fa6";
import { TbSquareAsteriskFilled } from "react-icons/tb";

import { IoMdPerson } from "react-icons/io";

const Test2 = () => {
  return (
    <div>

      {ourClientInfo.map((item,id)=>(
        <div className="container mx-auto p-4 space-y-8" key={id}>
        <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden sm:text-2xl ">
        <div className="w-full lg:w-1/2">
  <img
    src={item.src}
    alt="Service"
    className="w-full h-auto object-cover
               sm:w-full sm:h-auto
               md:w-full md:h-auto
               lg:w-3/4 lg:h-3/4"
  />
</div>
          <div className="w-full lg:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4 ">{item.title}</h2>
            <p className="mb-4 sm:text-2xl md:text-2xl lg:text-base">
              {item.des}
            </p>
            <div className="mb-2 flex gap-2">
              <strong> <FaLocationDot/></strong> {item.location}
            </div>
            <div className="mb-2 flex gap-2">
              <strong> <TbSquareAsteriskFilled/> </strong> {item.totalarea}
            </div>
            <div className="mb-2 flex gap-2">
              <strong> <IoMdPerson/></strong> {item.client}
            </div>
          </div>
        </div>
  
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className='text-justify sm:text-2xl md:text-2xl lg:text-base'> {item.about}</p>
          <div className="py-5 grid grid-cols-1 lg:grid-cols-3 gap-4 w-55px">
           
            <div className="flex items-center ">
      
        <img src={item.src1} alt="Client" className="w-50 h-60 mr-4 " />
        
        <div>
          <div className="flex items-center mb-2">
            
            <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.359 4.195a1 1 0 00.95.691h4.396c.969 0 1.372 1.24.588 1.81l-3.57 2.591a1 1 0 00-.364 1.118l1.36 4.195c.3.921-.755 1.688-1.538 1.118l-3.57-2.591a1 1 0 00-1.176 0l-3.57 2.591c-.783.57-1.838-.197-1.538-1.118l1.36-4.195a1 1 0 00-.364-1.118L2.168 9.623c-.784-.57-.38-1.81.588-1.81h4.396a1 1 0 00.95-.691l1.359-4.195z" />
                  </svg>
                ))}
        </div>
          </div>
          <p className="text-gray-600  sm:text-xl md:text-xl lg:text-base ">{item.det}</p>
          <p className="font-semibold sm:text-xl md:text-xl lg:text-base">{item.name}</p>
          <p className="font-semibold sm:text-xl md:text-xl lg:text-base">{item.owner}</p>
        </div>
      </div>
  
            
  
           
          </div>
        </div>
      </div>
        
      ))}
     
    </div>
  )
}

export default Test2
