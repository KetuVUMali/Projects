import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'
const useEffect06 = () => {
    // variation 4 : 
        // Multiple Dependances
        // When click on any button that time alert will show
        // useEffect will run when count or total changes.

    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
      alert("I will run when count or total changes");
    }, [count, total]); // this will run when count or total changes
    
    function handleClick() {
        setCount(count + 1);
        setTotal(total + 1);
    }




  return (
    <div>
        <button onClick={handleClick}>Update Count</button>
        <h4>Count: {count}</h4>
        <br />
        <button onClick={handleClick}>Update Total</button>
        <h4>Total: {total}</h4>




    </div>
  )
}

export default useEffect06