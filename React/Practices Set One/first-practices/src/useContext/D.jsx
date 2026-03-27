// D Recieves the value from C and displays it

// Import UserContext from A
import { UserContext } from './A' 

import React from 'react'

const D = () => {
  return (
    <div>
        {UserContext.name}
    </div>
  )
}

export default D

// op -> Jaimin Kumar