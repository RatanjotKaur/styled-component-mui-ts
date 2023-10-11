// CountryDropdown.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCountry } from './countrySlice';
import { RootState } from './types'; // Import the RootState type
import StateDropdown from './StateDropdown';

const countries = ['Select Country', 'USA', 'Canada'];

function CountryDropdown() {
  const selectedCountry = useSelector((state: RootState) => state.country.selectedCountry);
  const dispatch = useDispatch();

  const handleCountryChange = (e: { target: { value: any; }; }) => {
    dispatch(selectCountry(e.target.value));
  };

  return (
    <div>
      <label>Country</label>
      <select value={selectedCountry} onChange={handleCountryChange}>
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
