import { useEffect, useRef } from 'react';
// With UseRef Var value update on re-render

// Var value  update on  Every re-render

import React, { useState } from 'react'

const UseRef02 = () => {
    const [count, setCount] = React.useState(0);
    // useRef Var.
    let val = useRef(0);
         // Now val is object and val inside store value at .cuurent field.

    function handleIncClick() {
      setCount(count + 1);
      val.current = val.current + 1;
    }

    useEffect(() => {
        console.log("Me Fir Se Render Ho Gaya Hu"); 
        console.log("Value-useRef : ", val.current);
        // console.log("Count : ", count);
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

export default UseRef02;

// Jab State variable update honge to page render hota hai
// Jab useRef variable update honge to page render hota hai
// Render means Display the component on the screen OR Reload Component.