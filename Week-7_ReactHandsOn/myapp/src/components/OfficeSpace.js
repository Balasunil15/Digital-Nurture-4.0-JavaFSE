import React from 'react';
import './OfficeSpace.css';
import OfficeImage from './images.jpg'; // Only one image

const OfficeSpace = () => {
  const offices = [
    {
      Name: 'DBS',
      Rent: 50000,
      Address: 'Chennai',
      image: OfficeImage,
    },
    {
      Name: 'WeWork',
      Rent: 70000,
      Address: 'Bangalore',
      image: OfficeImage,
    }
  ];

  return (
    <div>
      <h1>Office Space, at Affordable Range</h1>
      {offices.map((item, index) => {
        const rentColor = item.Rent <= 60000 ? 'textRed' : 'textGreen';
        return (
          <div key={index}>
            <img src={item.image} alt="Office Space" width="250" height="150" />
            <h2>Name: {item.Name}</h2>
            <h3 className={rentColor}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default OfficeSpace