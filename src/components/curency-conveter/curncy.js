import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    axios.get('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => {
        setCurrencies(Object.keys(response.data.rates));
        setExchangeRate(response.data.rates[toCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency !== toCurrency) {
      axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => {
          setExchangeRate(response.data.rates[toCurrency]);
        });
    }
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div className="converter">
        <div className="input-group">
          <input type="number" value={amount} onChange={handleAmountChange} />
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div className="equal">=</div>
        <div className="input-group">
          <input type="number" value={(amount * exchangeRate).toFixed(2)} disabled />
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
      <button onClick={() => alert('Converted!')}>Convert</button>
    </div>
  );
};

export default CurrencyConverter;
