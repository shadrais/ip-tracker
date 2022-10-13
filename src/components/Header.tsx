import React from "react";
import Cards from "./Cards";
import arrow from "../assets/icon-arrow.svg";
import { useState } from "react";
import {IP} from '../App'

interface Props {
  handleFetch: (data:string) => void
  data: IP |null
}


const Header = ({ handleFetch,data }: Props) => {
  const [input, setInput] = useState<string>("");
  const handleSubmit = () => {
    handleFetch(input);
  };

  return (
    <>
      <div className="header-image"></div>
        <h1>IP ADDRESS TRACKER</h1>
        <div className="input-comp">
          <input
            className="input-box"
            placeholder="Search for any IP or Domain"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button className="button-main" onClick={handleSubmit}>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <div className="card-wrapper">
          <Cards data={data} />
        </div>
      
    </>
  );
};

export default Header;
