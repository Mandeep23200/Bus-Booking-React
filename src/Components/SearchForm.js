import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = ({ setBuses }) => {
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Static bus data to simulate the backend
  const buses = [
    { id: 1, name: 'Bus 1', departureCity: 'Mumbai', arrivalCity: 'Delhi', departureTime: '10:00 AM', arrivalTime: '6:00 PM', price: 500 },
    { id: 2, name: 'Bus 2', departureCity: 'Bangalore', arrivalCity: 'Chennai', departureTime: '9:00 AM', arrivalTime: '3:00 PM', price: 400 },
    { id: 3, name: 'Bus 3', departureCity: 'Chandigarh', arrivalCity: 'Delhi', departureTime: '11:00 AM', arrivalTime: '7:00 PM', price: 600 }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!from || !to) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    setLoading(true);
    setError('');

    // Filter buses based on departure and arrival cities
    const filteredBuses = buses.filter(bus => bus.departureCity === from && bus.arrivalCity === to);
    
    if (filteredBuses.length === 0) {
      setError('No buses found for the selected route.');
      setBuses([]);
    } else {
      setBuses(filteredBuses);
      navigate('/buslist'); // navigate to BusList
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-center text-2xl font-bold mb-6">Find Your Bus</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <label className="m-2 block text-gray-700">
          Departure City
          <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full mt-3 p-1 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-gray-300">
            <option value="">Choose a departure city</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Delhi">Delhi</option>
          </select>
        </label>
        <label className="m-2 block text-gray-700">
          Arrival City
          <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full mt-3 p-1 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-gray-300">
            <option value="">Choose an arrival city</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Delhi">Delhi</option>
          </select>
        </label>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full py-2 mt-4 bg-black text-white rounded hover:bg-gray-700">
          {loading ? 'Loading...' : 'Search Buses'}
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
