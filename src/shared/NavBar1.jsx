import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5 bg-white shadow-md">
      <div className="text-lg font-bold text-black">Brand</div>

      {/* Desktop menu */}
      <div className={`hidden lg:flex items-center space-x-8 text-black`}>
        <Link to="/" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">Home</Link>
        <Link to="/about" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">About Us</Link>
        <Link to="/ourservice" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">Our Services</Link>
        <Link to="/ourclient" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">Our Clients</Link>
        <Link to="/contact" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">Contact Us</Link>
      </div>

      {/* Mobile menu button */}
      <div className="flex lg:hidden items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="">
          {isOpen ? (
            <FaTimes className="w-6 h-6 text-gray-500 hover:text-green-500" />
          ) : (
            <FaBars className="w-6 h-6 text-gray-500 hover:text-green-500" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-md z-20`}>
        <Link to="/" className="block py-4 px-4 font-semibold hover:text-green-500 transition duration-300">Home</Link>
        <Link to="/about" className="block py-4 px-4 font-semibold hover:text-green-500 transition duration-300">About Us</Link>
        <Link to="/ourservice" className="block py-4 px-4 font-semibold hover:text-green-500 transition duration-300">Our Services</Link>
        <Link to="/ourclient" className="block py-4 px-4 font-semibold hover:text-green-500 transition duration-300">Our Clients</Link>
        <Link to="/contact" className="block py-4 px-4 font-semibold hover:text-green-500 transition duration-300">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar1;
