import React, { useState } from 'react';
import CascadeDropdown from './index';

const options = {
  countries: ['USA', 'Canada', 'UK'],
  states: {
    USA: ['New York', 'California', 'Texas'],
    Canada: ['Ontario', 'Quebec', 'British Columbia'],
    UK: ['England', 'Scotland', 'Wales'],
  },
};

const CascadeDropdownDemo: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');

  const handleCountryChange = (selectedOption: string) => {
    setSelectedCountry(selectedOption);
    setSelectedState('');
  };

  const handleStateChange = (selectedOption: string) => {
    setSelectedState(selectedOption);
  };

  return (
    <div>
      <CascadeDropdown options={options.countries} onChange={handleCountryChange} />
      {/* {selectedCountry && (
        <CascadeDropdown options={options.states[selectedCountry]} onChange={handleStateChange} />
      )} */}

      <p>
        Selected Country: {selectedCountry}
        <br />
        Selected State: {selectedState}
      </p>
    </div>
  );
};

export default CascadeDropdownDemo;
