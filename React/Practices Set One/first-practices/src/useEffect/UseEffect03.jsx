import React, { useState } from 'react'

const UseEffect03 = () => {
    // Variation : 1


    // Before Render Component Display Side Effects.


    // useEffect with empty dependency array
    // useEffect will run only once when the component mounts
    // It will not run again when the component updates or unmounts
    const [count,setCount] = useState(0);

    useEffect(() => {
      alert("Count is : "+count);
    }, [])
    
    function handleClick(){
        setCount(count+1);
    }



  return (
    <div>
        <button  onClick={handleClick} >Click Me</button>
        Count Is : {count}
    </div>
  )
}

export default UseEffect03