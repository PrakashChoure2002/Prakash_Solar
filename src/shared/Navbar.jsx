
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import logo1 from '../public/assets/logo-1.png'
import logo from '../public/assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      {/* <div className=""> */}
        <div className="flex justify-between">
        {/* <div className="flex space-x-7">
  <div className="mr-10">
    <div className="sm:w-[50%] sm:h-[20%]">
      <Link to={'/'}>
        <img src={logo1} alt="Logo" />
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  </div>

  <div className="hidden lg:flex items-center space-x-10 text-black ml-auto">
  
   
    <Link to="/" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">Home</Link>
    <Link to="/about" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">About Us</Link>
    <Link to="/ourservice" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">Our Services</Link>
    <Link to="/ourclient" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">Our Clients</Link>
    <Link to="/contact" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">Contact Us</Link>
     
    
  </div>
</div> */}
{/* <div className="hidden lg:flex items-center space-x-10 text-black ml-auto"> */}

        <div className="text-white text-lg font-bold"> <div className="sm:w-[50%] sm:h-[20%]">
      <Link to={'/'}>
        <img src={logo1} alt="Logo" />
        <img src={logo} alt="Logo" />
      </Link>
    </div></div>
    <div className=" hidden lg:flex   justify-between items-center">
        <div className="flex space-x-12">
        <Link to="/" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">Home</Link>
    <Link to="/about" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">About Us</Link>
    <Link to="/ourservice" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">Our Services</Link>
    <Link to="/ourclient" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">Our Clients</Link>
    <Link to="/contact" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">Contact Us</Link>
        </div>
      </div>

{/* </div> */}




          {/* Mobile menu button */}
          <div className=" flex   lg:hidden sm:p-8   items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="">
          {/* {console.log(setIsOpen(!open))} */}
          {isOpen ? (                 
            <FaTimes className="w-10 h-10   text-gray-500 hover:text-green-500" />
          ) : (
            <FaBars className="w-10 h-10   text-gray-500 hover:text-green-500" />
          )}
        </button>
      </div>
        </div>
      {/* </div> */}
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden  `}>
        <Link to="/" className="block text-sm sm:text-2xl px-2 py-4 text-black   hover:bg-gray-300 font-bold transition duration-300">Home</Link>
        <Link to="/about" className="block text-sm sm:text-2xl px-2 py-4 text-black  hover:bg-gray-300 font-bold transition duration-300">About Us</Link>
        <Link to="/ourservice" className="block text-sm sm:text-2xl px-2 py-4 text-black  hover:bg-gray-300 font-bold transition duration-3000">Our Services</Link>
        <Link to="/ourclient" className="block text-sm sm:text-2xl px-2 py-4 text-black  hover:bg-gray-300 font-bold transition duration-300">Our Clients</Link>
        <Link to="/contact" className="block text-sm sm:text-2xl px-2 py-4 text-black  hover:bg-gray-300 font-bold transition duration-300">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;


