import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import './Styles/App.css';
import Navbar from './Components/Navbar';
import jsonData from './Data/carsData.json';
import Footer from './Components/Footer';
import CarList from './Components/CarList';

function App() {

  const [carDataState, setCarDataState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCarDataState(jsonData);
  }, []);

  const totalPages = Math.ceil(carDataState.length / 6); 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Router>
      <div className="App">

        <div className='Header'>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<CarList carData={carDataState} currentPage={currentPage} />} />
        </Routes>

        <div>
          <Footer
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>

      </div>
      
    </Router>
  );
}

export default App;





