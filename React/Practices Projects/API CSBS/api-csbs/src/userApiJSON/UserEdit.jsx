import { useEffect, useState } from 'react';
import React, { use } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const UserEdit = () => {
    // Get Id From URL/Param use Hook
        const { id } = useParams();
            // In App.js We Use <Route path="/edit/:id" element={<UserEdit />} /> Then Here we write id then here id get we use same id var
        //console.log("ID-E2: ",id);

    // Call API 
    useEffect(() => {
        getUserData();
    }, []);

    // Make State For Store Data Input Data 
         const [name, setName] = useState('');
         const [email, setEmail] = useState('');
         const [age, setAge] = useState('');

    // Create API Func
    const getUserData=async()=>{
        const url = "http://localhost:3000/users/"+id;
        console.log("URL : ",url);
        // 
        let response = await fetch(url);     // Fetch API By default Get Method
        let data = await response.json();   // Data convert To Json & Store In Var To Use

        // Store Data In State To Render
        setName(data.name);               // Data Store In State
        setEmail(data.email);               // Data Store In State
        setAge(data.age);               // Data Store In State
    }

    // Navigation Hook
    const navigate = useNavigate();

    // Create Update API Func
    const updateUserData=async()=>{
        console.log("Update User : ",name, email, age);
        const url = "http://localhost:3000/users/"+id;
        // 
        let response = await fetch(url, {                 // Fetch API
          method: 'PUT',                                   // Put Method
          headers: {'Content-Type': 'application/json', },  // Data Type
          body: JSON.stringify({ name, email, age }),       // Data Send To API As Json Format 
        });
        // 
        let data = await response.json();               // Data convert To Json & Store In Var To Use
        console.log("Update User : ", data);            // Check Data In Console
        if(response){ // 200 OK
            alert("User Updated Successfully");
            console.log("User Updated Successfully");
            navigate("/")
        }
        else{
            console.log("User Not Updated");
        }
    }
    
  return (
    <div style={{textAlign:'center'}}>
        <h1>User Edit Page</h1>
        <form onSubmit={(e) => { e.preventDefault(); updateUserData(); }}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter User Nmae' /> 
            <br /><br />
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />
            <br /><br />
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter Password' />
            <br /><br />
            <button type="submit">Update User</button>
        </form>
    </div>
  )
}

export default UserEdit;