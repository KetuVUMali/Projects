import { lazy, Suspense, useState } from 'react'
// lazy loading import component
const User = lazy(() => import('./User'))

function App() {
  const [load, setLoad] = useState(false)  
  return (
    <>
     <div> Lazy Loading </div>

    {/* { load ? <User /> : null } */}
    {
          load ? 
            <Suspense fallback={<div>Loading...</div>}>
              <User />
            </Suspense>
          : null
    }
     <button onClick={() => setLoad(true)}>Load User</button>

    </>
  )
}

export default App
