import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
// import { RxArrowTopRight } from "react-icons/rx";
// import { ServiceData } from ".";
import { Servicedata } from "./Servicedata";
// import { HiOutlineShoppingCart, HiEye, HiTrash } from "react-icons/hi";
// import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
const Testonimials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
    <div className="flex  items-center justify-center flex-col h-[500] relative bg-[#FFFFFF]">
        <div className=" py-2 mx-4 md:mx-24  space-x-2 md:space-x-5  text-justify ">
        <h1 className='text-black text-2xl sm:text-3xl md:text-6xl lg:text-4xl'>----Testimonials</h1>
       
        <h1 className= "py-3 flex gap-4  text-black font-bold text-2xl sm:text-3xl md:text-5xl lg:text-5xl">What Our <p className="text-blue-500 font-bold text-2xl sm:text-3xl md:text-5xl lg:text-5xl  ">Clients</p> </h1>
        <h1 className="text-blue-500  text-2xl  sm:text-3xl md:text-4xl lg:text-5xl">Says About Us</h1>
          </div>
          </div>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[90%] lg:max-w-[80%]"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        
        {Servicedata.map((item, id) => (
          <SwiperSlide  >
           

<Card  className="  transform hover:scale-105 transition duration-300" key={id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.backgroundImage} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
        {item.owner}
        </Card.Text>
        <Card.Text>
        {item.content}
        </Card.Text>
        <div className="flex">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-yellow-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.359 4.195a1 1 0 00.95.691h4.396c.969 0 1.372 1.24.588 1.81l-3.57 2.591a1 1 0 00-.364 1.118l1.36 4.195c.3.921-.755 1.688-1.538 1.118l-3.57-2.591a1 1 0 00-1.176 0l-3.57 2.591c-.783.57-1.838-.197-1.538-1.118l1.36-4.195a1 1 0 00-.364-1.118L2.168 9.623c-.784-.57-.38-1.81.588-1.81h4.396a1 1 0 00.95-.691l1.359-4.195z" />
      </svg>
    ))}
  5.0</div>
       
      </Card.Body>
    </Card>
  {/* <div
    className="flex  flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer"
    onMouseEnter={() => setHoveredIndex(index)}
    onMouseLeave={() => setHoveredIndex(null)}
  >
      <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${item.backgroundImage})` }}
      />
                   <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                 <div className="relative flex flex-col justify-end gap-3 h-full">
           <h1 className="text-medium lg:text-l xl:text-xl">{item.title}</h1>
         <p className="text-sm lg:text-l xl:text-medium">{item.owner}</p>
           <p className="text-sm lg:text-l xl:text-medium">{item.content}</p>
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-yellow-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.359 4.195a1 1 0 00.95.691h4.396c.969 0 1.372 1.24.588 1.81l-3.57 2.591a1 1 0 00-.364 1.118l1.36 4.195c.3.921-.755 1.688-1.538 1.118l-3.57-2.591a1 1 0 00-1.176 0l-3.57 2.591c-.783.57-1.838-.197-1.538-1.118l1.36-4.195a1 1 0 00-.364-1.118L2.168 9.623c-.784-.57-.38-1.81.588-1.81h4.396a1 1 0 00.95-.691l1.359-4.195z" />
      </svg>
    ))}
  5.0</div>
  
  
</div>


   
    <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
  </div> */}
 
</SwiperSlide>

        ))}
        
      </Swiper>
      </>
    
  );
};

export default Testonimials;
