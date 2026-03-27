import { useState } from 'react'

import './App.css'
import UseRef01 from './useRef/UseRef01'
import UseRef02 from './useRef/UseRef02'
import UseRef03 from './useRef/UseRef03'
import UseRef04 from './useRef/UseRef04'
import UseMemo01 from './useMemo/UseMemo01'
import Parent from './useCallback/Normal Prog/Parent'
import ParentS from './useCallback/handle Problem/ParentS'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        
        {/* <UseRef01 /> */}
        <br />
        {/* <UseRef02 /> */}
        <br />
        {/* <UseRef03 /> */}
        <br />
        {/* <UseRef04 /> */}



        {/* <UseMemo01 /> */}


        {/* <Parent /> */}

        <ParentS />
    </div>
  )
}

export default App
