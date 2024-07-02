import React from 'react';

// Assuming you have icons saved in your project's 'assets' folder
import ecofriendly from '../public/assets/ecofriendly.png';
// import ecofriendly from '../assets/ecofriendly.png';
// import ecofriendly from '../assets/ecofriendly.png';
// import ecofriendly from '../assets/ecofriendly.png';

const WorkProcess = () => {
  return (
    <div className="bg-teal-100 p-8">
      <div className="text-center mb-6">
        <h2 className="sm:text-5xl lg:text-3xl  font-bold text-black">Our Work Process</h2>
        <br/>
        <h2 className="sm:text-5xl lg:text-4xl  font-extrabold text-blue-600">Four Steps Forword:</h2>
        
        <p className="text-black sm:text-3xl lg:text-xl  font-bold ">Navigating Our Process</p>
      </div>
      {/* <div className="flex flex-wrap justify-around text-black text-2xl font-bold"> */}
        <div className="relative flex justify-center items-center">
  {/* The horizontal line */}
  {/* <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-1 bg-black"></div> */}

  {/* The four divs */}
  <div className="relative  w-full sm:w-1/4  flex flex-col items-center bg-teal-100 z-10">
    <img src={ecofriendly} alt="Consult Project" className="h-12 w-12" />
    <p className="mt-2 font-semibold">Consult Project</p>
    <span className="text-sm sm:text-xl lg:text-base">Subtitle or description here</span>
  </div>
  {/* <img src="https://study.com/cimages/multimages/16/line5062014251101771877.jpg" className='h-2 w-16'/> */}
  <hr className='absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-1 bg-red-500'/>


  <div className="relative mx-20 w-full sm:w-1/4  flex flex-col items-center bg-teal-100 z-10">
    <img src={ecofriendly} alt="Installation System" className="h-12 w-12" />
    <p className="mt-2 font-semibold">Installation System</p>
    <span className="sm:text-xl lg:text-base">Subtitle or description here</span>
  </div>
  <hr className='absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-1 bg-red-500'/>

  {/* <img src="https://study.com/cimages/multimages/16/line5062014251101771877.jpg" className='h-2 w-16'/> */}
  <div className="relative mx-16 w-full sm:w-1/4  flex flex-col items-center bg-teal-100 z-10">
    <img src={ecofriendly} alt="Project Execution" className="h-12 w-12" />
    <p className="mt-2 font-semibold">Project Execution</p>
    <span className="text-sm sm:text-xl lg:text-base">Subtitle or description here</span>
  </div>
  {/* <img src="https://study.com/cimages/multimages/16/line5062014251101771877.jpg" className='h-2 w-16'/> */}
  <div className="relative w-full sm:w-1/4  flex flex-col items-center bg-teal-100 z-10">
    <img src={ecofriendly} alt="Ready To Use" className="h-12 w-12" />
    <p className="mt-2 font-semibold">Ready To Use</p>
    <span className="text-sm sm:text-xl lg:text-base">Subtitle or description here</span>
  </div>
</div>
      </div>
    // </div>
  );
};

export default WorkProcess;
