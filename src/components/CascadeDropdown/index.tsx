import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Typography, SelectChangeEvent } from '@mui/material';
import { Container } from './styles';

interface Option {
  label: string;
  value: string;
}

const countries: Option[] = [
  { label: 'Select Country', value: '' },
  { label: 'USA', value: 'usa' },
  { label: 'Canada', value: 'canada' },
];

const cities: { [key: string]: Option[] } = {
  usa: [
    { label: 'Select City', value: '' },
    { label: 'New York', value: 'new-york' },
    { label: 'Los Angeles', value: 'los-angeles' },
  ],
  canada: [
    { label: 'Select City', value: '' },
    { label: 'Toronto', value: 'toronto' },
    { label: 'Vancouver', value: 'vancouver' },
  ],
}; 

const CascadeDropdown: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');

  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCountry(event.target.value as string);
    setSelectedCity('');
  };

  const handleCityChange = (event: SelectChangeEvent<string>) => {
    setSelectedCity(event.target.value as string);
  };

  return (
    <Container>
      <FormControl>
        <InputLabel>Country</InputLabel>
        <Select value={selectedCountry} onChange={handleCountryChange}>
          {countries.map((country) => (
            <MenuItem key={country.value} value={country.value}>
              {country.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedCountry && (
        <FormControl>
          <InputLabel>City</InputLabel>
          <Select value={selectedCity} onChange={handleCityChange}>
            {cities[selectedCountry].map((city) => (
              <MenuItem key={city.value} value={city.value}>
                {city.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {selectedCity && (
        <Typography variant="body1">
          You selected: {selectedCity} in {selectedCountry}
        </Typography>
      )}
    </Container>
  );
};

export default CascadeDropdown;
