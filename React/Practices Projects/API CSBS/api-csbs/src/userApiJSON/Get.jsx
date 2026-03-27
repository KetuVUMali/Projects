import React, { useEffect, useState } from 'react'

const Get = () => {

    // Call API 
    useEffect(() => {
                    getUsersData();
                    setLoading(true);    // before render/API Call set loading to true To Dispay Loading
    }, []) // [] Empty Array For Only Call Onces

    // Data store into state to used in render/mapping 
    const [usersData, setUsersData] = useState([]);

    // Loading State
    const [loading, setLoading] = useState(false);

    // Arrow Function For Get API
    const getUsersData = async () => {
        const url = 'http://localhost:3000/users';
        const response = await fetch(url);     // Fetch API By default Get Method
        const data = await response.json();   // Data convert To Json
        // console.log(data);
        // Store Data In State To Render
        setUsersData(data);               // Data Store In State
        setLoading(false);                      // After Data Fetched Set Loading To False Then API Data Visibles
    }


  return (
    <div>
        <h1> User Get API </h1>
        <h1> Make Routes & Pages For Add User List UI</h1>
        <ul className='listx user-listx-heading '>
            <li>Name</li>
            <li>Age</li>
            <li>Email</li>
            <li>Password</li>
        </ul>
        {
            !loading?
            usersData.map((user) => {
                return (
                    <div key={user.name} className='listx'>
                        <li>{user.name}</li>
                        <li>{user.age}</li>
                        <li>{user.email}</li>
                        <li>{user.password}</li>
                    </div>
                )
            })
            : <h1> Data Loading...</h1>
        }
    </div>
  )
}

export default Get