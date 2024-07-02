import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import Card from 'react-bootstrap/Card';
import {cardsInfo} from './cardsInfo'
import pic1 from '../public/assets/1.png'
import pic2 from '../public/assets/2.png'
import pic3 from '../public/assets/3.png'
import pic4 from '../public/assets/4.png'
import pic5 from '../public/assets/5.png'

function Cards() {
  return (
    <>
            <div className="p-4 text-center bg-white relative">
         <div className="mx-4  text-center space-x-2 md:space-x-5 flex flex-wrap justify-center">
        <h1 className="text-black font-bold text-2xl sm:text-6xl md:text-6xl lg:text-5xl">Why Choose Solar?</h1>
        <h1 className="text-blue-500 text-2xl sm:text-6xl md:text-6xl lg:text-5xl underline">Our Befenits"</h1>
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
        className="max-w-[100%] lg:max-w-[80%]"
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
           
            {cardsInfo.map((item,id)=>(
              
              <SwiperSlide >
                <Card  className="  transform hover:scale-105 transition duration-300  " key={id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.backgroundImage} />
      <Card.Body>
        <Card.Title className='  font-bold sm:text-xl md:text-xl lg:text-base'>{item.title}</Card.Title>
        
        <Card.Text className=' sm:text-xl md:text-xl lg:text-base'>
        {item.content}
        </Card.Text>
        </Card.Body>
    </Card>

    
                </SwiperSlide>
                

            ))}
            
           
 </Swiper>
           {/* <div className=" py-3 d-flex flex-column  align-items-center">
         <div className="d-flex flex-wrap space-x-2 justify-content-center">

    <Card  className="m-4 md:m-6 transform hover:scale-105 transition duration-300" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic1} />
      <Card.Body>
        <Card.Title className='text-xl font-bold text-wrap' >Energy cost Savings</Card.Title>
        <Card.Text>
        Say Hello to savings with our 
        solar Solutions
        </Card.Text>
       
      </Card.Body>
    </Card>
   
    <Card  className="m-4 md:m-6 transform hover:scale-105 transition duration-300" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic2}/>
    <Card.Body>
      <Card.Title className='text-xl font-bold text-wrap'>Advantages of Solar Energy</Card.Title>
      <Card.Text>
      Join Us in creating a Greener 
and cleaner future
      </Card.Text>
     
    </Card.Body>
  </Card>
  
  <Card  className="m-4 md:m-6 transform hover:scale-105 transition duration-300" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic3} />
    <Card.Body>
      <Card.Title className='text-xl font-bold text-wrap'>Sustainable Investment</Card.Title>
      <Card.Text>
      ensuring stable and predictable 
      energy costs
      </Card.Text>
      
    </Card.Body>
  </Card>
 
  <Card  className="m-4 md:m-6 transform hover:scale-105 transition duration-300" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic4} />
    <Card.Body>
      <Card.Title className='text-xl  font-bold text-wrap'>Long Term Investment</Card.Title>
      <Card.Text>
      offering stable return on investment & save you from future energy price fluctuations.
      </Card.Text>
      
    </Card.Body>
  </Card>

  <Card  className="m-4 md:m-6 transform hover:scale-105 transition duration-300" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic5} />
    <Card.Body>
      <Card.Title className='text-xl  font-bold text-wrap'>Community Impact</Card.Title>
      <Card.Text>
      Be a part of solution by adpoting Solar Energy
      </Card.Text>
      
    </Card.Body>
  </Card>
  </div>
  </div> */}
   
    
  
 
  </>
  );
}

export default Cards;