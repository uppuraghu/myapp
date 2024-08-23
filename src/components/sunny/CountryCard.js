import React from 'react';

const CountryCard = ({ country, onAdd }) => {
  return (
    <div className="country-card">
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <button onClick={() => onAdd(country)}>Add to Cart</button>
    </div>
  );
};

export default CountryCard;

