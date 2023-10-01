import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import jsonData from './Data/carsData.json'; 
import Footer from './Components/Footer';

function App() {
  const [carDataState, setCarDataState] = useState([]); 

  useEffect(() => {
    setCarDataState(jsonData);
  }, []);

  return (
    <div className="App">
      <div className='Header'>
      <Navbar />
      </div>
      <div className="card-container">
        {carDataState.map((car, index) => (
          <Card
            key={index}
            imageUrl={car.imageUrl}
            imageAlt={car.imageAlt}
            title={car.title}
            model={car.model}
            description={car.description}
            seats={car.seats}
            fuelType={car.fuelType}
            mileage={car.mileage}
            gears={car.gears}
            amount={car.amount}
          />
        ))}
      </div>
      <div>
        <Footer  totalPages={20} currentPage={1} onPageChange={(pageNumber) => console.log('Page changed to', pageNumber)}/>
      </div>
    </div>
  );
}

export default App;


