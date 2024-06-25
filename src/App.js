import React from 'react';
import ProductListing from './components/class-component/productListing/productListing';
import MountaingPhase from './components/class-component/mountaing/mountaing';


const App = () => {
  return (
    <div>
     <ProductListing/>
     <MountaingPhase favColor={"red"}/>
      
    </div>
  );
}

export default App;


