// useContext  A Data Sharing To Children Component B

import React, { createContext } from 'react'
import B from './B'

// Step 1. Create Context
const UserContext = createContext();    // UserContext is Object. UserContext() is Function.

// Step 2. Create Provider (Wrap Child into "UserContext" provider)
// Step 3. Create Consumer (Which Component Need Data That Is Make Consumer).
const A = () => {
  return (
    <div>
        <UserContext.Provider value={'Jaimin Kumar'}>
            <B />
        </UserContext.Provider>
        
    </div>
  )
}

export { UserContext } // Export UserContext for use in child components
export default A


// Data Sharing Between Components
  //  A  ->  B  ->  C  ->  D
    // A is Parent Component Of B, C, D
    // B is Parent Component Of C, D
    // C is Parent Component Of D
    // D is Parent Component Of Nothing

// 1. Create Contex
// 2. Create Provider
    // <UserContext.Provider value={'Jaimin Kumar'}>  ..... </UserContext.Provider>
// 3. Create Consumer (Which Component Need Data That Is Make Consumer).
    // Which Component make Consumer that is write here.
    // <B />  ..... 