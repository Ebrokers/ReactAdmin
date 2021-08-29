import logo from './logo.svg';
import './App.css';
import {Properties} from './Properties.js';
import {Merchants} from './Merchants.js';
import AppNavbar from './AppNavbar';
import {PropertiesById} from './PropertiesById.js';
import {MerchantById} from './MerchantById.js';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Properties/>
      <PropertiesById/>
      <Merchants/>
     
    </div>
  );
}

export default App;
