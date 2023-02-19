import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=103666d5252e5abf754527cd2f707b91`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}

  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location' 
        type="text" />
      </div>
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
            <p className="bold">40°C</p>
            <p>feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">25%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 mh/k</p>
            <p>wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
