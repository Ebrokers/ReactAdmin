import logo from './logo.svg';
import './App.css';
import {Properties} from './Properties.js';
import {Merchants} from './Merchants.js';
import AppNavbar from './AppNavbar';
import {PropertiesById} from './PropertiesById.js';
import {PropertiesByMeId} from './PropertiesByMeId.js';
import {MerchantsById} from './MerchantsById.js';
import {Home} from './Home.js';
import React, { useState } from 'react';
import {AddMerchant} from './AddMerchant.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <div>
        <AppNavbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/properties' component={Properties} />
          <Route path='/merchants' component={Merchants} />
        </Switch>  
      </div>
    </Router>
  );
}

export default App;

