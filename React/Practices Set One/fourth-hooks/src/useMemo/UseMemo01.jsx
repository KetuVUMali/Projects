// Handle Slow Working.
// Handle Expensive Task.

import { useState } from 'react'
import React from 'react'

const UseMemo01 = () => {
    const [count, setCount] = useState(0)

    function expensiveTask(num){
        console.log("Inside Expensive Task")
        for(let i=0; i<=1000000000; i++){}
        return num * 2;
     }

     let doubbleValue = expensiveTask({count});

  return (
    <div>
            <button onClick={() => setCount(count + 1)} > Increment  </button>
            <p style={{color:"red"}} >Count Is Working Slow Working</p>
              <br />
            <p>Count : {count}</p>
                <br />
            <p>Doubble Value : {doubbleValue}</p>
    </div>
  )
}

export default UseMemo01