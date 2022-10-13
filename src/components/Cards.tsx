import React from "react";
import { IP } from "../App";

interface Props {
  data: IP | null
}

const Cards = ({data} : Props) => {
  return (
    <div className="cards">
      <div className="card-group">
        <div className="card-items">
          <div className="card-name">IP ADDRESS</div>
          <h3 className="card-data">{data?.ip}</h3>
        </div>
        <div className="vertical-line"></div>
        <div className="card-items">
          <div className="card-name">LOCATION</div>
          <h3 className="card-data">{data?.location.city}, {data?.location.country} {data?.location.postalCode}</h3>
        </div>
        <div className="vertical-line"></div>
        <div className="card-items">
          <div className="card-name">TIMEZONE</div>
          <h3 className="card-data">{data?.location.timezone}</h3>
        </div>
        <div className="vertical-line"></div>
        <div className="card-items">
          <div className="card-name">ISP</div>
          <h3 className="card-data">{data?.isp}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
