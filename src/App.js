import React, { useState } from 'react';


const App = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  
  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const apiKey = 'your_api_key_here';  // replace with your actual API key
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b2510581a618b1804ce17c37f73ff245`)
      .then(response => response.json())
      .then(data => {
        if (data.main) {
          const kelvin = data.main.temp;
          const celsius = kelvin - 273.15;
          setResult(celsius.toFixed(2));  // fixed to 2 decimal places
        } else {
          setResult("City not found");
        }
      })
      .catch(error => {
        setResult("Error fetching data");
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
   
      <center>
        <div className='card'>
          <div className='card-body'><br/><br/>
            <h4 className='card-title'>WEATHER APP</h4><br/>
            <form onSubmit={submitHandler}>
              <input type='text' name='city' value={city} onChange={changeHandler} placeholder="Enter city name" /><br/><br/>
              <input type='submit' value="Get Temperature" />
            </form>
            <h3>{result}</h3>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
