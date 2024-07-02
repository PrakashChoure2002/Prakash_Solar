import React from 'react'


// import ServicesDetails from './ServicesDetails'
import Components from './Components'
const OurService = () => {
  return (
    <div className='p-4'>
      <div className="text-center mb-6">
        <h2 className="text-3xl sm:text-6xl lg:text-5xl md:text-4xl font-bold text-black">Our Services</h2>
        <br/>
        <div className="flex justify-center items-center space-x-2">
  <h2 className="text-4xl sm:text-5xl lg:text-4xl md:text-4xl  flex gap-2 font-extrabold text-black ">Services For <p className="text-blue-500 text-4xl sm:text-5xl lg:text-4xl md:text-4xl  font-extrabold"> Sustainable Energy</p> </h2>
  
</div>
        </div>
      {/* <ServicesDetails/> */}
      <Components/>
     
    </div>
  )
}

export default OurService
