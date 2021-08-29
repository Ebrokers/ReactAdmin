import logo from './logo.svg';
import './App.css';
import {Properties} from './Properties.js';
import {Merchants} from './Merchants.js';
import AppNavbar from './AppNavbar';
import {PropertiesById} from './PropertiesById.js';
import {PropertiesByMeId} from './PropertiesByMeId.js';
import {MerchantsById} from './MerchantsById.js';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <AppNavbar/>
      <Properties/>
      <Merchants/>
      <PropertiesByMeId/>
      <PropertiesById/>
      <MerchantsById/>
    </div>
  );
}

export default App;
