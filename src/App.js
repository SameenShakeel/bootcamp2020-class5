import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';


function App() {

  let CountState = useState(1);

  return (
    <CounterContext.Provider value={CountState}>
    <div className="box">
      <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
