//  node 02_inertData.js   [ To Run CMD(Terminal)]

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
            
        
//7. Insert Data
            const data = await collection.insertOne(newUser);       // inset data
                // .insertOne(newUser);


        //8. Printing the Data
            console.log(data);     

                            // OP =>
                                    // {
                                    //     acknowledged: true,
                                    //     insertedId: new ObjectId('676ba29ffea63525f11f8da5')
                                    // }
    
    };

//9. Handling Promises 
    main()                                              
            .then(console.log())                        
            .catch(console.error)                       
            .finally(() => client.close());             

