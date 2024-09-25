import React from 'react';
import { useLocation, useNavigate,Link } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus, name, email, phone } = location.state || {};

  const handlePayment = () => {
    const options = {
      key: 'rzp_test_dTOX8wT6UbnsmG', // Replace with your Razorpay key ID
      amount: bus.price * 100, // Convert price to paise
      currency: 'INR',
      name: 'Bus Booking',
      description: 'Booking for ' + bus.name,
     
      handler: function (response) {
        // Handle payment success
        console.log('Payment Success:', response);
        alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
        // Redirect to a success page or update your server
        navigate('/success', { state: { bus, name, email, phone, paymentId: response.razorpay_payment_id } });
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      notes: {
        address: 'Customer Address',
      },
      theme: {
        color: '#008080', 
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  if (!bus) {
    return <p>No booking details found.</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-4 p-5 border rounded-lg shadow-lg bg-white">
      <h2 className="text-center text-2xl font-bold mb-4">Payment Details</h2>
      <p className="font-semibold">Name: <span className="ml-4">{name}</span></p>
      <p>Email: <span className="ml-4">{email}</span></p>
      <p>Phone: <span className="ml-4">{phone}</span></p>
      <div className="max-w-md mx-auto mt-4 p-5 border rounded-lg shadow-lg bg-white">
  <h4 className="text-lg font-semibold mt-3 text-center">Selected Bus</h4>
  <div className="space-y-2 mt-2">
    <div className="flex justify-between">
      <p className="font-semibold">Bus Name:</p>
      <p>{bus.name}</p>
    </div>
    <div className="flex justify-between">
      <p className="font-semibold">Departure City:</p>
      <p>{bus.departureCity}</p>
    </div>
    <div className="flex justify-between">
      <p className="font-semibold">Arrival City:</p>
      <p>{bus.arrivalCity}</p>
    </div>
    <div className="flex justify-between">
      <p className="font-semibold">Departure Time:</p>
      <p>{bus.departureTime}</p>
    </div>
    <div className="flex justify-between">
      <p className="font-semibold">Arrival Time:</p>
      <p>{bus.arrivalTime}</p>
    </div>
    <div className="flex justify-between">
      <p className="font-bold text-green-600">Price:</p>
      <p className="text-green-600">₹{bus.price}</p>
    </div>
  </div>
</div>

  
<div className="flex justify-center mt-5 space-x-4">
<Link to='/'>
      <button className="px-4 py-2 ml-5 mt-3 bg-gray-300 text-black rounded">Cancel</button>
      </Link>
      <button 
        onClick={handlePayment} 
        className="px-4 ml-0.2 py-2 mt-3 bg-blue-600 text-white rounded"
      >
        Pay Now
      </button>
      
      </div>
    </div>
  );
};

export default PaymentPage;
