import React from 'react'

const Card1 = (props) => {
  return (
    <div>
        <input type="text" placeholder='Enter Your Name' onChange={(e) => props.setName(e.target.value)} />
        <p> I Am Child Card1 Change Name State Var Value : {props.name} </p>
        <br />
    </div>
  )
}

export default Card1;