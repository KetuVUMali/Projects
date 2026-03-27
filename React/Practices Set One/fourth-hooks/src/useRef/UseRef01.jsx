import { useEffect } from 'react';
// Without UseRef Var value not update on re-render

// Var value not update on re-render

import React, { useState } from 'react'

const UseRef01 = () => {
    const [count, setCount] = React.useState(0);
    let val = 1;
    function handleIncClick() {
      setCount(count + 1);
      val = val + 1;
    }

    useEffect(() => {
        console.log("Me Fir Se Render Ho Gaya Hu"); 
        console.log("Value : ", val);
        console.log("Count : ", count);
    });

    // function handleDecClick() {
    //     setCount(count - 1);
    //   }
    
      // It is runs on every render
      

  return (
    <div>
        <button onClick={handleIncClick}> + </button>
            <br />
        <p>Count: {count}</p>
            <br />
        {/* <button onClick={handleDecClick}> - </button> */}
    </div>
  )
}

export default UseRef01