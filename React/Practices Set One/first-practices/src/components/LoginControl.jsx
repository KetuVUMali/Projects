import React from 'react'
import { useState } from 'react'

const LoginControl = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
            <div>
                    <h1>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h1>
                    
                    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>

                        {isLoggedIn ? "Logout" : "Login"}

                    </button>
            </div>
    </div>
  )
}

export default LoginControl