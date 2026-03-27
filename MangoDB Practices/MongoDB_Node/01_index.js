//  nodemon 01_index.js   [ To Run CMD(Terminal)]

        // Getting Started with Node.js MongoDB Driver  :  [ SetUp ]
                // •	Download and install Node.js from official Node.js website. 
                // •	Create a project folder.
                // •	Make our folder  a node.js project through VS-Code CMD “ npm init –y ”
                // 		                "package.json" created.
                // •	Install mongodb driver using CMD “npm install mongodb ”
                // 				https://www.npmjs.com/package/mongodb 
                // 						“ node_module ” folder creaed.
                // 						"package-lock.json" Created.
                // •	Create a connection with MongoDB database and start working with it.


// 1. Importing MongoDB Module
const { MongoClient } = require('mongodb');
     // MongoClient class get  from  'mongodb' module
     // Provide setup & functionality to interact with mongoDB server.

// 2. Defining the URI
const uri = "mongodb://localhost:27017";
    // URI  Specifies the address of the MongoDB server to which we want to connect.
    // uri = Uniform Resource Identifier
    // uri = port address of the mongodb server (CMD -> mongosh -> Connecting to: ..............)
    // 27017: The default port on which MongoDB listens.

// 3. Creating a MongoClient Instance
const client = new MongoClient(uri); 
    // client = instance of MongoClient class
    // client = used to connect to the mongodb server
    // client have comes some functionality or methods to interact with the mongodb server

//4. Connecting to the Database
// db connection function
const main = async () => {       // fat arrow fun use.    func return promise that async
    
        await client.connect();                 // connect to server.    fun return promise then it is await
        // Establish and verify connection
        // connect(): Establishes a connection to the MongoDB server.
        // await keyword waits program to complete the connection process before moving forward.

    
//5. Accessing the Database
        const db = client.db('user');           // conect to database
        // db = instance of database
        // db = used to interact with the database
        // If the database "user" does not exist, MongoDB will create it automatically when data is added.

//6. Accessing the Collection
        const collection = db.collection('customer');       // connect with Collection
        // collection = instance of collection
        // collection = used to interact with the collection
        // If the collection "customer" does not exist, it will be created automatically when data is added.

//7. Fetching Data
        const data = await collection.find({age: {$gt:15}}).toArray();
                            // find(): Retrieves documents from the collection that match the given query.
                            // toArray(): Converts the query result (a cursor) into an array for easier handling.
                            // The await keyword ensures that the program waits until the query result is retrieved.

//8. Printing the Data
        console.log(data);     // Prints the retrieved documents to the console.
 
};

//9. Handling Promises 
 main()                                              // main(): Executes the main function that connects to the database and fetches the data.
        .then(console.log())                        // .then(): Handles the resolved promise (success case).
        .catch(console.error)                       // .catch(): Handles any errors that occur during the process.
        .finally(() => client.close());             // close server connection, whether the operation succeeds or fails.

