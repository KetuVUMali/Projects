// // //  node 03_readData.js   [ To Run CMD(Terminal)]



// Node.js Script to Update MongoDB Data


// Import MongoDB Module
const { MongoClient } = require('mongodb');

// Define the URI for MongoDB Server
const uri = "mongodb://localhost:27017";

// Create an Instance of MongoClient
const client = new MongoClient(uri);

// Main Function to Perform Database Operations
const main = async () => {
  // Connect to the MongoDB Server
  await client.connect();

  // Access the Database
  const db = client.db('nodeData');

  // Access the Collection
  const collection = db.collection('nodeData1');




  // Find and Display Document Before Update
        console.log("Before Update:");
        console.log(await collection.find({ _id: 2 }).toArray());

                                                                    // Before Update:
                                                                    // [
                                                                    //   {
                                                                    //     _id: 2,
                                                                    //     name: 'Bob Smith',
                                                                    //     email: 'bob.smith@example.com',
                                                                    //     age: 35,
                                                                    //     status: 'inactive'
                                                                    //   }
                                                                    // ]


  // Update the Email Field for the Document with `_id: 2` or use other field to select doc.
        const updateResult = await collection.updateOne(
                                                    { _id: 2 },                                      // Query to Find Document
                                                    { $set: { email: "new.bob.smith@example.com" } } // Update Operation
                                                );

  // Log Update Result
        console.log("Update Result:", updateResult);
                                                            // Update Result: {
                                                            //     acknowledged: true,
                                                            //     modifiedCount: 1,
                                                            //     upsertedId: null,
                                                            //     upsertedCount: 0,
                                                            //     matchedCount: 1
                                                            //   }
 
 
// Find and Display Document After Update
    console.log("After Update:");
    console.log(await collection.find({ _id: 2 }).toArray());


                                                            // [
                                                            //     {
                                                            //       _id: 2,
                                                            //       name: 'Bob Smith',
                                                            //       email: 'new.updated.email@example.com',
                                                            //       age: 35,
                                                            //       status: 'inactive'
                                                            //     }
                                                            //   ]


};

// Call the Main Function
  main()                                              
    .then(console.log( "Operation Completed Successfully!" ))     //                    
    .catch(console.error)                       
    .finally(() => client.close( "MongoDB Connection Closed." ));  // message never print           
