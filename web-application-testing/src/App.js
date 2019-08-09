import React, { useState } from 'react';

import Dashboard from './components/Dashboard';
import Display from './components/Display';

import './App.css';

function App() {

  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)
  const [fouls, setFouls] = useState(0)
  const [hits, setHits] = useState(0)


  const actions = {
    strikeScore: () => {
      setStrikes(strikes + 1);
      if (strikes === 2) {
        return (setStrikes(0), setBalls(0));
      }
    },

    ballScore: () => {
      setBalls(balls + 1);
      if (balls === 3) {
        return (setBalls(0), setStrikes(0), setHits(hits + 1));
      }
    },

    foulScore: () => {
      if (strikes !== 2) {
        return setStrikes(strikes + 1)
      }
    },

    hitScore: () => {
      setHits(hits + 1);
      return (setBalls(0), setStrikes(0));
    }
  }



  return (
    <div className="App">
      <h1>Play Ball!</h1>
      <Display
        strikeScore={strikes}
        ballScore={balls}
        foulScore={fouls}
        hitScore={hits}
        
      />
      <Dashboard
        play={actions}
      />
    </div>
  );
}

export default App;
