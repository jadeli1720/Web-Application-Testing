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
        strike: () => {
            setStrikes(strikes +1);
            if (strikes === 2){
              return setStrikes(0), setBalls(0);
            }
        },

        ball: () => {
          setBalls(balls + 1);
          if (balls === 3) {
            return setBalls(0), setStrikes(0);
          }
        },

        foul : () => {
          if( strikes <= 1) {
            return setStrikes(strikes + 1)
          }
        },

        score: () => {
          if(setHits(hits + 1)) {
            return setBalls(0), setStrikes(0), setFouls(0);
          }
        }
    }

    

  return (
    <div className="App">
      <h1>Play Ball!</h1>
      <Display 
      strike={strikes}
      ball={balls}
      foul={fouls}
      score={hits}
      />
      <Dashboard 
                play={actions}
      />
    </div>
  );
}

export default App;
