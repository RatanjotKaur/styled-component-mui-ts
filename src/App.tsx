import React from 'react';
import GlobalStyle from "./styles/global"
// import Navbar from "./components/Navbar"
// import Menubar from "./components/Menubar"
// import PageBody from "./components/PageBody"
import { CountryProvider } from './components/CascadeDropdown/CountryContext';
import CountryDropdown from './components/CascadeDropdown/index';

function App() {
  return (
    <CountryProvider>
      <div className="App">
        <h1>Cascade Dropdown Example</h1>
        <CountryDropdown />
      </div>
    </CountryProvider>
  );
}

export default App;

