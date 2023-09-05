import React from 'react';
import GlobalStyle from "./styles/global"
// import Navbar from "./components/Navbar"
// import Menubar from "./components/Menubar"
// import PageBody from "./components/PageBody"
import CascadeDropdownDemo from './components/CascadeDropdown/countryCascadeDropdown';

const App:React.FC = ()=> (
  <> 
    <GlobalStyle/>
    <CascadeDropdownDemo/>
  </>
)

export default App;
