import React, {useState} from 'react'
import axios from 'axios'

function App() {
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=103666d5252e5abf754527cd2f707b91`;

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>London</p>
          </div>
          <div className="temp">
            <h1>20°C</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>40°C</p>
          </div>
          <div className="humidity">
            <p>25%</p>
          </div>
          <div className="wind">
            12 mh/k
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
