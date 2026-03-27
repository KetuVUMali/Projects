import { useState } from 'react'

const UserAdd = () => {

  // State For Add User Input
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [age, setAge] = useState('');

  // Check Data In Console with API Call
     const createUser = async () => {     
        console.log("C1",name, email, age);
        const url='http://localhost:3000/users'
        const response = await fetch(url, {                 // Fetch API
          method: 'POST',                                   // Post Method
          headers: {'Content-Type': 'application/json', },  // Data Type
          body: JSON.stringify({ name, email, age }),       // Data Send To API As Json Format 
        });

        // Check Post (Send) Response Data In Console 
        const data = await response.json(); // Data convert To Json
        console.log("C2",data);

        // Check Response Status Code 
        if(response.ok){ // 200 OK
          alert("User Created Successfully");
          console.log("User Created Successfully");
        }
        else{
          console.log("User Not Created");
        }

      }



  return (
    // Create User Form
    <div style={{ textAlign: 'center', marginTop: '20px'}}>
        <input type="text" onChange={(event) => setName(event.target.value)} placeholder='Enter Name' />
        <br/><br/>
        <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder='Enter Email' />
        <br /> <br />
        <input type="number" onChange={(event) => setAge(event.target.value)} placeholder='Enter Age' />
        <br /><br />
        <button onClick={createUser} >Add User</button>
    </div>
  )
}

export default UserAdd