import React, { useState } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';

const BookingPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { bus } = location.state || {};
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!bus || bus.id.toString() !== id) {
    return <p>Bus not found.</p>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the payment page with the bus and user details
    navigate('/payment', { state: { bus, name, email, phone } });
  };

  return (
    <div className="max-w-md mx-auto mt-4 p-5 border rounded-lg shadow-lg bg-white">
      <h2 className="text-center text-2xl font-bold mb-4">Booking Summary</h2>
      <p className="font-semibold">Selected Bus: <span className="ml-4">{bus.name}</span></p>
      <p>Departure City: <span className="ml-3">{bus.departureCity}</span></p>
      <p>Arrival City: <span className="ml-2">{bus.arrivalCity}</span></p>
      <p>Departure Time: <span className="ml-2">{bus.departureTime}</span></p>
      <p>Arrival Time: <span className="ml-1">{bus.arrivalTime}</span></p>
      <p className="font-bold text-green-600 mt-2">Price: ₹{bus.price}</p>
      <h4 className="text-lg font-semibold mt-4">Passenger Information</h4>
      <form onSubmit={handleSubmit} className="space-y-4 mt-2">
        <label className="block">
          Name:
          <input 
            type="text" 
            className="w-full p-1 mt-2 border border-gray-300 rounded" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            className="w-full p-1 mt-2 border border-gray-300 rounded" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label>
          Phone:
          <input 
            type="tel" 
            className="w-full p-1 mt-2 border border-gray-300 rounded" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
        </label>
        <div className="flex justify-between">
          <Link to='/buslist'>
            <button className="px-4 py-2 mt-3 bg-gray-300 text-black rounded">Go Back</button>
          </Link>
          <button type="submit" className="px-4 ml-5 py-2 mt-3 bg-blue-600 text-white rounded">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
};

export default BookingPage;
