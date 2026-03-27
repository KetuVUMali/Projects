
// rafce boilerplate
import { useState } from 'react'
import React, { use } from 'react'
import './Counter.css'

const Counter = () => {
  const[count, setCount] = useState(0);
  return (
    <div>
        <div className='counter-box'>
            <div className='counter-body'>
                 <div className='counter-container'>
                 <p id='para'> You Click Button {count} Times </p>
                 <button id='btn' onClick={() => setCount(count + 1) }> Click Me </button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Counter