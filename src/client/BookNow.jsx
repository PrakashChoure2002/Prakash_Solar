import React from 'react';
import  { useState } from 'react';

const BookNow = () => {
    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: "",
        pincode: "",
        
      });
      let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // firebase connect 
 

  const submitData = async (event) => {
    event.preventDefault();
    const { name, phone, email,  pincode } = userData;

    if (name  && phone && email && pincode ) {
      const res = await fetch(import.meta.env.VITE_BOOK_API ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
           
            phone,
            email,
            pincode
          }),
        }
      );

      if (res) {
        setUserData({
            name: "",
            phone: "",
            email: "",
            pincode: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };
  return (
    <div className=" flex flex-col md:flex-row items-center justify-center p-4 bg-gray-100 [background:linear-gradient(180.01deg,_#bbf0f8_7.48%,_#5e9098)]">
      <div className="md:w-1/2 p-4 ">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Book your free consultancy now </h1>
        <p className="text-md  text-gray-700 mb-4  sm:text-5xl md:text-3xl lg:text-base">
        Unlock the potential of solar energy for your home or business. 
Book your free consultancy today and take the first step 
towards a brighter, sustainable future        </p>
        
      </div>
      <div className="md:w-1/2  bg-white p-6 rounded-lg shadow-md">
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" method="POST">
  <div className="col-span-1">
    <label htmlFor="name" className="block text-sm font-medium sm:text-5xl md:text-2xl lg:text-base text-gray-700">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder='name'
      value={userData.name}
      onChange={postUserData}
      className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
  <div className="col-span-1">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:text-5xl md:text-2xl lg:text-base">Email</label>
    <input
      type="email"
      id="email"
      name="email"
       placeholder='email'
       value={userData.email}
       onChange={postUserData}
      className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
  <div className="col-span-1">
    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 sm:text-5xl md:text-2xl lg:text-base">Phone Number</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      placeholder='phone'
      value={userData.phone}
      onChange={postUserData}
      className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
  <div className="col-span-1">
    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 sm:text-5xl md:text-2xl lg:text-base">Pincode</label>
    <input
      type="text"
      id="pincode"
      name="pincode"
      placeholder='pincode'
      value={userData.pincode}
      onChange={postUserData}
      
      className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
  <div className="col-span-2 flex justify-center mt-4">
    <button
      type="submit"
      onClick={submitData}
      className="py-2 sm:text-5xl md:text-2xl lg:text-base px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Book Now
    </button>
  </div>
</form>

      </div>
    </div>
  );
};

export default BookNow;
