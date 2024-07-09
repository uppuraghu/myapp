import React, { useState } from 'react';


const App = () => {
  const [city,setCity]=useState("")
  const [result,setResult]=useState("")
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler=e=>{
    e.preventDefaut()
  fetch(`https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}`).then(
    response=>response.json()

  ).then(data=>{
    const Kelvin=data.main.temp
    const celsius=Kelvin-273.15
    setResult(celsius)
  })
   
 
    
  }
  return (
    <div>
        <center>
          <div className='card'>
              <div className='card-body'><br/><br/>
                <h4 className='card-title'>WEATHER APP</h4><br/>
                <form onSubmit={submitHandler}>
                  <input type='text' name='city' value={city} onChange={changeHandler}/><br/><br/>
                  <input type='submit' value="Get Temperature"/>
                </form>
                <h3>{result}</h3>
              </div>
          </div>
        </center>
    </div>
  );
}

export default App;


