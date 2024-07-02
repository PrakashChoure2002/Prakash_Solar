import React, { useState } from 'react';

const Test1 = () => {
  // State hooks for form inputs
  const [category, setCategory] = useState('');
  const [monthlyBill, setMonthlyBill] = useState('');
  const [roofArea, setRoofArea] = useState('');
  const [investmentArea, setInvestmentArea] = useState('');
  const [plantCapacity, setPlantCapacity] = useState('');
  const [sanctionLoad, setSanctionLoad] = useState('');
  const [results, setResults] = useState(null);

  // Function to handle the calculation
  const calculate = () => {
    // Perform your calculation logic here
    // For example, let's just sum up all numerical inputs
    const total = Number(monthlyBill) + Number(roofArea) + Number(investmentArea) + Number(plantCapacity) + Number(sanctionLoad);
    setResults(total);
  };

  return (
    <div className="calculator-container p-4">
      <div className="form-section mb-4">
        <h2 className="text-lg font-bold mb-2">Please enter the following details</h2>
        <div className="mb-2">
          <label htmlFor="category" className="block mb-1">Your Category:</label>
          <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded">
            {/* Add category options here */}
            <option value="" selected disabled hidden>Select Catagory of Customer</option>
  						<option value="1">RESIDENTIAL</option>
  						<option value="1">INSTITUTIONAL</option>			
  						<option value="0">INDUSTRIAL</option>
  						<option value="0">COMMERCIAL</option>
  						<option value="0">GOVERMENT</option>
  						<option value="1">SOCIAL SECTOR</option>
          </select>
        </div>

        <div className="mb-2">
          <label htmlFor="monthly-bill" className="block mb-1">Average Monthly Bill (Rs):</label>
          <input type="number" id="monthly-bill" name="monthly-bill" value={monthlyBill} onChange={(e) => setMonthlyBill(e.target.value)} className="p-2 border rounded"/>
        </div>

        {/* Add more fields as necessary */}
        
        <button type="button" onClick={calculate} className="bg-blue-500 text-white p-2 rounded">CALCULATE</button>
      </div>

      <div className="form-section optional mb-4">
        <h2 className="text-lg font-bold mb-2">Enter Details for More Accurate Information (Optional)</h2>
        <div className="mb-2">
          <label htmlFor="roof-area" className="block mb-1">Total Available Roof Top Area:</label>
          <input type="number" id="roof-area" name="roof-area" value={roofArea} onChange={(e) => setRoofArea(e.target.value)} className="p-2 border rounded"/>
        </div>

        {/* Add more fields as necessary */}
      </div>

      {/* The calculated results can be displayed in this section */}
      {results !== null && (
        <div className="results-section p-4 border rounded mt-4">
          <h3 className="text-lg font-bold mb-2">Calculation Results:</h3>
          <p>Total: {results}</p>
        </div>
      )}
    </div>
  );
};

export default Test1;
