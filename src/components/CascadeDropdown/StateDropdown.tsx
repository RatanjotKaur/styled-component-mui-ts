// StateDropdown.tsx
import React from 'react';
import { connect } from 'react-redux';

interface StateDropdownProps {
  selectedCountry: string;
}

interface StateOptions {
  [key: string]: string[];
}

const stateOptions: StateOptions = {
  USA: ['Select State', 'New York', 'California', 'Texas'],
  Canada: ['Select State', 'Ontario', 'British Columbia', 'Quebec'],
};

function StateDropdown({ selectedCountry }: StateDropdownProps) {
  const states = stateOptions[selectedCountry] || []; // Provide a default value to handle undefined cases

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

const mapStateToProps = (state: { selectedCountry: string }) => ({
  selectedCountry: state.selectedCountry,
});

export default connect(mapStateToProps)(StateDropdown);
