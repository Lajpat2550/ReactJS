import React, { useEffect, useState } from "react";
import "./App.css";

function Btn({ title, value, onValueChange, options, selectedCurrency, onCurrencyChange }) {
  return (
    <div className="innerNav">
      <div className="left">
        <label htmlFor={title}>{title}</label>
        <input
          id={title}
          type="number"
          placeholder="00"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
        />
      </div>
      <div className="right">
        <div className="currentType">Currency Type</div>
        <div className="list">
          <select value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
            {options.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [inputValue, setInputValue] = useState(1);
  const [result, setResult] = useState(0);
  const [currencyRates, setCurrencyRates] = useState({});
  const [options, setOptions] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [selectedTargetCurrency, setSelectedTargetCurrency] = useState("aed");

  // Fetch currency rates only once
  useEffect(() => {
    fetch("https://2024-03-06.currency-api.pages.dev/v1/currencies/usd.json")
      .then((res) => res.json())
      .then((res) => {
        setCurrencyRates(res.usd);
        setOptions(Object.keys(res.usd));
      })
      .catch((error) => alert("Error fetching currency data:", error));
  }, []);

  // Convert currency when values or selections change
  useEffect(() => {
    if (currencyRates[selectedCurrency] && currencyRates[selectedTargetCurrency]) {
      setResult((inputValue / currencyRates[selectedCurrency]) * currencyRates[selectedTargetCurrency]);
    }
  }, [inputValue, selectedCurrency, selectedTargetCurrency, currencyRates]);

  // Swap currencies
  function handleSwap() {
    setSelectedCurrency(selectedTargetCurrency);
    setSelectedTargetCurrency(selectedCurrency);
  }

  return (
    <div id="root">
      <div className="container">
        <button className="midBtn" onClick={handleSwap}>Swap</button>

        <Btn
          title="From"
          value={inputValue}
          onValueChange={setInputValue}
          options={options}
          selectedCurrency={selectedCurrency}
          onCurrencyChange={setSelectedCurrency}
        />

        <Btn
          title="To"
          value={result.toFixed(2)}
          onValueChange={() => {}}
          options={options}
          selectedCurrency={selectedTargetCurrency}
          onCurrencyChange={setSelectedTargetCurrency}
        />

        <div className="innerNav converter">
          {inputValue} {selectedCurrency.toUpperCase()} = {result.toFixed(2)} {selectedTargetCurrency.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default App;
