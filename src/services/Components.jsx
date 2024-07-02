import React from 'react';
import home from '../public/assets/home.png'
import after from '../public/assets/after.png'
import commercial from '../public/assets/commercial.png'
import panel from '../public/assets/panel.png'
import Lt from '../public/assets/Lt.png'
import Edcess from '../public/assets/Edcess.png'
import Dg from '../public/assets/Dg.png'
import paneldesi from '../public/assets/paneldesi.png'
import product from '../public/assets/product.png'
import round1 from '../public/assets/round1.png'
import round2 from '../public/assets/round2.jpg'
import round3 from '../public/assets/round3.png'
import round4 from '../public/assets/round4.png'
import round5 from '../public/assets/round5.jpg'
import round6 from '../public/assets/round6.png'


const Components = () => {
  return (
    <>
    <div className="  top-[378px] left-[38px] w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:gap-10 ">
      {[
        {
          title: 'Home Installation',
          description: 'Elevate your home with seamless solar panel installation for reliable, eco-friendly energy solutions.',
          image: home,
          image1:round1
          
          
        },
        {
          title: 'Commercial Installation',
          description: 'Power up your business with our professional solar installation services, tailored to meet your commercial energy needs.',
          image: commercial,
          image1:round2
         
        },
        {
          title: 'Panel Cleaning',
          description: 'Restore peak performance to your solar panels with our professional cleaning services.',
          image: panel,
          image1:round3
         
        },
        {
          title: 'LT and HT Connection Assistance',
          description: 'With expertise in low tension (LT) and high tension (HT) connections, we ensure smooth integration of solar power systems with existing electrical infrastructure.',
          image: Lt,
          image1:round4
         
        },
        {
          title: 'ED Cess Recovery Assistance',
          description: 'We provide expert guidance and assistance in recovering excess electricity duty (ED) and other applicable charges, helping clients optimize financial benefits from their solar energy usage.',
          image: Edcess,
          image1:round5
          
        },
        {
          title: 'DG Setup and Synchronization',
          description: 'We offer comprehensive solutions for setting up and synchronizing diesel generator (DG) systems with solar power systems, providing seamless transitions and uninterrupted power supply.',
          image: Dg,
          image1:round3
          
        },
        {
          title: 'Panel Designing and Setup',
          description: 'Our experienced engineers specialize in designing and setting up a variety of electrical panels, including power factor (PF), programmable logic controller (PLC), and custom panels tailored to specific requirements.',
          image: paneldesi,
          image1:round2
          
        },
        {
          title: 'After Sale Services',
          description: 'Experience peace of mind with our comprehensive after-sales services, ensuring your solar investment continues to shine for years to come.',
          image: after,
          image1:round5
          
        },
        {
            title: 'Product sales',
            description:"Experience the power of solar with our top quality products. Shop now and start saving on energy costs!",
            image: product,
            image1:round4
            
          }
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center  text-left w-[308.7px] lg:h-[430.3px] sm:h-[650.3px] relative "
          
        >
          <div className="  h-full  w-full rounded-tl-[30.46px] rounded-tr-[70.74px] rounded-b-[20.46px] bg-white overflow-hidden shadow-lg ">
            <img
              className="w-full h-[232.4px] object-cover rounded-tl-[30.46px] rounded-tr-[70.74px] rounded-bl-[50.74px]"
              alt=""
              src={item.image}
            />
            <div className="px-4 py-2">
              <div className="font-extrabold text-lg leading-[22px] capitalize sm:text-2xl lg:text-lg  ">
                {item.title}
              </div>
              <i className="  absolute text-wrap  text-sm leading-[20.17px] capitalize block mt-.5 sm:text-2xl lg:text-sm ">
                {item.description}
              </i>
              <img
                className="absolute top-[166.6px] left-[3px] w-[67.1px] h-[67.1px] rounded-full "
                alt=""
                src={item.image1}
              />
            </div>
          </div>
        </div>
      ))}


</div>


<div className=" justify-center items-center">
<div className="w-full py-12 lg:w-[758px] flex flex-col lg:flex-row gap-6 lg:gap-24 items-start justify-between p-2.5 box-border mt-[-11px] text-lg text-black">
    
  <div className="w-full lg:w-[641px] relative leading-[46.8px] inline-block shrink-0  sm:text-3xl lg:text-xl rounded-b-lg text-justify">
    <div className="">
    <h1 className='mx-10 py-10 text-blue-700 font-extrabold font lg:text-3xl sm:text-4xl md:text-3xl capitalize'>HOME INSTALLATION</h1>
    </div>
  
    Installing solar panels at home can be highly beneficial in several ways. 
Firstly, it offers substantial savings on energy bills over time as it harnesses 
free, renewable sunlight to generate electricity. Secondly, solar power 
reduces reliance on fossil fuels, thus mitigating carbon emissions and 
contributing to a cleaner environment. Additionally, solar panels increase 
the value of your property, making it a wise long term investment. 
Moreover, with various incentives and tax credits available, the initial cost of 
installation can be significantly offset, making solar energy an economically 
savvy choice for homeowners.
  </div>
  <div className="flex flex-col items-center justify-start gap-4 lg:gap-[16px] py-16 text-base">
    <img
      className="w-full lg:w-[519px] h-auto lg:h-[345px] object-cover"
      alt=""
      src={home}
    />
    <i className="w-full lg:w-[490px] leading-[26.2px] capitalize inline-block h-auto lg:h-[103px] shrink-0 sm:text-2xl lg:text-xl">
      "Elevate your home with seamless solar panel installation for reliable, eco-friendly energy solutions."
    </i>
  </div>
</div>

<div className="w-full  lg:w-[758px] flex flex-col lg:flex-row gap-6 lg:gap-24 items-start justify-between p-2.5 box-border mt-[-11px] text-lg text-black">
  <div className="flex flex-col items-center justify-start gap-4 lg:gap-[16px] text-base">
  <div className="flex justify-start sm:text-3xl lg:text-xl">
    <h1 className=' py-10 text-blue-700 font-extrabold font lg:text-3xl sm:text-4xl md:text-3xl capitalize'> COMMERCIAL INSTALLATION</h1>
    </div>
    <img
      className="w-full lg:w-[519px] h-auto lg:h-[345px] object-cover"
      alt=""
      src={commercial}
    />
    <i className="w-full lg:w-[490px] leading-[26.2px] capitalize inline-block h-auto lg:h-[103px] shrink-0 sm:text-2xl lg:text-xl">
      "Power up your business with our professional solar installation services, tailored to meet 
      your commercial energy needs."
    </i>
  </div>
  <div className="w-full lg:w-[641px] relative leading-[46.8px] inline-block shrink-0 sm:text-3xl py-36 mx-12 lg:text-xl text-justify ml-5 ">
  Installing solar panels for commercial purposes offers numerous benefits. 
Firstly, it significantly reduces operating costs by providing a sustainable 
and reliable source of electricity, shielding businesses from fluctuating 
energy prices. Additionally, it enhances corporate social responsibility 
efforts by reducing carbon footprint and demonstrating commitment to 
environmental sustainability. Furthermore, solar installations often qualify 
for tax incentives and rebates, offering potential financial savings and 
enhancing the overall return on investment for businesses. Overall, adopting 
solar energy can bolster the bottom line, enhance brand reputation, and 
contribute to a cleaner, more sustainable future.
  </div>
</div>

{/* 3-4 */}
<div className="w-full py-12 lg:w-[758px] flex flex-col lg:flex-row gap-6 lg:gap-24 items-start justify-between p-2.5 box-border mt-[-11px] text-lg text-black">
    
  <div className="w-full lg:w-[641px] relative leading-[46.8px] inline-block shrink-0 sm:text-3xl lg:text-xl text-justify">
    <div className="">
    <h1 className='mx-10 py-10 text-blue-700 font-extrabold font lg:text-3xl sm:text-4xl md:text-3xl '>PANEL CLEANING</h1>
    </div>
  
    Regular cleaning of solar panels can be highly beneficial in maximizing their 
energy efficiency and longevity. Dust, dirt, bird droppings, and other debris 
can accumulate on the surface of solar panels over time, obstructing 
sunlight and reducing their ability to generate electricity. By keeping panels 
clean, you ensure that they can absorb the maximum amount of sunlight, 
thus optimizing energy production. Additionally, clean panels are less prone 
to damage and corrosion, prolonging their lifespan and reducing the need 
for costly repairs or replacements. Therefore, implementing a regular panel 
cleaning regimen can significantly enhance the overall performance and 
durability of solar installations, ultimately leading to greater energy savings 
and environmental benefits.
  </div>
  <div className="flex flex-col items-center justify-start gap-4 lg:gap-[16px] py-16 text-base">
    <img
      className="w-full lg:w-[519px] h-auto lg:h-[345px] object-cover"
      alt=""
      src={panel}
    />
    <i className="w-full lg:w-[490px] leading-[26.2px] capitalize inline-block h-auto lg:h-[103px] shrink-0 sm:text-2xl lg:text-xl">
    "Restore peak performance to your solar panels with our 
    professional cleaning services".
    </i>
  </div>
</div>

<div className="w-full  lg:w-[758px] flex flex-col lg:flex-row gap-6 lg:gap-24 items-start justify-between p-2.5 box-border mt-[-11px] text-lg text-black">
  <div className="flex flex-col items-center justify-start gap-4 lg:gap-[16px] text-base">
  <div className="flex justify-start sm:text-3xl lg:text-xl">
    <h1 className=' py-10 text-blue-700 font-extrabold font lg:text-3xl sm:text-4xl md:text-3xl text-transform: uppercase'> LT and HT Connection Assistance</h1>
    </div>
    <img
      className="w-full lg:w-[519px] h-auto lg:h-[345px] object-cover"
      alt=""
      src={Lt}
    />
    <i className="w-full lg:w-[490px] leading-[26.2px] capitalize inline-block h-auto lg:h-[103px] shrink-0 sm:text-2xl lg:text-xl">
    We offer comprehensive solutions for setting up and 
synchronizing diesel generator (DG) systems with solar power 
systems, providing seamless transitions and uninterrupted power 
supply. 
    </i>
  </div>
  <div className="w-full lg:w-[641px] relative leading-[46.8px] inline-block shrink-0 sm:text-3xl py-24 mx-12 lg:text-xl text-justify ml-5  ">
    Switching to solar power for both low tension (LT) and high tension
    (HT) connections can offer significant benefits. Solar energy is
    renewable, sustainable, and environmentally friendly, reducing
    reliance on fossil fuels and decreasing greenhouse gas emissions. It
    provides a reliable source of electricity, especially in areas with
    erratic power supply, ensuring uninterrupted energy access.
    Additionally, solar power can lead to long-term cost savings by
    reducing electricity bills and offering potential revenue through
    net metering or selling excess energy back to the grid. Embracing
    solar energy in both LT and HT connections not only promotes energy
    independence but also contributes to a greener and more sustainable
    future.
  </div>
</div>
{/* 5-6 */}
<div className="w-full py-12 lg:w-[758px] flex flex-col lg:flex-row gap-6 lg:gap-24 items-start justify-between p-2.5 box-border mt-[-11px] text-lg text-black">
    
  <div className="w-full lg:w-[641px] relative leading-[46.8px] inline-block shrink-0 sm:text-3xl lg:text-xl text-justify">
    <div className="">
    <h1 className='mx-10 py-10 text-blue-700 font-extrabold font lg:text-3xl sm:text-4xl md:text-3xl text-transform:uppercase'> ED CESS RECOVERY ASSISTANCE
    </h1>
    </div>
  
    Ed Cess Recovery Assistance can benefit from solar energy in multiple ways. 
By integrating solar power solutions, such as solar panels, into their 
recovery facilities, they can significantly reduce their energy costs while 
also minimizing their carbon footprint. Solar energy provides a sustainable 
and renewable source of power, allowing Ed Cess Recovery Assistance to 
operate more efficiently and environmentally responsibly. Additionally, 
adopting solar energy can enhance their reputation as an organization 
committed to sustainability, potentially attracting more clients and support 
from environmentally conscious individuals and businesses.
  </div>
  <div className="flex flex-col items-center justify-start gap-4 lg:gap-[16px] py-16 text-base">
    <img
      className="w-full lg:w-[519px] h-auto lg:h-[345px] object-cover"
      alt=""
      src={Edcess}
    />
    <i className="w-full lg:w-[490px] leading-[26.2px] capitalize inline-block h-auto lg:h-[103px] shrink-0 sm:text-2xl lg:text-xl">
    We provide expert guidance and assistance in recovering excess 
electricity duty (ED) and other applicable charges, helping 
clients optimize financial benefits from their solar energy 
usage.
    </i>
  </div>
</div>

<div className="w-full  lg:w-[758px] flex flex-col lg:flex-row gap-6 lg:gap-24 items-start justify-between p-2.5 box-border mt-[-11px] text-lg text-black">
  <div className="flex flex-col items-center justify-start gap-4 lg:gap-[16px] text-base">
  <div className="flex justify-start sm:text-3xl lg:text-xl">
    <h1 className=' py-10 text-blue-700 font-extrabold font lg:text-3xl sm:text-4xl md:text-3xl Edcess text-transform: uppercase'> DG Setup and Synchronization</h1>
    </div>
    <img
      className="w-full lg:w-[519px] h-auto lg:h-[345px] object-cover"
      alt=""
      src={Dg}
    />
    <i className="w-full lg:w-[490px] leading-[26.2px] capitalize inline-block h-auto lg:h-[103px] shrink-0 sm:text-2xl lg:text-xl">
    With expertise in low tension (LT) and high tension (HT) 
connections, we ensure smooth integration of solar power 
systems with existing electrical infrastructure
    </i>
  </div>
  <div className="w-full lg:w-[641px] relative leading-[46.8px] inline-block shrink-0 sm:text-3xl py-24 mx-12 lg:text-xl text-justify ml-5  ">
  Dynamic Geometry (DG) setup and synchronization can significantly benefit 
solar energy infrastructure. By utilizing DG setup, which involves the precise 
arrangement of solar panels and other components based on mathematical 
models, solar installations can maximize energy production. 
Synchronization ensures optimal alignment with the sun s position 
throughout the day, enhancing efficiency and output. This combination of 
DG setup and synchronization enhances the overall performance of solar 
energy systems, increasing their viability as a sustainable and reliable source 
of electricity while maximizing returns on investment for stakeholders.
  </div>
</div>

{/* 7-8 */}

<div className="w-full py-12 lg:w-[758px] flex flex-col lg:flex-row gap-6 lg:gap-24 items-start justify-between p-2.5 box-border mt-[-11px] text-lg text-black">
    
  <div className="w-full lg:w-[641px] relative leading-[46.8px] inline-block shrink-0 sm:text-3xl lg:text-xl text-justify">
    <div className="">
    <h1 className='mx-10 py-10 text-blue-700 font-extrabold font lg:text-3xl sm:text-4xl md:text-3xl text-transform: uppercase'>Panel Designing and Setup</h1>
    </div>
  
    Solar panel designing and setup offer numerous benefits, ranging from 
environmental sustainability to cost savings and energy independence. By 
harnessing the abundant energy from the sun, solar panels reduce reliance 
on fossil fuels, mitigating greenhouse gas emissions and combating climate 
change. Additionally, solar power systems often lead to long term financial 
savings through reduced electricity bills and potential incentives such as tax 
credits. Moreover, solar energy provides a reliable source of electricity, 
contributing to energy security and independence. Overall, investing in 
solar panel installation not only promotes environmental stewardship but 
also offers economic advantages and energy resilience
  </div>
  <div className="flex flex-col items-center justify-start gap-4 lg:gap-[16px] py-16 text-base">
    <img
      className="w-full lg:w-[519px] h-auto lg:h-[345px] object-cover"
      alt=""
      src={paneldesi}
    />
    <i className="w-full lg:w-[490px] leading-[26.2px] capitalize inline-block h-auto lg:h-[103px] shrink-0 sm:text-2xl lg:text-xl">
    Our experienced engineers specialize in designing and setting 
up a variety of electrical panels, including power factor (PF), 
programmable logic controller (PLC), and custom panels tailored 
to specific requirements.
    </i>
  </div>
</div>

<div className="w-full  lg:w-[758px] flex flex-col lg:flex-row gap-6 lg:gap-24 items-start justify-between p-2.5 box-border mt-[-11px] text-lg text-black">
  <div className="flex flex-col items-center justify-start gap-4 lg:gap-[16px] text-base">
  <div className="flex justify-start sm:text-3xl lg:text-xl">
    <h1 className=' py-10 text-blue-700 font-extrabold font lg:text-3xl sm:text-4xl md:text-3xl text-transform: uppercase'> After Sale Services</h1>
    </div>
    <img
      className="w-full lg:w-[519px] h-auto lg:h-[345px] object-cover"
      alt=""
      src={after}
    />
    <i className="w-full lg:w-[490px] leading-[26.2px] capitalize inline-block h-auto lg:h-[103px] shrink-0 sm:text-2xl lg:text-xl">
    "Experience peace of mind with our comprehensive after-sales 
services, ensuring your solar investment continues to shine for 
years to come."
    </i>
  </div>
  <div className="w-full lg:w-[641px] relative leading-[46.8px] inline-block shrink-0 sm:text-3xl py-24 mx-12 lg:text-xl text-justify ml-5 ">
  After sales services for solar products can be highly beneficial in ensuring 
optimal performance, customer satisfaction, and long term sustainability. 
These services encompass maintenance, repairs, and technical support, 
which not only enhance the reliability of solar systems but also extend their 
lifespan. By offering prompt assistance and regular check ups, providers can 
address issues efficiently, maximizing energy production and minimizing 
downtime. Additionally, personalized guidance on system usage and 
efficiency improvements can help customers derive the maximum benefit 
from their investment in solar energy, fostering trust and loyalty in the 
brand. Ultimately, robust after sales services contribute to the overall 
success and widespread adoption of solar technology
  </div>
</div>

<div className="w-full py-12 lg:w-[758px] flex flex-col lg:flex-row gap-6 lg:gap-24 items-start justify-between p-2.5 box-border mt-[-11px] text-lg text-black">
    
  <div className="w-full lg:w-[641px] relative leading-[46.8px] inline-block shrink-0 sm:text-3xl lg:text-xl text-justify">
    <div className="">
    <h1 className='mx-10 py-10 text-blue-700 font-extrabold font lg:text-3xl sm:text-4xl md:text-3xl text-transform: uppercase'>Product sales</h1>
    </div>
  
    Investing in solar energy can prove highly beneficial on multiple fronts. 
Firstly, it offers substantial cost savings by significantly reducing or even 
eliminating electricity bills, providing a stable and predictable energy source 
over the long term. Secondly, solar energy is environmentally friendly, 
contributing to reduced carbon emissions and mitigating climate change. 
Additionally, installing solar panels enhances property value, offering a 
return on investment for homeowners and businesses alike. Moreover, with 
advancements in technology and government incentives, the initial 
investment in solar power is becoming increasingly affordable, making it a 
financially attractive option for individuals and organizations looking to 
embrace renewable energy solutions
  </div>
  <div className="flex flex-col items-center justify-start gap-4 lg:gap-[16px] py-16 text-base">
    <img
      className="w-full lg:w-[519px] h-auto lg:h-[345px] object-cover"
      alt=""
      src={product}
    />
    <i className="w-full lg:w-[490px] leading-[26.2px] capitalize inline-block h-auto lg:h-[103px] shrink-0 sm:text-2xl lg:text-xl">
    "Experience the power of solar with our top-quality products. 
    Shop now and start saving on energy costs!"
    </i>
  </div>
</div>
</div>





</>




      
  );
};

export default Components;
