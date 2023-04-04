import React from 'react';
import { useState, useEffect } from 'react';
import TimeDisplay from "./components/TimeDisplay/TimeDisplay";
import Button from "./components/Button/Button";

function App() {

  const [time, setTime] = useState(0);
  const [timerWorking, setTimerWorking] = useState(false);

  const start = () => {
    setTimerWorking(true);
  }

  const stop = () => {
    setTimerWorking(false);
  }

  const reset = () => {
    setTime(0);
    setTimerWorking(false);
  }

  useEffect(() => {
    let interval;
    if (timerWorking) {
      interval = setInterval(() => {
        setTime(prevValue => prevValue + 1);
      }, 1);
    }
    return () => clearInterval(interval);
  }, [timerWorking]);

  return (
    <div>
      <TimeDisplay time={time} />
      <Button action={start}>Start</Button>
      <Button action={stop}>Stop</Button>
      <Button action={reset}>Reset</Button>
    </div>
  );
}

export default App;
