import React from 'react';

import FormGroupDisplay from './components/FormGroupDisplay';
import TotalBalanceControl from './components/TotalBalanceControl/TotalBalanceControl';
import './App.scss'

function App() {
  return (
    <div className="App">
      <FormGroupDisplay />
      <TotalBalanceControl />
    </div>
  );
}

export default App;
