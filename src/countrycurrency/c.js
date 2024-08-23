import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import '../App.css';

const Countrp = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [todos, setTodos] = useState({});
  const [exchangeRate, setExchangeRate] = useState(null);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [allCurrencies, setAllCurrencies] = useState([]); // New state for all currencies

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);

      // Extract all unique currencies
      const currencies = new Set();
      data.forEach(country => {
        if (country.currencies) {
          Object.keys(country.currencies).forEach(currency => {
            currencies.add(currency);
          });
        }
      });
      setAllCurrencies([...currencies]);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (selectedCountry && selectedCountry.currencies) {
      const countryCurrency = Object.keys(selectedCountry.currencies)[0];
      setToCurrency(countryCurrency);
    }
  }, [selectedCountry]);

  const handleSearch = () => {
    const country = countries.find((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSelectedCountry(country);
    setExchangeRate(null);
    setConvertedAmount(null);
  };

  const handleCurrencyConvert = async () => {
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const rate = response.data.rates[toCurrency];
      setExchangeRate(rate);
      setConvertedAmount((amount * rate).toFixed(2));
    } catch (error) {
      console.error('Error fetching exchange rate data:', error);
      setExchangeRate(null);
      setConvertedAmount(null);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="main">
      <div className="App">
        <header className="App-header">
          <h1>COUNTRIES INFO & CURRENCY CONVERTER</h1>
        </header>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a country..."
          />
          <Button onClick={handleSearch} variant="primary">Search</Button>
        </div>
        <div className="countries-list">
          {selectedCountry ? (
            <div key={selectedCountry.cca3} className="country-card">
              <h2>{selectedCountry.name.common}</h2>
              <p>Capital: {selectedCountry.capital ? selectedCountry.capital[0] : 'N/A'}</p>
              <p>Population: {selectedCountry.population.toLocaleString()}</p>
              <img src={selectedCountry.flags.svg} alt={`${selectedCountry.name.common} flag`} />
              <div>
                <ul>
                  {todos[selectedCountry.cca3]?.map((todo, index) => (
                    <li key={index}>{todo}</li>
                  ))}
                </ul>
              </div>
              {selectedCountry.currencies && (
                <div className="currency-converter">
                  <Button onClick={handleShowModal} variant="success">
                    Show Currency Converter
                  </Button>
                </div>
              )}
            </div>
          ) : (
            countries.map((country) => (
              <div key={country.cca3} className="country-card">
                <h2>{country.name.common}</h2>
                <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
                <p>Population: {country.population.toLocaleString()}</p>
                <img src={country.flags.svg} alt={`${country.name.common} flag`} />
                <div>
                  <ul>
                    {todos[country.cca3]?.map((todo, index) => (
                      <li key={index}>{todo}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          )}
        </div>
        <div className='cc1'>
          <Modal show={showModal} className='cc2' onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title className='cc'>Currency Converter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>From:</Form.Label>
                  <Form.Control as="select" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                    {allCurrencies.map(currency => (
                      <option key={currency} value={currency}>{currency}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>To:</Form.Label>
                  <Form.Control as="select" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                    {allCurrencies.map(currency => (
                      <option key={currency} value={currency}>{currency}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Amount:</Form.Label>
                  <Form.Control 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCurrencyConvert}>
                Convert
              </Button>
            </Modal.Footer>
            {convertedAmount !== null && (
              <div className="converted-amount">
                <p>{amount} {fromCurrency} = {convertedAmount} {toCurrency}</p>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Countrp;





























// body {
//   margin: 0;
//   font-family: Arial, sans-serif;
//   color: #333;
//    background-image: url('/src/components/background.jpg'); 
//   background-size: cover;
//   background-position: center; 
//   background-attachment: fixed; 
  
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
//   background-image: url('/src/components/background.jpg'); 
//   background-size: cover;
//   background-position: center; 
//   background-attachment: fixed;
//   background-repeat: no-repeat;
//   background-color: #303334;
// }

// .App-header {
 
//   font-weight:900;
//   font-size:xx-large;
 
//   font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
//   padding: 20px;
 
  
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




// .converted-amount{
//   margin-top: 15px;
//   font-size: 1.2em;
//   color: #77d837;
//   margin-left: 100px;
//   font-size: larger;
//   font-weight: 800;
// }


// .country-card {
//   background: linear-gradient(145deg, #263238, #37474f);
//   border: 1px solid #455a64;
//   border-radius: 12px;
//   padding: 20px;
//   margin: 20px;
//   width: calc(33% - 40px);
//   box-sizing: border-box;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
//   transition: transform 0.3s, box-shadow 0.3s;
//   color: #eceff1;
//   background-image: url('/src/components/car.jpg'); 
//   background-size: cover;
//   background-position: center; 
//   background-attachment: fixed;
//   background-repeat: no-repeat;
// }

// .country-card:hover {
//   transform: scale(1.03);
//   box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
// }

// .country-card h2 {
//   margin: 0 0 10px;
//   color: #cfd8dc;
// }

// .country-card p {
//   margin: 5px 0;
//   color: #cfd8dc;
// }

// .country-card img {
//   max-width: 100%;
//   border-radius: 8px;
//   margin: 10px 0;
// }






//  .currency-converter button {
//   background-color: #ff5722; /* Orange button */
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
// }

// .currency-converter button:hover {
//   background-color: #e64a19; /* Darker orange on hover */
// }

// .cc1 .modal-content {
//   background-color: #f9f9f9; /* Light grey modal background */
//   border-radius: 10px;
// }

// .cc2 .modal-header,
// .cc2 .modal-footer {
//   border: none;
  
// }

// .cc2 .modal-title {
//   color: #333;
  
// }

// .cc2 .btn-primary {
//   background-color: #4caf50; /* Green button */
//   border: none;
  
// }

// .cc2 .btn-primary:hover {
//   background-color: #388e3c; /* Darker green on hover */
// }

// .cc2 .btn-secondary {
//   background-color: #f44336; /* Red button */
//   border: none;
// }

// .cc2 .btn-secondary:hover {
//   background-color: #d32f2f; /* Darker red on hover */
// }