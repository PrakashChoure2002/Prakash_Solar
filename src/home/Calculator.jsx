import React from 'react'
import { Button } from 'react-scroll'


const Calculator = () => {
  
  return (

<>
<div className="p-4 text-center bg-blue-100 relative">
    <div className="mx-4 md:mx-24 text-center space-x-2 md:space-x-5 flex flex-wrap justify-center">
        <h1 className="text-blue-500 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl">Calculate</h1>
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-6xl">How Much Money</h1>
    </div>
    <h3 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mt-4">Can We Save</h3>
    <span className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 block">
        Go to our savings calculator
    </span>
    <div className="flex justify-center mt-4 mx-4">
      <button className="bg-blue-500 text-white py-3 px-6 rounded-full font-bold text-base sm:text-lg md:text-xl hover:bg-blue-600 transition duration-300 "  >Calculate</button>
    </div>
</div>


</>


  )
}

export default Calculator
