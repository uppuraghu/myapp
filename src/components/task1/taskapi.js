import React, { useEffect, useState } from 'react';

const Fooditems = () => {

  const   tablestyle={
    border: "2px solid black"

    }

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data.recipes))
      
  }, []);

  return (
    <table style={tablestyle}>

      <thead style={tablestyle}>
        <tr style={tablestyle}>
          <th style={tablestyle}>ID</th>
          <th>name</th>
          <th style={tablestyle}>Ingredients</th>
          <th >image</th>
      
          
        </tr>
      </thead>

      <tbody>
        {recipes.map(recipe => (
          <tr key={recipe.id}>
            <td style={tablestyle}>{recipe.id}</td>
           
            <td style={tablestyle}>{recipe.name}</td>
            <td style={tablestyle}>{recipe.ingredients}</td>
            <td style={tablestyle}>{recipe.image}</td>
          </tr>
        ))}
      </tbody>

    </table>
  );
};

export default Fooditems
