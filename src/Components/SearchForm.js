import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css'; 

const SearchForm = ({ setBuses }) => {
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [date, setDate] = useState(null);

  // Static bus data to simulate the backend
  const buses = [
    { id: 1, name: 'Silver Wheels ', departureCity: 'Mumbai', arrivalCity: 'Delhi', departureTime: '10:00 AM', arrivalTime: '6:00 PM', price: 500 },
    { id: 2, name: 'Travel Titan ', departureCity: 'Mumbai', arrivalCity: 'Bangalore', departureTime: '10:00 AM', arrivalTime: '6:00 PM', price: 500 },
    { id: 3, name: 'Journey Joyride ', departureCity: 'Mumbai', arrivalCity: 'Chandigarh', departureTime: '10:00 AM', arrivalTime: '6:00 PM', price: 500 },
    { id: 4, name: 'Express Explorer', departureCity: 'Mumbai', arrivalCity: 'Chennai', departureTime: '10:00 AM', arrivalTime: '6:00 PM', price: 500 },

    { id: 5, name: 'Golden Route', departureCity: 'Bangalore', arrivalCity: 'Chennai', departureTime: '9:00 AM', arrivalTime: '3:00 PM', price: 400 },
    { id: 6, name: 'Comfort Cruiser', departureCity: 'Bangalore', arrivalCity: 'Chandigarh', departureTime: '9:00 AM', arrivalTime: '3:00 PM', price: 400 },
    { id: 7, name: 'Wanderlust Wheels', departureCity: 'Bangalore', arrivalCity: 'Delhi', departureTime: '9:00 AM', arrivalTime: '3:00 PM', price: 400 },
    { id: 8, name: 'Sunset Shuttle', departureCity: 'Bangalore', arrivalCity: 'Mumbai', departureTime: '11:00 AM', arrivalTime: '7:00 PM', price: 600 },

    { id: 9, name: 'Adventure Express', departureCity: 'Chandigarh', arrivalCity: 'Mumbai', departureTime: '11:00 AM', arrivalTime: '7:00 PM', price: 600 },
    { id: 10, name: 'Royal Roadways', departureCity: 'Chandigarh', arrivalCity: 'Bangalore', departureTime: '11:00 AM', arrivalTime: '7:00 PM', price: 600 },
    { id: 11, name: 'Highway Hero', departureCity: 'Chandigarh', arrivalCity: 'Chennai', departureTime: '11:00 AM', arrivalTime: '7:00 PM', price: 600 },
    { id: 12, name: 'Rapid Rider', departureCity: 'Chandigarh', arrivalCity: 'Delhi', departureTime: '11:00 AM', arrivalTime: '7:00 PM', price: 600 },

    { id: 13, name: 'City Cruiser', departureCity: 'Delhi', arrivalCity: 'Mumbai', departureTime: '11:00 AM', arrivalTime: '7:00 PM', price: 600 },
    { id: 14, name: 'Wanderlust Wheels', departureCity: 'Delhi', arrivalCity: 'Chandigarh', departureTime: '11:00 AM', arrivalTime: '7:00 PM', price: 600 },
    { id: 15, name: 'Express Explorer', departureCity: 'Delhi', arrivalCity: 'Bangalore', departureTime: '11:00 AM', arrivalTime: '7:00 PM', price: 600 },
    { id: 16, name: 'Sunset Shuttle', departureCity: 'Delhi', arrivalCity: 'Mumbai', departureTime: '11:00 AM', arrivalTime: '7:00 PM', price: 600 },

    { id: 17, name: 'Royal Roadways', departureCity: 'Chennai', arrivalCity: 'Delhi', departureTime: '11:00 AM', arrivalTime: '7:00 PM', price: 600 },
    { id: 18, name: 'Wanderlust Wheels', departureCity: 'Chennai', arrivalCity: 'Bangalore', departureTime: '11:00 AM', arrivalTime: '7:00 PM', price: 600 },
    { id: 19, name: 'Comfort Cruiser', departureCity: 'Chennai', arrivalCity: 'Mumbai', departureTime: '11:00 AM', arrivalTime: '7:00 PM', price: 600 },
    { id: 20, name: 'Travel Titan ', departureCity: 'Chennai', arrivalCity: 'Chandigarh', departureTime: '11:00 AM', arrivalTime: '7:00 PM', price: 600 },




  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!from || !to || !date) {
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
        <label className="m-2 block ml-1 text-gray-700">
          Date of Travel
          <DatePicker 
            selected={date} 
            onChange={(date) => setDate(date)} 
            className="w-full mt-3 ml-4 p-1 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-gray-300"
            minDate={new Date()} // Disable past dates
            placeholderText="Select a date"
          />
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
