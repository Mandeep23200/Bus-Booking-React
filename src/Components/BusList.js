import React from "react";
import { useNavigate, Link } from 'react-router-dom';

const BusList = ({ buses }) => {
  const navigate = useNavigate();

  const handleBookNow = (bus) => {
    navigate(`/booking/${bus.id}`, { state: { bus } });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Available Buses</h2>
      {buses.length === 0 ? (
        <p className="text-center text-gray-600">No buses available for the selected route.</p>
      ) : (
        <ul className="space-y-6">
          {buses.map((bus) => (
            <li key={bus.id} className="p-4 border border-gray-300 rounded-lg shadow-sm">
              <p className="text-xl font-semibold mt-3">{bus.name}</p>
              <p className="text-gray-600 mt-3">Departure Time: {bus.departureTime}</p>
              <p className="text-gray-600 mt-3">Arrival Time: {bus.arrivalTime}</p>
              <p className="text-lg font-bold text-green-600 mt-3">Price: ₹{bus.price}</p>
              <Link to='/'>
                <button className="mr-5 px-4 mt-9 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">Go Back</button>
              </Link>
              <button className="mr-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => handleBookNow(bus)}>Book Now</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BusList;
