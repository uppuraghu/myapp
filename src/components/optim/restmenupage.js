import React, { useState, useEffect } from "react";

function RecipeDataa() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.record); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map((product) => (
            <li key={product.id}>
              <p>{product.price}</p>
              <p>{product.name}</p>
              <p>{product.category}</p>
              <p>{product.available_quantity}</p>
              <p>{product.image_url}</p>
              <p>{product.type}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RecipeDataa;
