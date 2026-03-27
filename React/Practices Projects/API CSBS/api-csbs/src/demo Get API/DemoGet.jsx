import React from 'react'
import { useEffect, useState } from 'react'

const DemoGet = () => {
        // Get API
      const [usersData, setUsersData] = useState([]);
      useEffect (() => { getUsersData () },[])

      async function getUsersData(){
        const url = 'https://dummyjson.com/users';
        const response = await fetch(url);
        const data = await response.json();
        // Store Data In State To Render
        setUsersData(data.users)
      }
      // console.log(usersData);


  return (
    <div>
        <div>
              Fetch API
        </div>
        <div>
            <ul className='listx user-listx-heading '>
                <li>First Name</li>
                <li>Last Name</li>
                <li>Age</li>
            </ul>


         
            {
            usersData && usersData.map((users) => (
              <ul className='listx' key={users.id}>
                <li>{users.firstName}</li>
                <li>{users.lastName}</li>
                <li>{users.age}</li>
              </ul>
            ))
          }
          
        </div>
    </div>
  )
}

export default DemoGet