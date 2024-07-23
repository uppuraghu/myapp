// in this data will be added by entering the data name it will save and we can delete that data by delete button which is placed at the added button




import React, { useContext, useState } from 'react';
import { store } from '../App';

const Display = () => {
  const [data, setData] = useContext(store);
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setData([...data, { brandname: name }]);
    setName(""); // Reset input field after adding
  };

  const deleteHandler = (index) => {
    const newData = data.filter((item, i) => i !== index);
    setData(newData);
  };

  return (
    <div className='card'>
      <div className='card-body'>

        {data.map((item, index) => (
          <div key={index} className='card-item'>
            <h3 className='card-title'>{item.brandname}</h3>

            <button onClick={() => deleteHandler(index)}>Delete</button>
          </div>
        ))}


        <form className='from' onSubmit={submitHandler}>
          <input type='text' value={name} required onChange={(e) => setName(e.target.value)} placeholder='Enter your brand'/>
          <input type='submit' value="Add" />
        </form>

      </div>
    </div>
  );
};

export default Display;
