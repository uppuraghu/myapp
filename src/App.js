import React, { useState } from 'react';
// import Stacks from './Navigations/stack';
// import ButtonComponent from './components/button/button';

// Uncomment the following lines as needed
// import From from './components/forms/uncontrolled/form';
// import ControlledForm from './components/controlled/controlled';
// import CircleComponent from './components/class-component/circleTask/circle';
// import UseStateExample from './components/functionalHooks/useState/usestate';
// import TodoComponent from './components/functionalHooks/useState/todo';
// import ButtonComponentsClass from './components/class-component/button';
// import TodoComponent from './components/class-component/todo/todo';
// import { Heading1 } from './components/headings/headings';
// import ProductListing from './components/class-component/productListing/productListing';

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


