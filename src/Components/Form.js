import React, { useState, useEffect } from "react";
import axios from "axios";

import countries from "../countries/countries.json";

import user from "../assets/user.png";

const Form = () => {
  const [currentLocation, setCurrentLocation] = useState();
  const [baseCode, setBaseCode] = useState([user]);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrentLocation(location.data.country_name);
  };

  const fileChangeHandler = (event) => {
    const files = event.target.files;
    const file = files[0];
    getBase(file);
  };

  const getBase = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBaseCode([reader.result]);
    };
  };

  return (
    <div className="Form">
      <div className="image-container">
        <figure>
          <img src={baseCode} alt="User Profile" />
        </figure>
        <label htmlFor="fileInput">
          <h3>Add photo</h3>
          <input
            id="fileInput"
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={fileChangeHandler}
          />
        </label>
      </div>

      <div className="fullName">
        <label htmlFor="fullName">Full Name : </label>
        <input type="text" id="fullName" />
      </div>

      <div className="countries">
        <label htmlFor="countries">Country : </label>

        <select id="countries">
          {countries.map((country) => (
            <option
              value={country.name}
              selected={country.name === currentLocation}
            >
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="city">
        <label htmlFor="city">City : </label>
        <input type="text" id="city" />
      </div>
    </div>
  );
};

export default Form;
