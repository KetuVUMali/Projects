// C Recieves the value from B and pass to child component D
import React from 'react'
import D from './D'

const C = () => {
  return (
    <div>
        <D />
    </div>
  )
}

export default C