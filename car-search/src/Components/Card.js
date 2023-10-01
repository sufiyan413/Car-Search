import React from 'react';
import '../Styles/Card.css';

function Card(props) {
  return (
    <div className="Card">
      <img src={props.imageUrl} alt={props.imageAlt} />
      <div className="card-details">
        <div className="Title">
          <h2>{props.title}</h2>
          <h5>{props.model}</h5>
        </div>
        <div className="Description">
          <div className="icon-row">
            <div className="icon-text">
              <img src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png' alt='icon' />
              {props.seats} people
            </div>
            <div className="icon-text">
              <img src='https://cdn-icons-png.flaticon.com/512/5733/5733382.png' alt='icon' />
              {props.fuelType}
            </div>
          </div>
          <div className="icon-row2">
            <div className="icon-text">
              <img src='https://cdn.iconscout.com/icon/free/png-256/free-speedometer-96-546628.png' alt='icon' />
              {props.mileage}
            </div>
            <div className="icon-text">
              <img src='https://cdn-icons-png.flaticon.com/512/7097/7097414.png' alt='icon' />
              {props.gears}
            </div>
          </div>
        </div>
        <hr />
        <div className='card-bottom'>
          <h3>${props.amount}/month</h3>
          <div className='rent-button'>
            <img src='https://cdn.iconscout.com/icon/free/png-256/free-heart-love-like-favorite-romance-gift-7-16415.png?f=webp' alt='add to favourite' />
            <button>Rent now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
