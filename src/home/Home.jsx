import React from 'react'
import Calculator from './Calculator'
import Cards from './Cards'
import Ecofriendly from  '../public/assets/ecofriendly.png'
import Lowcost from  '../public/assets/low-cost.png'
import webmaintenance from  '../public/assets/web-maintenance.png'
import Calcu1 from './Calcu1'
import Test1 from './Test1'
// import calculator from '../assets/calculator.png'
import logo1 from '../public/assets/logo-1.png'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <>
    <div className=" relative  ">
      
      
    <div className="flex flex-col items-center justify-center bg-calculator w-full h-auto min-h-screen bg-no-repeat bg-cover">
      

 
  <img

    src={logo1} 
    alt="Solar Energy"
    className="my-10px "
  />
      <div className="text-center justify-center  ">
  
  <p className="text-black font-bold text-2xl sm:text-6xl md:text-l lg:text-5xl ">Empower Your Home With Solar Energy </p>
  <br/>

    <p className="text-black font-bold text-2xl sm:text-3xl md:text-l lg:text-3xl">Unleashing clean, sustainable power solutions</p>
  
  <div className="  inset-0 flex flex-col  sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
    <button className="px-6 py-2 bg-blue-800 sm:text-2xl lg:text-base text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
    Get your Quote Today
    </button>
    <Link to={'/contact'}> <button className="px-6 sm:text-2xl py-2 lg:text-base bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
      Contact Us
    </button></Link>
    </div>
    
  </div>
</div>    
        
  {/* <div className=" absolute inset-0 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
    <button className="px-6 py-2 bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
    Get your Quote Today
    </button>
    <Link to={'/contact'}> <button className="px-6 py-2 bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
      Contact Us
    </button></Link>
    
  </div> */}
 
</div>
<div className=" text-bold">

<Calcu1/>


</div>



<div className="bg-teal-200 p-4 md:p-8">
  <div className="flex flex-col md:flex-row justify-around items-center">
    {/* Eco Friendly Section */}
    <div className="text-center px-4  mb-4 md:mb-0">
      <div className="bg-green-500 rounded-full p-2 inline-block"><img className='h-7 w-7' src={Ecofriendly}/> </div>
      <p className="text-lg md:text-2xl text-green-800 sm:text-xl font-bold mt-2">Eco Friendly</p>
      <p className="font-semibold sm:text-2xl">Environment Sustainable Products</p>
    </div>

    {/* Low Maintenance Section */}
    <div className="text-center px-4 mb-4 md:mb-0">
      <div className="bg-green-200 rounded-full p-2 inline-block"> <img className='h-7 w-7' src={webmaintenance}/></div>
      <p className="text-lg md:text-xl text-green-800 font-bold mt-2">Low Maintenance</p>
      <p className="font-semibold sm:text-2xl">Effortless Upkeep Solution</p>
    </div>

    {/* Affordable Price Section */}
    <div className="text-center px-4">
      <div className="bg-green-300 rounded-full p-2 inline-block"> <img className='h-7 w-7' src={Lowcost}/></div>
      <p className="text-lg md:text-2xl text-green-800 font-extrabold mt-2">Affordable Price</p>
      <p className="font-semibold sm:text-2xl">Budget-Friendly Cost</p>
    </div>
  </div>
</div>
<div className="classnae">
  <Cards/>
</div>



  


</>
  )
}

export default Home
