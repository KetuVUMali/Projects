// useRef through we can access and modify the DOM.
// Main Perpoze of useRef is to access and modify the DOM.

// Button is DOM element we can access and modify

import { useEffect, useRef } from 'react';

import React, { useState } from 'react'

const UseRef03 = () => {
    const [count, setCount] = React.useState(0);
  
    function handleIncClick() {
      setCount(count + 1);
    }

    // Create a ref and link with button to access and modify to it.
    const btnRef = useRef();

    // fun onClick on button perform DOM operation / modify / access.
    function handleColorClick() {
        btnRef.current.style.backgroundColor = "red";
    }


  return (
    <div>
        <button onClick={handleIncClick}  ref={btnRef}> + </button>
            <br />
        <p>Count: {count}</p>
            <br /><br />
        <button onClick={handleColorClick}> Change Button 1 Color </button>
        <p>On Button Click Color Will Change</p>
    </div>
  )
}

export default UseRef03;

// Create Ref hook
    // const btnRef = useRef();
// useRef Link to ele
    // <button onClick={handleIncClick}  ref={btnRef}> + </button>
// useRef Modify / Access.
    // btnRef.current.style.backgroundColor = "red";