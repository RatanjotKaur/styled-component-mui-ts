import React from 'react';
import StateDropdown from './stateDropdown';

interface CountryDropdownProps {
  selectedCountry: string;
  onCountryChange: (country: string) => void;
}

const countries = ['Select Country', 'USA', 'Canada'];

function CountryDropdown({ selectedCountry, onCountryChange }: CountryDropdownProps) {
  return (
    <div>
      <label>Country</label>
      <select value={selectedCountry} onChange={(e) => onCountryChange(e.target.value)}>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <StateDropdown selectedCountry={selectedCountry} />
      )}
    </div>
  );
}

export default CountryDropdown;
