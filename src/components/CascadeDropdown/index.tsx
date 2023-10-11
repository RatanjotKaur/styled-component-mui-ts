// CountryDropdown.tsx
import React from 'react';
import { connect } from 'react-redux';
import { selectCountry } from './countryActions';
import StateDropdown from './StateDropdown';

interface CountryDropdownProps {
  selectedCountry: string; // Add type annotation here
  selectCountry: (country: string) => void;
}

const countries = ['Select Country', 'USA', 'Canada'];

function CountryDropdown({ selectedCountry, selectCountry }: CountryDropdownProps) {
  return (
    <div>
      <label>Country</label>
      <select value={selectedCountry} onChange={(e) => selectCountry(e.target.value)}>
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

const mapStateToProps = (state: { selectedCountry: string }) => ({
  selectedCountry: state.selectedCountry,
});

const mapDispatchToProps = {
  selectCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryDropdown);
