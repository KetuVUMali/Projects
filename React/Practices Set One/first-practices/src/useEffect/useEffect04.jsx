import React from 'react'

const useEffect04 = () => {
    // variation 2 : Runs On Only First Render


    count [count, setCount] = useState(0);

    
    useEffect(() => {
      alert( " I will run on only first render" );

    }, [])
    
// Array is dependency is empty, so it will run only on first render
// When it is empty means it is runs only on first render, it will not run on any other render




  return (
    <div>useEffect04</div>
  )



}

export default useEffect04