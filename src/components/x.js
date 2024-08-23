// AddedRecipes.js
import React from "react";
import "../App.css";

const AddedRecipes = ({ addedRecipes, removeRecipe }) => {
  return (
    <div className="added-recipes-container">
      <h2>Added Recipes</h2>
      {addedRecipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <ul>
          {addedRecipes.map((recipe) => (
            <li key={recipe.id} className="added-recipe-card">
              <img src={recipe.image} alt={recipe.name} className="added-recipe-image" />
              <h3>{recipe.name}</h3>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => removeRecipe(recipe.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddedRecipes;











// body {
//     font-family: 'Arial', sans-serif;
//     background-color: #f0f0f5;
//     color: #333;
//     margin: 0;
//     padding: 0;
    
//   }
  
//   .recipe-container {
//     /* max-width: 1200px; */
//     margin: 0 auto;
//     padding: 90px;
//     text-align: center;
//     width: 100%;  
//     background-image: url("components/caf.jpg");
//     background-size: cover;
//     background-position: center; 
//     background-attachment: fixed;
//   }
  
//   .recipe-container h1 {
//     font-size: 2.5rem;
//     color: #ffffff;
//     margin-top: -40px;
//   }
  
//   .search-input {
//     width: 80%;
//     max-width: 400px;
//     padding: 10px;
//     border: 2px solid #b27e7e;
//     border-radius: 25px;
//     font-size: 1rem;
    
//     margin-bottom: 40px;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   }
  
//   .recipes-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
//     gap: 50px;
//   }
  
//   .recipe-card {
//     /* background: linear-gradient(to right, #ff7e5f, #feb47b, #00c6ff, #0072ff); */
//     background: linear-gradient(to bottom, #ff7e5f, #feb47b 50%, #00c6ff);
  
//     border-radius: 15px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     padding: 20px;
//     transition: transform 0.2s;
//   }
  
//   .recipe-card:hover {
//     transform: translateY(-10px);
//   }
  
//   .recipe-image {
//     border-radius: 15px;
//     margin-bottom: 10px;
//   }
  
//   .recipe-card h2 {
//     font-size: 1.25rem;
//     color: #333;
//     margin-bottom: 10px;
//   }
  
//   button {
//     padding: 10px 20px;
//     border: none;
//     border-radius: 25px;
//     font-size: 1rem;
//     cursor: pointer;
//     transition: background-color 0.3s;
//   }
  
//   button.bg-red-500 {
//     background-color: #e74c3c;
//   }
  
//   button.bg-red-500:hover {
//     background-color: #c0392b;
//   }
  
//   button.bg-blue-500 {
//     background-color: #3498db;
//   }
  
//   button.bg-blue-500:hover {
//     background-color: #2980b9;
//   }
  
//   button.bg-green-500 {
//     background-color: #2ecc71;
//   }
  
//   button.bg-green-500:hover {
//     background-color: #27ae60;
//   }
  
//   .recipe-details {
//     background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4, #ff9a9e);
  
  
  
//     border-radius: 15px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     padding: 20px;
//     max-width: 600px;
//     margin: 20px auto;
//     text-align: left;
//   }
  
//   .recipe-details h3 {
//     font-size: 1.5rem;
//     color: #333;
//     margin-bottom: 10px;
//   }
  
//   .recipe-details ul {
//     list-style-type: disc;
//     padding-left: 20px;
//   }
  
//   .pagination {
//     margin: 20px 0;
//     margin-left: 500px;
//   }
  
//   .pagination span {
//     cursor: pointer;
//     padding: 10px;
//     margin: 0 5px;
//     font-size: 1.25rem;
//   }
  
//   .pagination .page__selected {
//     color: #fff;
//     background-color: #3498db;
//     border-radius: 50%;
//     padding: 10px 15px;
//   }
  
//   .selected-recipe-modal {
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     z-index: 1000;
//     background-color: rgba(0, 0, 0, 0.8);
//     padding: 20px;
//     border-radius: 15px;
//   }
  
//   .added-recipes-container {
//     background: linear-gradient(to bottom, #ff7e5f, #feb47b);
  
//     border-radius: 15px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     padding: 20px;
//     margin-top: 20px;
//     text-align: left;
//   }
  
//   .added-recipes-container h2 {
//     font-size: 1.5rem;
//     color: #333;
//     margin-bottom: 10px;
//   }
  
//   .added-recipes-container ul {
//     list-style-type: none;
    
//     padding: 0;
//   }
  
//   .added-recipes-container li {
//     background-color: #fff;
//     background: linear-gradient(to right, #00c6ff, #0072ff);
  
//     border-radius: 15px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     margin-bottom: 10px;
//     padding: 10px;
//     display: flex;
//     align-items: center;
//   }
  
//   .added-recipes-container li h3 {
//     flex-grow: 1;
//     margin: 0;
//   }
  
//   .added-recipes-container li img {
//     border-radius: 15px;
//     margin-right: 10px;
//     width: 80px;
//     height: 80px;
//   }
  
//   /* App.css */
  
//   .added-recipes-container {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     background-color: #f0f0f0;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     z-index: 1000;
//     padding: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
  
//   .added-recipes-container h2 {
//     margin-bottom: 10px;
//   }
  
//   .added-recipes-container ul {
//     list-style-type: none;
//     padding: 0;
//   }
  
//   .added-recipe-card {
//     display: flex;
//     align-items: center;
//     margin: 5px 0;
//   }
  
//   .added-recipe-image {
//     height: 50px;
//     width: 50px;
//     margin-right: 10px;
//   }
//   /* App.css */
  
//   .added-recipe-card {
//     display: flex;
//     align-items: center;
//     margin: 5px 0;
//   }
  
//   .added-recipe-image {
//     height: 50px;
//     width: 50px;
//     margin-right: 10px;
//   }
  
//   .bg-red-500 {
//     background-color: #f56565;
//   }
  
//   .text-white {
//     color: #fff;
//   }
  
//   .px-4 {
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
  
//   .py-2 {
//     padding-top: 0.5rem;
//     padding-bottom: 0.5rem;
//   }
  
//   .rounded {
//     border-radius: 0.25rem;
//    }













// body {
//     font-family: 'Arial', sans-serif;
//     background-color: #f0f0f5;
//     color: #333;
//     margin: 0;
//     padding: 0;
    
//   }
  
//   .recipe-container {
//     /* max-width: 1200px; */
//     margin: 0 auto;
//     padding: 90px;
//     text-align: center;
//     width: 100%;  
//     background-image: url("components/caf.jpg");
//     background-size: cover;
//     background-position: center; 
//     background-attachment: fixed;
//   }
  
//   .recipe-container h1 {
//     font-size: 2.5rem;
//     color: #ffffff;
//     margin-top: -40px;
//   }
  
//   .search-input {
//     width: 80%;
//     max-width: 400px;
//     padding: 10px;
//     border: 2px solid #b27e7e;
//     border-radius: 25px;
//     font-size: 1rem;
    
//     margin-bottom: 40px;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   }
  
//   .recipes-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
//     gap: 50px;
//   }
  
//   .recipe-card {
//     /* background: linear-gradient(to right, #ff7e5f, #feb47b, #00c6ff, #0072ff); */
//     background: linear-gradient(to bottom, #ff7e5f, #feb47b 50%, #00c6ff);
  
//     border-radius: 15px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     padding: 20px;
//     transition: transform 0.2s;
//   }
  
//   .recipe-card:hover {
//     transform: translateY(-10px);
//   }
  
//   .recipe-image {
//     border-radius: 15px;
//     margin-bottom: 10px;
//   }
  
//   .recipe-card h2 {
//     font-size: 1.25rem;
//     color: #333;
//     margin-bottom: 10px;
//   }
  
//   button {
//     padding: 10px 20px;
//     border: none;
//     border-radius: 25px;
//     font-size: 1rem;
//     cursor: pointer;
//     transition: background-color 0.3s;
//   }
  
//   button.bg-red-500 {
//     background-color: #e74c3c;
//   }
  
//   button.bg-red-500:hover {
//     background-color: #c0392b;
//   }
  
//   button.bg-blue-500 {
//     background-color: #3498db;
//   }
  
//   button.bg-blue-500:hover {
//     background-color: #2980b9;
//   }
  
//   button.bg-green-500 {
//     background-color: #2ecc71;
//   }
  
//   button.bg-green-500:hover {
//     background-color: #27ae60;
//   }
  
//   .recipe-details {
//     background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4, #ff9a9e);
  
  
  
//     border-radius: 15px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     padding: 20px;
//     max-width: 600px;
//     margin: 20px auto;
//     text-align: left;
//   }
  
//   .recipe-details h3 {
//     font-size: 1.5rem;
//     color: #333;
//     margin-bottom: 10px;
//   }
  
//   .recipe-details ul {
//     list-style-type: disc;
//     padding-left: 20px;
//   }
  
//   .pagination {
//     margin: 20px 0;
//     margin-left: 500px;
//   }
  
//   .pagination span {
//     cursor: pointer;
//     padding: 10px;
//     margin: 0 5px;
//     font-size: 1.25rem;
//   }
  
//   .pagination .page__selected {
//     color: #fff;
//     background-color: #3498db;
//     border-radius: 50%;
//     padding: 10px 15px;
//   }
  
//   .selected-recipe-modal {
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     z-index: 1000;
//     background-color: rgba(0, 0, 0, 0.8);
//     padding: 20px;
//     border-radius: 15px;
//   }
  
//   .added-recipes-container {
//     background: linear-gradient(to bottom, #ff7e5f, #feb47b);
  
//     border-radius: 15px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     padding: 20px;
//     margin-top: 20px;
//     text-align: left;
//   }
  
//   .added-recipes-container h2 {
//     font-size: 1.5rem;
//     color: #333;
//     margin-bottom: 10px;
//   }
  
//   .added-recipes-container ul {
//     list-style-type: none;
    
//     padding: 0;
//   }
  
//   .added-recipes-container li {
//     background-color: #fff;
//     background: linear-gradient(to right, #00c6ff, #0072ff);
  
//     border-radius: 15px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     margin-bottom: 10px;
//     padding: 10px;
//     display: flex;
//     align-items: center;
//   }
  
//   .added-recipes-container li h3 {
//     flex-grow: 1;
//     margin: 0;
//   }
  
//   .added-recipes-container li img {
//     border-radius: 15px;
//     margin-right: 10px;
//     width: 80px;
//     height: 80px;
//   }
  
//   /* App.css */
  
//   .added-recipes-container {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     background-color: #f0f0f0;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     z-index: 1000;
//     padding: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
  
//   .added-recipes-container h2 {
//     margin-bottom: 10px;
//   }
  
//   .added-recipes-container ul {
//     list-style-type: none;
//     padding: 0;
//   }
  
//   .added-recipe-card {
//     display: flex;
//     align-items: center;
//     margin: 5px 0;
//   }
  
//   .added-recipe-image {
//     height: 50px;
//     width: 50px;
//     margin-right: 10px;
//   }
//   /* App.css */
  
//   .added-recipe-card {
//     display: flex;
//     align-items: center;
//     margin: 5px 0;
//   }
  
//   .added-recipe-image {
//     height: 50px;
//     width: 50px;
//     margin-right: 10px;
//   }
  
//   .bg-red-500 {
//     background-color: #f56565;
//   }
  
//   .text-white {
//     color: #fff;
//   }
  
//   .px-4 {
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
  
//   .py-2 {
//     padding-top: 0.5rem;
//     padding-bottom: 0.5rem;
//   }
  
//   .rounded {
//     border-radius: 0.25rem;
//   }
  