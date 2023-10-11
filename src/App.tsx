import React, { useState } from 'react';
import GlobalStyle from "./styles/global"
import CountryDropdown from './components/CascadeDropdown/index';

function App() {
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
  };

  return (
    <div className="App">
      <h1>Cascade Dropdown Example</h1>
      <CountryDropdown selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />
    </div>
  );
}

export default App;

