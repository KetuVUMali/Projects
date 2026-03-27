// node 05_deleteData.js


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

  // Find and Display Document Before Deletion
    console.log("Before Deletion:");
    console.log(await collection.find({ name: "David Lee" }).toArray());



// Perform the Delete Operation
    const deleteResult = await collection.deleteOne({ name: "David Lee" }); // Delete Document with `_id: 3`



  // Log Deletion Result
    console.log("Deletion Result:", deleteResult);    // []

  // Try to Find and Display Document After Deletion
    console.log("After Deletion:");
    console.log(await collection.find({ name: "David Lee" }).toArray());

  // Close the MongoDB Connection
    await client.close();
};

// Call the Main Function
main()
  .then(() => console.log("Operation Completed Successfully!"))
  .finally(() => console.log("MongoDB Connection Closed."));
