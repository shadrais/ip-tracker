import React from "react";

const Cards = () => {
  return (
    <div className="cards">
      <div className="card-group">
        <div className="card-items">
          <div className="card-name">IP ADDRESS</div>
          <h3 className="card-data">192.212.174.101</h3>
        </div>
        <div className="vertical-line"></div>
        <div className="card-items">
          <div className="card-name">LOCATION</div>
          <h3 className="card-data">Brooklyn, NY 10001</h3>
        </div>
        <div className="vertical-line"></div>
        <div className="card-items">
          <div className="card-name">TIMEZONE</div>
          <h3 className="card-data">UTC -05:00</h3>
        </div>
        <div className="vertical-line"></div>
        <div className="card-items">
          <div className="card-name">ISP</div>
          <h3 className="card-data">SpaceX Starlink</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
