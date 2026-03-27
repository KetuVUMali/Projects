import { useRef } from 'react';
// Stop Watch Example


import { useEffect } from 'react';
import React, { useState } from 'react'

const UseRef04 = () => {

    const [time, setTime] = useState(0);
    
    let timeRef = useRef(null);

    function handleStartClick() {
        timeRef.current = setInterval(() => {
                                                 setTime(time => time + 1);
                                                }, 1000);
    }
    function handleStopClick() {
        clearInterval(timeRef.current);
        timeRef.current = null;
    }
    function handleResetClick() {
        handleStopClick();
        setTime(0);
    }
   
      

  return (
    <div>
        <h1>Stop-Watch : {time} Seconds</h1>
            <br />
        <button onClick={handleStartClick}>Start</button>
            <br />
        <button onClick={handleStopClick}>Stop</button>
            <br />
        <button onClick={handleResetClick}>Reset</button>
    </div>
  )
}

export default UseRef04;