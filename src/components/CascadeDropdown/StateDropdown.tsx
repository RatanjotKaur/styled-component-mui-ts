// StateDropdown.tsx
import React from 'react';
import { useCountry } from './CountryContext';

const stateOptions: Record<string, string[]> = {
  USA: ['Select State', 'New York', 'California', 'Texas'],
  Canada: ['Select State', 'Ontario', 'British Columbia', 'Quebec'],
};

function StateDropdown() {
  const { selectedCountry } = useCountry();
  const states = stateOptions[selectedCountry];

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
