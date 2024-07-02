import React from 'react'
import Banner from './Banner'
import { FaStar } from 'react-icons/fa';

import WorkProcess from './WorkProcess'
import Achivement from './Achivement'
import Test from './Test'
const AboutUs = () => {

 
  return (
    <>
    
   
  <Banner />

<div className="bg-gray-100">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap">
      <div className="w-full sm:w-1/2 flex flex-col items-center order-1 sm:order-1 py-6">
        <img src="https://media.licdn.com/dms/image/D4D03AQHoQ1iSavn5BQ/profile-displayphoto-shrink_200_200/0/1666254623687?e=2147483647&v=beta&t=AnsuB_e1wHLg-X9rM_CCMGWDfVaALEWXmlyZeONi14Q" alt="Company Logo" className="h-80 w-50 shadow-sm mx-auto" />
        <p className="mt-4 sm:text-2xl lg:text-xl  font-medium text-black">Robert Leo</p>
      </div>
      <div className="w-full sm:w-1/2 px-4 py-6 order-2 sm:order-2">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ABOUT US
          </h2>
          <p className="mt-6 text-lg sm:text-4xl md:text-4xl lg:text-3xl font-extrabold text-blue-500">
            <span className="text-black font-bold">From Sunlight to Electricity:</span>
            <br />
            <span>Understanding solar energy system</span>
          </p>
          <p className="mt-4 text-justify  sm:text-2xl lg:text-xl  font-medium text-black">
            At Prakash Enterprises, we're dedicated to pioneering the transition to sustainable energy solutions through expert solar panel installations. With a commitment to excellence and innovation, we empower homes and businesses to harness the power of the sun, reducing environmental impact while maximizing energy savings. Our team of experienced professionals combines cutting-edge technology with personalized service to deliver tailor-made solutions that exceed expectations. Join us in building a brighter, cleaner future one solar panel at a time.
          </p>
          <div className="mt-8 text-center">
            <p className="sm:text-2xl lg:text-xl  font-bold text-black">Robert Loard - CEO</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="px-4 py-6 rounded-lg shadow-sm bg-white ">
        <h3 className="sm:text-2xl lg:text-xl  font-bold text-gray-900">100+</h3>
        <p className="sm:text-2xl lg:text-xl font-bold text-black">Projects Completed</p>
      </div>
      <div className="px-4 py-6 rounded-lg shadow-sm bg-white">
        <h3 className="sm:text-2xl lg:text-xl  font-bold text-gray-900">70+</h3>
        <p className="sm:text-2xl lg:text-xl  font-bold text-black">Happy Customers</p>
      </div>
      <div className="px-4 py-6 rounded-lg shadow-sm bg-white">
        <h3 className="sm:text-2xl lg:text-xl  font-bold text-gray-900">99%</h3>
        <p className="sm:text-2xl lg:text-xl  font-bold text-black">Satisfied Customers</p>
      </div>
    </div>
  </div>
</div>

  <WorkProcess/> 
   <Achivement/>
   {/* <Test/> */}



  
   





    
    

       
    </>
  )
}

export default AboutUs
