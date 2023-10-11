import React from 'react';
import GlobalStyle from "./styles/global"
// import Navbar from "./components/Navbar"
// import Menubar from "./components/Menubar"
// import PageBody from "./components/PageBody"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import countryReducer from './components/CascadeDropdown/countryReducer';
import CountryDropdown from './components/CascadeDropdown/index';

const store = createStore(countryReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Cascade Dropdown Example</h1>
        <CountryDropdown />
      </div>
    </Provider>
  );
}

export default App;

