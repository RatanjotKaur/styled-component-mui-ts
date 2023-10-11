// StateDropdown.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './types';

interface StateOptions {
  [key: string]: string[];
}

const stateOptions: StateOptions = {
  USA: ['Select State', 'New York', 'California', 'Texas'],
  Canada: ['Select State', 'Ontario', 'British Columbia', 'Quebec'],
};

function StateDropdown() {
  const selectedCountry = useSelector((state: RootState) => state.country.selectedCountry);
  const states = stateOptions[selectedCountry] || [];

  return (
    <div>
      <label>State</label>
      <select>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StateDropdown;
