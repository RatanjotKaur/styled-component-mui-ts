// CountryDropdown.tsx
import React from 'react';
import { useCountry } from './CountryContext';
import StateDropdown from './StateDropdown';

const countries = ['Select Country', 'USA', 'Canada'];

function CountryDropdown() {
  const { selectedCountry, setSelectedCountry } = useCountry();

  return (
    <div>
      <label>Country</label>
      <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      {selectedCountry && <StateDropdown />}
    </div>
  );
}

export default CountryDropdown;
