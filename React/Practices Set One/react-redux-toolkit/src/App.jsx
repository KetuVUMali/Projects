import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import './App.css'
import { increment, decrement, reset, incrementByAmount } from './features/counter/CounterSlice'

function App() {
  
  // UseSelector Hook for accessing state counter value (counterSlice.jsx => value:0)
  const count = useSelector((state) => state.counter.value)

  // Action Despatcher Hook for dispatching actions (counterSlice.jsx => increment, decrement, incrementByAmount)
  const dispatch = useDispatch()

  // function through which we can update the state
  function handleIncmentClick(){
    dispatch(increment());
  }
  function handleDecrementClick(){
    dispatch(decrement());
  }
  function handleResetClick(){
    dispatch(reset());
  }

  const [amount, setAmount] = useState(0);
  function handleIncAmountClick(){
    dispatch(incrementByAmount(  Number(amount) )  );
  }

  return (
    <>
        <div className='container'>
           <button onClick={handleIncmentClick}> + </button>
              <p>Count : {count} </p>
            <button onClick={handleDecrementClick}> - </button>
            <br /><br />
            <button onClick={handleResetClick}> Reset </button>
            <br /><br />
            <input type="Number" placeholder='Enter Amount' 
                    onChange={(e) => setAmount(e.target.value)} 
                    value={amount} 
            />
            <br /><br />
            <button onClick={handleIncAmountClick}> Increment By Amount </button>
        </div>
    </>
  )
}

export default App
