// import React, { useEffect, useState } from 'react';
// import '../App.css';
// import axios from 'axios';

// const Countr = () => {
//   const [countries, setCountries] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [todos, setTodos] = useState({});
//   const [weather, setWeather] = useState(null);
//   const [hyderabadWeather, setHyderabadWeather] = useState(null);

//   useEffect(() => {
//     const fetchCountries = async () => {
//       const response = await fetch('https://restcountries.com/v3.1/all');
//       const data = await response.json();
//       setCountries(data);
//     };

//     fetchCountries();
//   }, []);

//   useEffect(() => {
//     if (selectedCountry && selectedCountry.capital) {
//       const fetchWeather = async () => {
//         try {
//           const response = await axios.get(
//             `https://api.openweathermap.org/data/2.5/weather?q=${selectedCountry.capital[0]}&appid=b2510581a618b1804ce17c37f73ff245`
//           );
//           const kelvin = response.data.main.temp;
//           const celsius = Math.trunc(kelvin - 273.15);
//           setWeather(celsius);
//         } catch (error) {
//           console.error('Error fetching weather data:', error);
//           setWeather(null);
//         }
//       };

//       const fetchHyderabadWeather = async () => {
//         try {
//           const response = await axios.get(
//             'https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=b2510581a618b1804ce17c37f73ff245'
//           );
//           const kelvin = response.data.main.temp;
//           const celsius = Math.trunc(kelvin - 273.15);
//           setHyderabadWeather(celsius);
//         } catch (error) {
//           console.error('Error fetching Hyderabad weather data:', error);
//           setHyderabadWeather(null);
//         }
//       };

//       fetchWeather();
//       fetchHyderabadWeather();
//     }
//   }, [selectedCountry]);

//   const handleSearch = () => {
//     const country = countries.find((country) =>
//       country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSelectedCountry(country);
//     setWeather(null);
//     setHyderabadWeather(null);
//   };

//   return (
//     <div className="main">
//       <div className="App">
//         <header className="App-header">
//           <h1>COUNTRIES INFO & WEATHER</h1>
//         </header>
//         <div>
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Search for a country..."
//           />
//           <button onClick={handleSearch}>Search</button>
//         </div>
//         <div className="countries-list">
//           {selectedCountry ? (
//             <div key={selectedCountry.cca3} className="country-card">
//               <h2>{selectedCountry.name.common}</h2>
//               <p>Capital: {selectedCountry.capital ? selectedCountry.capital[0] : 'N/A'}</p>
//               <p>Population: {selectedCountry.population.toLocaleString()}</p>
//               <img src={selectedCountry.flags.svg} alt={`${selectedCountry.name.common} flag`} />
//               <div>
//                 <ul>
//                   {todos[selectedCountry.cca3]?.map((todo, index) => (
//                     <li key={index}>{todo}</li>
//                   ))}
//                 </ul>
//               </div>
//               {selectedCountry.capital && (
//                 <div className="weather-info">
//                   <h3>Weather in {selectedCountry.capital[0]}</h3>
//                   {weather !== null ? (
//                     <p>Temperature: {weather}°C</p>
//                   ) : (
//                     <p>Loading weather data...</p>
//                   )}
//                   <h3>Weather in Hyderabad</h3>
//                   {hyderabadWeather !== null ? (
//                     <p>Temperature: {hyderabadWeather}°C</p>
//                   ) : (
//                     <p>Loading weather data...</p>
//                   )}
//                 </div>
//               )}
//             </div>
//           ) : (
//             countries.map((country) => (
//               <div key={country.cca3} className="country-card">
//                 <h2>{country.name.common}</h2>
//                 <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
//                 <p>Population: {country.population.toLocaleString()}</p>
//                 <img src={country.flags.svg} alt={`${country.name.common} flag`} />
//                 <div>
//                   <ul>
//                     {todos[country.cca3]?.map((todo, index) => (
//                       <li key={index}>{todo}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Countr;














// /* App.css */
// body {
//   margin: 0;
//   font-family: Arial, sans-serif;
//   background-color: #f0f4f8;
// }

// .main {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
// }

// .App {
//   text-align: center;
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   width: 80%;
//   max-width: 1200px;
// }

// .App-header {
//   background-color: #6200ea;
//   padding: 20px;
//   border-radius: 8px 8px 0 0;
//   color: white;
// }

// input[type="text"] {
//   width: 70%;
//   padding: 10px;
//   margin: 20px 0;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// }

// button {
//   padding: 10px 20px;
//   background-color: #6200ea;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// }

// button:hover {
//   background-color: #3700b3;
// }

// .countries-list {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
// }

// .country-card {
//   background-color: #e3f2fd;
//   border: 1px solid #bbdefb;
//   border-radius: 8px;
//   padding: 20px;
//   margin: 20px;
//   width: calc(33% - 40px);
//   box-sizing: border-box;
// }

// .country-card h2 {
//   margin: 0 0 10px;
//   color: #0d47a1;
// }

// .country-card p {
//   margin: 5px 0;
// }

// .country-card img {
//   max-width: 100%;
//   border-radius: 4px;
//   margin: 10px 0;
// }

// .weather-info {
//   background-color: #fce4ec;
//   padding: 10px;
//   border-radius: 8px;
//   margin-top: 20px;
// }

// .weather-info h3 {
//   margin: 0 0 10px;
//   color: #d81b60;
// }

// .weather-info p {
//   margin: 5px 0;
// }

