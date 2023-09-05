import React from 'react';
import GlobalStyle from "./styles/global"
// import Navbar from "./components/Navbar"
// import Menubar from "./components/Menubar"
// import PageBody from "./components/PageBody"
import CascadeDropdown from './components/CascadeDropdown';

const App:React.FC = ()=> (
  <> 
    <GlobalStyle/>
    <CascadeDropdown/>
  </>
)

export default App;
