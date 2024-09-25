import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchForm from './Components/SearchForm';
import BookingPage from './Components/BookingPage';
import PaymentPage from './Components/PaymentPage';
import SuccessPage from './Components/SuccessPage';
import BusList from './Components/BusList';

function App() {
  const [buses, setBuses] = useState([]); // Define state for buses
  return (
   
    <div >
    <Router>
      <Routes>
      <Route path="/" element={<SearchForm  setBuses={setBuses}/>} />
      <Route path="/buslist" element={<BusList buses={buses} />} />


        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  
   
        
        

    </div>
  );
}

export default App;
