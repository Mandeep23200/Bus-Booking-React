import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';

const SuccessPage = () => {
  const location = useLocation();
  const { bus, name, email, paymentId } = location.state || {};
   // Function to send confirmation email
   const sendEmail = () => {
    const templateParams = {
      to_name: name,
      to_email: email,
      payment_id: paymentId,
      bus_name: bus.name,
      departure_city: bus.departureCity,
      arrival_city: bus.arrivalCity,
      departure_time: bus.departureTime,
      arrival_time: bus.arrivalTime,
      price: bus.price,
    };

    emailjs.send('service_ja61qir', 'template_7femj25', templateParams, 'DEFUfD_zkikYxAZh8')
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    }, (err) => {
      console.error('Failed to send email. Error:', err);
    });
};
  // Use useEffect to send email when component mounts
  useEffect(() => {
    sendEmail();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-4 p-5 border rounded-lg shadow-lg bg-white">
      <h2 className="text-center text-2xl font-bold text-green-500 mb-4">Payment Successful!</h2>
      <p className="font-semibold">Thank you for your booking, {name}!</p>
      <p>Your payment ID is: <span className="font-bold">{paymentId}</span></p>
      
      <h4 className="text-lg font-semibold mt-4">Booking Details</h4>
      <p className="font-semibold">Bus Name: <span className="ml-4">{bus.name}</span></p>
      <p>Departure City: <span className="ml-3">{bus.departureCity}</span></p>
      <p>Arrival City: <span className="ml-2">{bus.arrivalCity}</span></p>
      <p>Departure Time: <span className="ml-2">{bus.departureTime}</span></p>
      <p>Arrival Time: <span className="ml-1">{bus.arrivalTime}</span></p>
      <p className="font-bold  mt-2">Price: ₹{bus.price}</p>
      
      <p className="mt-4">A confirmation email has been sent to: <span className="font-bold">{email}</span></p>
      <p>If you have any questions, feel free to contact us.</p>
    </div>
  );
};

export default SuccessPage;
