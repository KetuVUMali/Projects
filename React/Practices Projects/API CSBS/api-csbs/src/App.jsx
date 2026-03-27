import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DemoGet from './demo Get API/DemoGet'
import Get from './userApiJSON/Get'
import UserAdd from './userApiJSON/UserAdd';
import UserList from './userApiJSON/UserList';
import { NavLink } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserEdit from './userApiJSON/UserEdit'
function App() {
 




  return (
    <>
      <div>  
        <div>
          App Components
        </div>
        
        {/* Demo Get API */}
          {/* <DemoGet /> */}


        {/* User Get API */}
          {/* <Get /> */}
      </div>
      <div>
        
        <h1> Make Routes & Pages For Add User List UI</h1>
        <ul className='nav-list'>
          <li>
             <NavLink to='/'>User List</NavLink>
          </li>
          <li>
             <NavLink to='/userAdd'>Add User</NavLink>
          </li>
        </ul>
        <Routes>
            <Route path='/' element={<UserList />}/>
            <Route path='/userAdd' element={<UserAdd />}/>
            <Route path="/edit/:id" element={<UserEdit />} />
        </Routes>
      </div>
    </>
  )
}

export default App
