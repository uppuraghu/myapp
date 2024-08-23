
// import React from 'react';
// import ChildComponent from './chi,d';


// const ParentComponent = () => {
//   const message = "Hello from Parent Component!";

//   return (
//     <div>
// <ChildComponent message={message}/>
   
//     </div>
//   );
// };

// export default ParentComponent;

import React, { useState } from 'react';

const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;


