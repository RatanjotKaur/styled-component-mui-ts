import React, { useState } from 'react';
import { DropdownWrapper } from './styles';

interface CascadeDropdownProps {
    options: string[];
    onChange: (selectedOption: string) => void;
  }
const CascadeDropdown: React.FC<CascadeDropdownProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);
    onChange(newSelectedOption);
  };

  return (
    <DropdownWrapper>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </DropdownWrapper>
  );
};

export default CascadeDropdown;
