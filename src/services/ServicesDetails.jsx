import React from 'react'
import './ServicesDetails.css'
import home from '../public/assets/home.png'
import after from '../public/assets/after.png'
import commercial from '../public/assets/commercial.png'
import panel from '../public/assets/panel.png'
import Lt from '../public/assets/Lt.png'
import Edcess from '../public/assets/Edcess.png'
import Dg from '../public/assets/Dg.png'
import paneldesi from '../public/assets/paneldesi.png'
import product from '../public/assets/product.png'

const ServicesDetails = () => {
  return (
    <>
   <div className="flex flex-wrap"> 
   
    <div className="wrap animate pop  ">
  <div className="overlay">
    <div className="overlay-content animate slide-left delay-2">
      <h1 className="animate slide-left pop delay-4 uppercase text-blue-500 font-extrabold sm:text-2xl md:text-3xl lg:text-base">Home Installation</h1>
      <p className="animate slide-left pop delay-5 " style={{ color: 'black', marginBottom: '2.5rem' }}>
        <span className='sm:text-l md:text-l lg:text-base'>Elevate your home with seamless solar panel installation for reliable, eco-friendly energy solutions...</span>
        <span  > <p className='flex gap-2 text-red-500'>Read <p className='text-red-500'> More</p> </p></span>

      </p>
    </div>
    <div className="image-content animate slide delay-5 bg-home"></div>
    <div className="dots animate">
      <div className="dot animate slide-up delay-6"></div>
      <div className="dot animate slide-up delay-7"></div>
      <div className="dot animate slide-up delay-8"></div>
    </div>
  </div>
  <div className="text">
    <p><img className="inset " src={home} alt="" />Installing solar panels at home can be highly beneficial in several ways. 
Firstly, it offers substantial savings on energy bills over time as it harnesses 
free, renewable sunlight to generate electricity. Secondly, solar power 
reduces reliance on fossil fuels, thus mitigating carbon emissions and 
contributing to a cleaner environment. Additionally, solar panels increase 
the value of your property, making it a wise long term investment. 
Moreover, with various incentives and tax credits available, the initial cost of 
installation can be significantly offset, making solar energy an economically 
savvy choice for homeowners.</p>
    
  </div>
</div>

{/* cards 2 */}
<div className="wrap animate pop ">
  <div className="overlay">
    <div className="overlay-content animate slide-left delay-2">
      <h1 className="animate slide-left pop delay-4 uppercase text-blue-500 font-extrabold sm:text-xl md:text-2xl lg:text-base">Commercial Installation</h1>
      <p className="animate slide-left pop delay-5 " style={{ color: 'black', marginBottom: '2.5rem' }}>
        <span  className='sm:text-l md:text-l lg:text-base'>Power up your business with our professional 
solar installation services, tailored to meet your 
commercial energy needs...</span>
<span  > <p className='flex gap-2 text-red-500'>Read <p className='text-red-500'> More</p> </p></span>

      </p>
    </div>
    <div className="image-content animate slide delay-5 bg-commercial"></div>
    <div className="dots animate">
      <div className="dot animate slide-up delay-6"></div>
      <div className="dot animate slide-up delay-7"></div>
      <div className="dot animate slide-up delay-8"></div>
    </div>
  </div>
  <div className="text">
    <p><img className="inset" src={commercial} alt="" />Installing solar panels for commercial purposes offers numerous benefits. 
Firstly, it significantly reduces operating costs by providing a sustainable 
and reliable source of electricity, shielding businesses from fluctuating 
energy prices. Additionally, it enhances corporate social responsibility 
efforts by reducing carbon footprint and demonstrating commitment to 
environmental sustainability. Furthermore, solar installations often qualify 
for tax incentives and rebates, offering potential financial savings and 
enhancing the overall return on investment for businesses. Overall, adopting 
solar energy can bolster the bottom line, enhance brand reputation, and 
contribute to a cleaner, more sustainable future</p>
   
  </div>
</div>
{/* 3 */}

<div className="wrap animate pop ">
  <div className="overlay">
    <div className="overlay-content animate slide-left delay-2">
      <h1 className="animate slide-left pop delay-4 uppercase text-blue-500 font-extrabold sm:text-2xl md:text-2xl lg:text-base">After Sale Services</h1>
      <p className="animate slide-left pop delay-5 " style={{ color: 'black', marginBottom: '2.5rem' }}>
        <span className='sm:text-l md:text-l lg:text-base '>Experience peace of mind with our comprehensive after-sales 
services,ensuring your solar investment continues to shine for 
years to come... </span>
<span  > <p className='flex gap-2 text-red-500'>Read <p className='text-red-500'> More</p> </p></span>

      </p>
    </div>
    <div className="image-content animate slide delay-5 bg-after"></div>
    <div className="dots animate">
      <div className="dot animate slide-up delay-6"></div>
      <div className="dot animate slide-up delay-7"></div>
      <div className="dot animate slide-up delay-8"></div>
    </div>
  </div>
  <div className="text">
    <p><img className="inset" src={after} alt="" />After sales services for solar products can be highly beneficial in ensuring 
optimal performance, customer satisfaction, and long term sustainability. 
These services encompass maintenance, repairs, and technical support, 
which not only enhance the reliability of solar systems but also extend their 
lifespan. By offering prompt assistance and regular check ups, providers can 
address issues efficiently, maximizing energy production and minimizing 
downtime. Additionally, personalized guidance on system usage and 
efficiency improvements can help customers derive the maximum benefit 
from their investment in solar energy, fostering trust and loyalty in the 
brand. Ultimately, robust after sales services contribute to the overall 
success and widespread adoption of solar technology</p>
    
  </div>
</div>

{/* 4 */}
<div className="wrap animate pop ">
  <div className="overlay">
    <div className="overlay-content animate slide-left delay-2">
      <h1 className="animate slide-left pop delay-4 uppercase text-blue-500 font-extrabold sm:text-2xl md:text-2xl lg:text-base">Panel cleaning</h1>
      <p className="animate slide-left pop delay-5 " style={{ color: 'black', marginBottom: '2.5rem' }}>
        <span className=' sm:text-l md:text-l lg:text-base '>Restore peak performance to your solar panels with our 
        professional cleaning services...</span>
        <span  > <p className='flex gap-2 text-red-500'>Read <p className='text-red-500'> More</p> </p></span>

      </p>
    </div>
    <div className="image-content animate slide  delay-5 bg-panel h-64 " ></div>
    <div className="dots animate">
      <div className="dot animate slide-up delay-6"></div>
      <div className="dot animate slide-up delay-7"></div>
      <div className="dot animate slide-up delay-8"></div>
    </div>
  </div>
  <div className="text">
    <p><img className="inset" src={panel} alt="" />Regular cleaning of solar panels can be highly beneficial in maximizing their 
energy efficiency and longevity. Dust, dirt, bird droppings, and other debris 
can accumulate on the surface of solar panels over time, obstructing 
sunlight and reducing their ability to generate electricity. By keeping panels 
clean, you ensure that they can absorb the maximum amount of sunlight, 
thus optimizing energy production. Additionally, clean panels are less prone 
to damage and corrosion, prolonging their lifespan and reducing the need 
for costly repairs or replacements. Therefore, implementing a regular panel 
cleaning regimen can significantly enhance the overall performance and 
durability of solar installations, ultimately leading to greater energy savings 
and environmental benefits.</p>
  
  </div>
</div>
{/* 5 */}

<div className="wrap animate pop ">
  <div className="overlay">
    <div className="overlay-content animate slide-left delay-2 ">
      <h1 className="animate slide-left pop delay-4 uppercase text-blue-500 font-extrabold sm:text-xl md:text-xl lg:text-base">LT and HT Connection Assistance</h1>
      <p className="animate slide-left pop delay-5 font-extra-bold " style={{ color: 'black', marginBottom: '2.5rem' }}>
        <span className='  sm:text-l md:text-l lg:text-base  '>We offer comprehensive solutions for setting up and synchronizing diesel generator (DG) systems with solar power systems,seamless transitions...  </span>
        <span  > <p className='flex gap-2 text-red-500'>Read <p className='text-red-500'> More</p> </p></span>
        
      </p>
    </div>
    <div className="image-content animate slide delay-5 bg-Lt"></div>
    <div className="dots animate">
      <div className="dot animate slide-up delay-6"></div>
      <div className="dot animate slide-up delay-7"></div>
      <div className="dot animate slide-up delay-8"></div>
    </div>
  </div>
  <div className="text">
    <p><img className="inset" src={Lt} alt="" />Switching to solar power for both low tension (LT) and high tension (HT) 
connections can offer significant benefits. Solar energy is renewable, 
sustainable, and environmentally friendly, reducing reliance on fossil fuels 
and decreasing greenhouse gas emissions. It provides a reliable source of 
electricity, especially in areas with erratic power supply, ensuring 
uninterrupted energy access. Additionally, solar power can lead to long
term cost savings by reducing electricity bills and offering potential revenue 
through net metering or selling excess energy back to the grid. Embracing 
solar energy in both LT and HT connections not only promotes energy 
independence but also contributes to a greener and more sustainable 
future.</p>
   
  </div>
</div>
{/* 6 */}

<div className="wrap animate pop ">
  <div className="overlay">
    <div className="overlay-content animate slide-left delay-2">
      <h1 className="animate slide-left pop delay-4 uppercase text-blue-500 font-extrabold sm:text-2xl md:text-2xl lg:text-base">Ed Cess Recovery Assistance</h1>
      <p className="animate slide-left pop delay-5 text-xs" style={{ color: 'black', marginBottom: '2.5rem' }}>
        <span className='sm:text-l md:text-xl lg:text-base'>We provide expert guidance and assistance in recovering excess 
electricity duty (ED) and other applicable charges, helping 
  financial benefits....</span>
<span  > <p className='flex gap-2 text-red-500'>Read <p className='text-red-500'> More</p> </p></span>

      </p>
    </div>
    <div className="image-content animate slide delay-5 bg-Edcess"></div>
    <div className="dots animate">
      <div className="dot animate slide-up delay-6"></div>
      <div className="dot animate slide-up delay-7"></div>
      <div className="dot animate slide-up delay-8"></div>
    </div>
  </div>
  <div className="text">
    <p><img className="inset" src={Edcess} alt="" />Ed Cess Recovery Assistance can benefit from solar energy in multiple ways. 
By integrating solar power solutions, such as solar panels, into their 
recovery facilities, they can significantly reduce their energy costs while 
also minimizing their carbon footprint. Solar energy provides a sustainable 
and renewable source of power, allowing Ed Cess Recovery Assistance to 
operate more efficiently and environmentally responsibly. Additionally, 
adopting solar energy can enhance their reputation as an organization 
committed to sustainability, potentially attracting more clients and support 
from environmentally conscious individuals and businesses.</p>
   
  </div>
</div>
{/* 7 */}

<div className="wrap animate pop ">
  <div className="overlay">
    <div className="overlay-content animate slide-left delay-2">
      <h1 className="animate slide-left pop delay-4 uppercase text-blue-500 font-extrabold sm:text-2xl md:text-2xl lg:text-base">DG Setup and Synchronization</h1>
      <p className="animate slide-left pop delay-5" style={{ color: 'black', marginBottom: '2.5rem' }}>
        <span className=' text-balance sm:text-l md:text-l lg:text-base'>With expertise in low tension(LT) and high tension(HT) 
connections, we ensure smooth integration of solar power 
systems... </span>
<span  > <p className='flex gap-2 text-red-500'>Read <p className='text-red-500'> More</p> </p></span>

      </p>
    </div>
    <div className="image-content animate slide delay-5 bg-Dg"></div>
    <div className="dots animate">
      <div className="dot animate slide-up delay-6"></div>
      <div className="dot animate slide-up delay-7"></div>
      <div className="dot animate slide-up delay-8"></div>
    </div>
  </div>
  <div className="text">
    <p><img className="inset" src={Dg} alt="" />Dynamic Geometry (DG) setup and synchronization can significantly benefit 
solar energy infrastructure. By utilizing DG setup, which involves the precise 
arrangement of solar panels and other components based on mathematical 
models, solar installations can maximize energy production. 
Synchronization ensures optimal alignment with the sun s position 
throughout the day, enhancing efficiency and output. This combination of 
DG setup and synchronization enhances the overall performance of solar 
energy systems, increasing their viability as a sustainable and reliable source 
of electricity while maximizing returns on investment for stakeholders</p>
   
  </div>
</div>
{/* 8 */}

<div className="wrap animate pop ">
  <div className="overlay">
    <div className="overlay-content animate slide-left delay-2">
      <h1 className="animate slide-left pop delay-4 uppercase text-blue-500 font-extrabold sm:text-2xl md:text-2xl lg:text-base">Panel Designing and Setup</h1>
      <p className="animate slide-left pop delay-5 text-xs  " style={{ color: 'black', marginBottom: '2.5rem' }}>
        <span className=' sm:text-l md:text-xl lg:text-base'>Our experienced engineers specialize in designing and setting 
up a variety of electrical panels,including power factor(PF) 
programmable logic controller(PLC) and custom panels uses.</span>
<span  > <p className='flex gap-2 text-red-500'>Read <p className='text-red-500'> More</p> </p></span>

      </p>
    </div>
    <div className="image-content animate slide delay-5 bg-paneldesi"></div>
    <div className="dots animate">
      <div className="dot animate slide-up delay-6"></div>
      <div className="dot animate slide-up delay-7"></div>
      <div className="dot animate slide-up delay-8"></div>
    </div>
  </div>
  <div className="text">
    <p><img className="inset" src={paneldesi} alt="" />Solar panel designing and setup offer numerous benefits, ranging from 
environmental sustainability to cost savings and energy independence. By 
harnessing the abundant energy from the sun, solar panels reduce reliance 
on fossil fuels, mitigating greenhouse gas emissions and combating climate 
change. Additionally, solar power systems often lead to long term financial 
savings through reduced electricity bills and potential incentives such as tax 
credits. Moreover, solar energy provides a reliable source of electricity, 
contributing to energy security and independence. Overall, investing in 
solar panel installation not only promotes environmental stewardship but 
also offers economic advantages and energy resilience.</p>
   
  </div>
</div>
{/* 9 */}
<div className="wrap animate pop ">
  <div className="overlay">
    <div className="overlay-content animate slide-left delay-2">
      <h1 className="animate slide-left pop delay-4 uppercase text-blue-500 font-extrabold sm:text-2xl md:text-2xl lg:text-base">Product sales</h1>
      <p className="animate slide-left pop delay-5 " style={{ color: 'black', marginBottom: '2.5rem' }}>
        <span  className='sm:text-l md:text-l lg:text-base'>Experience the power of solar with our top-quality products. 
        Shop now and start saving on energy costs...</span>
        <span  > <p className='flex gap-2 text-red-500'>Read <p className='text-red-500'> More</p> </p></span>

      </p>
    </div>
    <div className="image-content animate slide delay-5 bg-product"></div>
    <div className="dots animate">
      <div className="dot animate slide-up delay-6"></div>
      <div className="dot animate slide-up delay-7"></div>
      <div className="dot animate slide-up delay-8"></div>
    </div>
  </div>
  <div className="text">
    <p><img className="inset" src={product} alt="" />Investing in solar energy can prove highly beneficial on multiple fronts. 
Firstly, it offers substantial cost savings by significantly reducing or even 
eliminating electricity bills, providing a stable and predictable energy source 
over the long term. Secondly, solar energy is environmentally friendly, 
contributing to reduced carbon emissions and mitigating climate change. 
Additionally, installing solar panels enhances property value, offering a 
return on investment for homeowners and businesses alike. Moreover, with 
advancements in technology and government incentives, the initial 
investment in solar power is becoming increasingly affordable, making it a 
financially attractive option for individuals and organizations looking to 
embrace renewable energy solutions.</p>
   
  </div>
</div>

</div>



   

  
 



    
    
    </>
  )
}

export default ServicesDetails
