import axios from "axios";
import React, { useState, useEffect } from "react";

import "./styles/styles.js";

function App() {
  const [currentLocation, setCurrentLocation] = useState({});

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrentLocation(location.data);
  };

  return <div className="App"></div>;
}

export default App;
