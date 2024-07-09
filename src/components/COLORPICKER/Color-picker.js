import React, { useState } from 'react';

function Colorpicker() {
    const [color ,setColor]=useState("#FFFFFF")

    function handlecolorChange(event){
        setColor(event.target.value)
    }
  return (
    <div className='color-picker-container'> 
    <h1>colorpicker</h1>
    <div className='color-display' style={{backgroundColor:color}}>
        <p>selected color:{color}</p>
    </div>
    <label>select color</label>
    <input type='color' value={color} onChange={handlecolorChange}/>
     </div>
    
  )
}

export default Colorpicker;
