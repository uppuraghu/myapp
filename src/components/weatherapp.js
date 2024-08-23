import axios from "axios";
import { useState } from "react";


const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [res1, setres1] = useState(0);

  const fetchData = async () => {
   
      const response = await axios.get(
      `  https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b2510581a618b1804ce17c37f73ff245`
      );
      let kelvin = response.data.main.temp;
      let tempToKelvin = Math.trunc(kelvin - 273.15);
      setres1(tempToKelvin + "°c");
    
  };
  const inputData = (e) => {
    setCity(e.target.value);
  };

  return (
    <div
      id="styling"
      className="card"
      // style={{ backgroundImage: url(}) }}
    >
      <div className="form">
        <input type="text" onChange={inputData} value={city} />

        <button type="submit" onClick={fetchData}>
          submit
        </button>
        <h2>Temparature: {res1}</h2>
      </div>
    </div>
  );
};
export default WeatherApp;