import React from 'react'

const Card2 = (props) => {
  return (
    <div>
        <input type="text" placeholder='Enter Your Name' onChange={(e) => props.setName(e.target.value)} />
        <p> I Am Child Card2 Change Name State Var Value : {props.name} </p>
        <br />
    </div>
  )
}

export default Card2;