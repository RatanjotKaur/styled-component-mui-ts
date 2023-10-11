import React from 'react';
import GlobalStyle from "./styles/global"
import CountryDropdown from './components/CascadeDropdown/index';

function App() {
  return (
    <div className="App">
      <h1>Cascade Dropdown Example</h1>
      <CountryDropdown />
    </div>
  );
}

export default App;

