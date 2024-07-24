import React, { useState } from 'react';

const ToggleButton = ({ Background }) => {
  const handleClick = () => {
   Background();
  };

  return (
    <button onClick={handleClick} >
      CLICK TO SEE MAGIC
    </button>
  );
};

export default ToggleButton;

