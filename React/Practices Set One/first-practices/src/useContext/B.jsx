// B Recieves the value from A and pass to child component C

import React from 'react'
import C from './C'

const B = () => {
  return (
    <div>
        <C />
    </div>
  )
}

export default B