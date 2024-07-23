import React, { createContext,useState } from 'react';
import Countt from './contextAPI/countt';
import Display from './contextAPI/display';
// import TodoComponent from './components/functionalHooks/useState/todo';
// import { Stack } from 'react-bootstrap';
// import Stacks from './Navigations/stack';
// import Component1 from './contextAPI/component1';
// import Component2 from './contextAPI/component2';
// 
// import HomeScreen from './components/screens/home-screen';
// import Navbar from './components/navbar/navbar';
// import EvenChecker from './components/useMemo/evenChecker';
// import CountryInfo from './components/countries/countries';
// import Countrydata from './components/countries/countries';
// import UseCallbackExample from './components/useCallback/useCallback';
// import Counterexample from './components/customHooks/counter-example';
// import DataFetch from './components/data-fetch-component';
// import Userlist from './components/user-list';
// import FetchOnPropChange from './components/context/ex3';
// import Appapp from './components/context/ex3';

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
export const store = createContext()
const App = () => {
 
    const [data,setData] = useState([
      {
        brandname:"Apple"
      },
      {
        brandname:"Realme"
      },
      {
        brandname:"samsung"
      }
    ])
  
  return (
    <store.Provider value={[data,setData]}>

       {/* <Stacks/> 
        <EvenChecker/>  */}
      {/* <CountryInfo/>  */}
      {/* <Countrydata/>  */}
      {/* <UseCallbackExample/> */}
      {/* <Userlist/> */}
{/* <Appapp/> */}
      {/* <Counterexample/> */}
      
      {/* <DataFetch/> */}
      
      <center>
      {/* <Component1/>
      <Component2/> */}
      <Countt/>
      <Display/>
      </center>
    </store.Provider>
 
  );
}

export default App;


