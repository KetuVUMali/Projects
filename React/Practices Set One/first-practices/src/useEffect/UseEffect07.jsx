import React from 'react'
import { useEffect } from 'react'

const UseEffect07 = () => {
    // Variation 5 : 
    // Is bar let add clinup Function

    const [count, setCount] = React.useState(0)




    useEffect(() => {
      alert("Count is Updated")
    
      return () => {
        alert("Count is Unmounted or Remove From UI")
      }
    }, [count])
    



  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )


}

export default UseEffect07