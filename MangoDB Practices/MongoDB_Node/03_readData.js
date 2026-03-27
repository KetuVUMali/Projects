//  node 03_readData.js   [ To Run CMD(Terminal)]

// only one time run this program if multiple time run then same data add multiple times with different _id

// Insert Data
const newUser = {
    name: "David Lee",
    email: "david.lee@example.com",
    age: 30,
    status: "active"
  };



// 1. Importing MongoDB Module
    const { MongoClient } = require('mongodb');

// 2. Defining the URI
    const uri = "mongodb://localhost:27017";

// 3. Creating a MongoClient Instance
    const client = new MongoClient(uri);


// db connection function
const main = async () => 
    {     
        //4. Connecting to the Database
            await client.connect();        
        
        //5. Accessing the Database
            const db = client.db('nodeData');    

        //6. Accessing the Collection
            const collection = db.collection('nodeData1');   
            
        
//7. Read Data
            
            const data = await collection.find({}).toArray();       // show all Document inside "nodeData1" collection
                        // collection.find({}).toArray()
                        

        //8. Printing the Data
            console.log(data);     

    
    };

//9. Handling Promises 
    main()                                              
            .then(console.log())                        
            .catch(console.error)                       
            .finally(() => client.close());             

