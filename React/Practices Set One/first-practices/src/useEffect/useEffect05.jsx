import React from 'react'
import { useEffect } from 'react'
const useEffect05 = () => {
    // Variation 3 :
       // 

    cost [count, setCount] = useState(0)

    useEffect(() => {
      alert(" I will run when count is updated");

    }, [count])
    // Dependancy list depend on count, so it will run when count is updated.
    // Count update then useEffect will run..



  return (
    <div>useEffect05</div>
  )
}

export default useEffect05