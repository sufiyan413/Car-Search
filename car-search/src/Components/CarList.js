import React from 'react';
import Card from './Card';

function CarList({ carData, currentPage }) {


    const itemsPerPage = 6;


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const visibleCars = carData.slice(startIndex, endIndex);

    return (

        <div className="card-container">

            {visibleCars.map((car, index) => (

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
    );
}

export default CarList;
