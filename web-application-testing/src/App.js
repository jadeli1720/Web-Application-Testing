import React, { useState } from 'react';

import Dashboard from './components/Dashboard';
import Display from './components/Display';

import './App.css';

function App() {

  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)
  const [hits, setHits] = useState(0)


  // const actions = {
  //   strikeScore: () => {
  //     setStrikes(strikes + 1);
  //     if (strikes === 2) {
  //       return (setStrikes(0), setBalls(0));
  //     }
  //   },

  //   ballScore: () => {
  //     setBalls(balls + 1);
  //     if (balls === 3) {
  //       return (setBalls(0), setStrikes(0), setHits(hits + 1));
  //     }
  //   },

  //   foulScore: () => {
  //     if (strikes !== 2) {
  //       return setStrikes(strikes + 1)
  //     }
  //   },

  //   hitScore: () => {
  //     setHits(hits + 1);
  //     return (setBalls(0), setStrikes(0));
  //   }
  // }

  const strikeScore = () => {
    setStrikes(strikes + 1);
    if (strikes === 2) {
      return (setStrikes(0), setBalls(0));
    }
  };

  const ballScore = () => {
    setBalls(balls + 1);
    if (balls === 3) {
      return (setBalls(0), setStrikes(0), setHits(hits + 1));
    }
  };

  const foulScore = () => {
    if (strikes !== 2) {
      return setStrikes(strikes + 1)
    }
  };

  const hitScore = () => {
    setHits(hits + 1);
    return (setBalls(0), setStrikes(0));
  };

  return (
    <div className="App">
      <h1>Play Ball!</h1>
      <Display
        strike={strikeScore}
        ball={ballScore}
        foul={foulScore}
        hit={hitScore}
        
      />
      <Dashboard
        // play={actions}
        strikes={strikes} balls={balls} hits={hits}

      />
    </div>
  );
}

export default App;
