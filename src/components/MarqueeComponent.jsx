// MarqueeComponent.js
import React from 'react';
import Marquee from 'react-fast-marquee';
import './MarqueeComponent.css'; // Create a separate CSS file for styling

const MarqueeComponent = () => {
  return (
    <div className="marquee-container">
      <Marquee speed={40}>
        <p className="marquee-text">
          Visit us at 240 Ormiston Road Flatbush, Manukau, New Zealand.
          For urgent assistance, call us at 09-558 3817 or use our human live chat support below.
          For non-urgent assistance, email us at kusinaniperla@gmail.com or use our Contact/Reservation Form.
        </p>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;


