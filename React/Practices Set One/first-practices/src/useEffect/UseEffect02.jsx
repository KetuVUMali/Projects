import { useEffect } from 'react'
import React, { useEffect } from 'react'

const UseEffect02 = () => {



    // Variation 1 :
        // Runs on every render

        useEffect(() => {
            alert("Hello from useEffect \n I run on every render"); 
            // render means Display the component on the screen.
        })





  return (
    <div>UseEffect02</div>
  )
}

export default UseEffect02