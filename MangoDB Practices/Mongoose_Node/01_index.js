// node 01_index.js

    // Getting Started with Node.js Mongoose Driver  :  [ SetUp ]
                // •	Download and install Node.js from official Node.js website. 
                // •	Create a project folder.
                // •	Make our folder  a node.js project through VS-Code CMD “ npm init –y ”
                // 		                "package.json" created.
                // •	Install mongodb driver using CMD “ npm install mongoose ”
                // 				“ node_module ” folder creaed for module.
                // 				"package-lock.json" Created.
                // •	Create a connection with Mongoose database and start working with it.


// 1. Importing the Mongoose Library
const mongoose = require('mongoose');
        // require('mongoose'): Imports the Mongoose library, an ODM (Object Data Modeling) library for MongoDB and Node.js.
        // Mongoose simplifies interacting with MongoDB by providing schema definitions, models, and built-in methods for CRUD operations.


// 2. Database Connection URI
const uri = "mongodb://127.0.0.1/nodeData"
        // uri: Specifies the connection string to MongoDB.
        // "mongodb//127.0.0.1/nodeData" means:
        // mongodb://: The protocol for MongoDB connections.
        // 127.0.0.1: Refers to the local machine (localhost).
        // nodeData: The name of the database to connect to. If the database doesn't exist, MongoDB creates it when you insert data.


// 3. Connecting to MongoDB
mongoose.connect(uri)
        // mongoose.connect(uri): Establishes a connection to the MongoDB database using the specified uri.
        // Mongoose uses this connection to perform all database operations.

        
// 4. Schema Definition
    // schema : make structure of document (object) means how many fields, what is fields name, apply validation or not.
    //          A blueprint for the structure of documents in a MongoDB collection.
    // Defines the structure of documents in the "products" collection.
const productSchema = new mongoose.Schema({
                                            _id: Number,
                                            name: String,
                                            category: String,
                                            price: Number,
                                            stock: Number,
                                            ratings: [Number],
                                            manufacturer: { name: String, location: String  },
                                            createdAt: Date
});



// 5. Creating a Model
const Product = mongoose.model('Product', productSchema);
        // Collection Name: The model name (Product) is pluralized to products in MongoDB.
        // If in "nodeDaata" database inside "product" collection are not prsent then it is automatically create.
        // model('Product', productSchema); =>  'Product' convert database into collection as "products"

console.log("Connected to Mongoose");


const readAllProducts = async () => {
        const products = await Product.find();
        console.log("All Products:", products);
    };
    
readAllProducts()
                .finally(() => {mongoose.connection.close();});         //  Closes the connection to the MongoDB database.
        

// import product.json File 
// OP show privious file data 
