
import React, { useState } from 'react';
import ToggleButton from './components/DARK_LIGHT/dark';


const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleBackground = () => {
    setIsDark(!isDark);
  };

  const appStyle = {
    
    height: '100vh',
    backgroundColor: isDark ? 'black' : 'white',
    color: isDark ? 'white' : 'black',
    
  };

  return (
    <div style={appStyle} >
            <ToggleButton Background={toggleBackground}/>
    </div>
  );
};

export default App;
