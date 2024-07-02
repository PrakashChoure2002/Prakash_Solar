import { useState } from 'react';

export default function Calcu1() {
  const [isOpen, setIsOpen] = useState(false);
  const [calculatedResult, setCalculatedResult] = useState(null);
  const [formData, setFormData] = useState({
    area: '',
    areaUnit: '1', // Default to Sq.m.
    percentArea: '',
    electricityCost: '',
    state: '',
    subsidyPercentage: '',
    customerCategory: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUnitChange = (e) => {
    setFormData({ ...formData, unit: e.target.value });
  };

  const calculateSolarPotential = () => {
    // Parse form data as numbers
    const area = parseFloat(formData.area);
    
    const percentArea = parseFloat(formData.percentArea) / 100; // Convert percentage to decimal
    console.log()
    const cost = parseFloat(formData.electricityCost);
    
    const subsidyPercentage = parseFloat(formData.subsidyPercentage) / 100; // Convert percentage to decimal
    console.log(area,percentArea,cost,subsidyPercentage)
  
    // Check if any of the inputs are not numbers
    if (isNaN(area) || isNaN(percentArea) || isNaN(cost) || isNaN(subsidyPercentage)) {
      return null; // Return null if any input is not a number
    }
  
    // Convert area to Sq.m. if it's in Sq.Feet
    const areaInSqM = formData.unit === '1' ? area : area * 0.092903;
  
    // Calculate solar potential
    const solarPotential = areaInSqM * percentArea * cost * (1 - subsidyPercentage);
    return solarPotential;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const solarPotential = calculateSolarPotential();
  
    // Check if solarPotential is a number before calling toFixed
    if (typeof solarPotential === 'number' && !isNaN(solarPotential)) {
      setCalculatedResult(solarPotential.toFixed(2)); // Convert to string with 2 decimal places
    } else {
      // Handle the case where solarPotential is not a number
      console.error('Error: Calculated result is not a number.');
      setCalculatedResult('Error: Unable to calculate.');
    }
  };
  
  return (
    <>
    <div className="p-4 text-center bg-blue-100 relative">
    <div className="mx-4 md:mx-24 text-center space-x-2 md:space-x-5 flex flex-wrap justify-center">
        <h1 className="text-blue-500 font-bold text-2xl sm:text-6xl  lg:text-5xl">Calculate</h1>
        <h1 className="text-black text-2xl sm:text-6xl md:text-6xl lg:text-5xl">How Much Money</h1>
    </div>
    <h3 className="text-black font-bold text-xl sm:text-6xl md:text-5xl mt-4">Can We Save</h3>
    <span className="text-black text-lg sm:text-4xl md:text-4xl lg:text-3xl mt-2 block">
        Go to our savings calculator
    </span>
    <div className="flex justify-center mt-4 mx-4">
    <button
        className="px-4 sm:text-4xl md:text-4xl lg:text-3xl py-2 font-bold text-white bg-blue-500 rounded-xl hover:bg-blue-700"
        onClick={() => setIsOpen(true)}
      >
         Calculate
      </button>    </div>
</div>
      {/* <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={() => setIsOpen(true)}
      >
        Open Solar Rooftop Calculator
      </button> */}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            {/* Overlay */}
            <div className="fixed inset-0 z-40 bg-black opacity-50"></div>

            {/* Modal content */}
            <div className="z-50 relative  flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-start justify-between  p-5 border-b border-solid border-gray-300 rounded-t">
                {/* <h3 className="text-3xl  font-semibold sm:text-4xl md:text-4xl lg:text-3xl">Solar Rooftop Calculator</h3> */}
                <button
                  className="float-right p-1 ml-auto text-3xl font-semibold leading-none bg-transparent border-0 text-black opacity-5 outline-none focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="block h-6 w-6 text-2xl text-black bg-transparent outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>

              {/* Body */}
              <div className="relative p-6 flex-auto">
                {/* Your form fields will go here */}
                <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 sm:text-2xl md:text-2xl lg:text-base" htmlFor="area">
            Enter total rooftop area:
          </label>
          <input
            className="appearance-none  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white sm:text-2xl md:text-2xl lg:text-base  focus:border-gray-500"
            id="area"
            type="number"
            name="area"
            min="0"
            required
            onChange={handleInputChange}
          />
          <div className="mt-4">
            <label className="inline -flex sm:text-2xl md:text-l lg:text-base items-center">
              <input
                type="radio"
                name="areaUnit"
                value="0.092903"
                required
                onChange={handleUnitChange}
              />
              <span className="ml-2">Sq.Feet</span>
            </label>
            <label className="inline-flex sm:text-base md:text-2xl lg:text-base items-center ml-6">
              <input
                type="radio"
                name="areaUnit"
                value="1"
                checked={formData.areaUnit === '1'}
                required
                onChange={handleUnitChange}
              />
              <span className="ml-2">Sq.m.</span>
            </label>
          </div>
        </div>
        <div className="w-full px-3 sm:text-2xl md:text-2xl lg:text-base">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 sm:text-2xl md:text-2xl lg:text-base" htmlFor="percentArea">
            % of rooftop area available:
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="percentArea"
            type="number"
            name="percentArea"
            min="1"
            max="100"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 sm:text-2xl md:text-2xl lg:text-base" htmlFor="electricityCost">
            What is your average electricity cost? (Rs./kWh)
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="electricityCost"
            type="number"
            name="electricityCost"
            min="1"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 sm:text-2xl md:text-2xl lg:text-base" htmlFor="state">
            Select your state:
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full sm:text-2xl md:text-2xl lg:text-base bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="state"
              name="state"
              required
              onChange={handleInputChange}
            >
              
						<option value="" selected disabled hidden>Select State</option>
						<option value="4.6">ANDAMAN and NICOBAR ISLANDS</option>
						<option value="5">ANDHRA PRADESH</option>
						<option value="4.1">ARUNACHAL PRADESH</option>
						<option value="4.1">ASSAM</option>
						<option value="4.6">BIHAR</option>
						<option value="4.6">CHANDIGARH</option>
						<option value="5">CHHATTISGARH</option>
						<option value="5">DADRA AND NAGAR HAVELI</option>
						<option value="5">DAMAN AND DIU</option>
						<option value="5">GOA</option>
						<option value="5">GUJARAT</option>
						<option value="4.6">HARYANA</option>
						<option value="4.1">HIMACHAL PRADESH</option>
						<option value="4.1">JAMMU AND KASHMIR</option>
						<option value="4.6">JHARKHAND</option>
						<option value="5">KARNATAKA</option>
						<option value="5">KERALA</option>
						<option value="5">LAKSHADWEEP</option>
						<option value="5">MADHYA PRADESH</option>
						<option value="5">MAHARASHTRA</option>
						<option value="4.1">MANIPUR</option>
						<option value="4.1">MEGHALAYA</option>
						<option value="4.1">MIZORAM</option>
						<option value="4.1">NAGALAND</option>
						<option value="4.6">NCT OF DELHI</option>
						<option value="4.6">ORISSA</option>
						<option value="5">PUDUCHERRY</option>
						<option value="4.6">PUNJAB</option>
						<option value="5">RAJASTHAN</option>
						<option value="4.1">SIKKIM</option>
						<option value="5">TAMIL NADU</option>
						<option value="5">TELANGANA</option>
						<option value="4.1">TRIPURA</option>
						<option value="4.6">UTTAR PRADESH</option>
						<option value="4.1">UTTARAKHAND</option>
						<option value="4.6">WEST BENGAL</option>	
					
            </select>
          </div>
        </div>
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 sm:text-2xl md:text-2xl lg:text-base" htmlFor="subsidyPercentage">
            Enter subsidy Percentage:
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="subsidyPercentage"
            type="number"
            name="subsidyPercentage"
            min="0"
            max="70"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 sm:text-2xl md:text-2xl lg:text-base" htmlFor="customerCategory">
            Select customer category:
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="customerCategory"
              name="customerCategory"
              required
              onChange={handleInputChange}
            >
             
						<option value="" selected disabled hidden>Select Catagory of Customer</option>
  						<option value="1">RESIDENTIAL</option>
  						<option value="1">INSTITUTIONAL</option>			
  						<option value="0">INDUSTRIAL</option>
  						<option value="0">COMMERCIAL</option>
  						<option value="0">GOVERMENT</option>
  						<option value="1">SOCIAL SECTOR</option>
					
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="shadow sm:text-2xl md:text-2xl lg:text-base bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Calculate
        </button>
      </div>
    </form>
    {calculatedResult !== null && (
          <div className="text-center mt-4">
            <p className="text-lg sm:text-4xl lg:text-4xl ">
              Your Solar Potential is: <strong>{parseFloat(calculatedResult).toFixed(2)} kWh</strong>
            </p>
          </div>
        )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                <button
                  className="text-red-500 sm:text-2xl md:text-2xl lg:text-base background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
