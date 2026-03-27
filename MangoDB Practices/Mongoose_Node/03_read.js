// node 03_read.js

    
// 1. Importing the Mongoose Library
const mongoose = require('mongoose');

// 2. Database Connection URI
const uri = "mongodb://127.0.0.1/nodeData";

// 3. Connecting to MongoDB
mongoose.connect(uri)
        
// 4. Schema Definition
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


console.log("Connected to Mongoose");


const readAllProducts = async () => {
        try 
            {
                const data = await Product.find();
                console.log("All Products:", data);
            } 
        catch (error) 
            {
                console.error("Error reading products:", error);
            } 
        finally
            {
                mongoose.connection.close();
            }
    };
    
readAllProducts();
                
        