import React from 'react';

function SuccessScreen(props) {
  const{data}=props
  return (
    <div>
      <h3>Welcome user{data.username}</h3>
    </div>
  );
}

export default SuccessScreen;

