// Parent to child pas function


import React from 'react'

export const GetFun = (props) => {
  return (
    <div>
        <h4>{props.children}</h4>
        <button onClick={props.incrementCount}>
             {props.text} 
        </button>
    </div>
  )
}
export default GetFun
// Parent to child pas function
// Parent Send Function To Child Button Perform Operation.  incrementCount is var & text is button name

