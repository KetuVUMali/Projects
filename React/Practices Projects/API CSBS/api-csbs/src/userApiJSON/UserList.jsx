import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserList = () => {
       
    useEffect(() => {
                    getUsersData();
                    setLoading(true);    
    }, []) 

    
    const [usersData, setUsersData] = useState([]);

    const [loading, setLoading] = useState(false);

    const getUsersData = async () => {
        const url = 'http://localhost:3000/users';
        const response = await fetch(url);     
        const data = await response.json();   
        
        setUsersData(data);               
        setLoading(false);                      
    }


// Delete User API
    const deleteUser= async (id) => {
        console.log("ID : ",id);
        const url = "http://localhost:3000/users";     // API
        let response = await fetch(url+"/"+id           // ID Send To API For Delete User 
        ,{method: "DELETE"}                             // Delete Method 
        );         
        // 
        let data = await response.json();               // Data convert To Json & Store In Var To Use
        console.log("Delete User : ", data);            // Check Data In Console
        if(response.ok){ // 200 OK
            alert("User Deleted Successfully");
            console.log("User Deleted Successfully");
        }
        else{
            console.log("User Not Deleted");
        }
        
        // After Delete Data ShowLatest data then call Get API Function :
        getUsersData();
    }

  // Navigation Hook To Redirect Page
  const navigate = useNavigate();
  // Edite User API 
  const editUser=(id) => {
    navigate(`/edit/${id}`);
    // navigate("/edit/"+id);
    console.log("ID-E: ",id);
    
  }


  return (
    <div> 
        <ul className='listx user-listx-heading '>
            <li>ID</li>
            <li>Name</li>
            <li>Age</li>
            <li>Email</li>
            <li>Action</li>
        </ul>
        {
            !loading?
            usersData.map((user) => {
                return (
                    <div key={user.name} className='listx'>
                        <li>{user.id}</li>
                        <li>{user.name}</li>
                        <li>{user.age}</li>
                        <li>{user.email}</li>
                        <li>
                            <button onClick={() => editUser(user.id)} >Update</button> &ensp;
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </li>
                    </div>
                )
            })
            : <h1> Data Loading...</h1>
        }
    </div>
  )
}

export default UserList;