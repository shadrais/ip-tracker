import React from "react";
import Cards from "./Cards";
import arrow from "../assets/icon-arrow.svg";
const Header = () => {
  return (
    <>
      <div className="header-image">
        <h1>IP ADDRESS TRACKER</h1>
        <div className="input-comp">
          <input
            className="input-box"
            placeholder="Search for any IP or Domain"
          />
          <button className="button-main">
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <div className="card-wrapper">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Header;
