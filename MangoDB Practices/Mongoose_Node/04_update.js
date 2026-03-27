// 04_update.js


// Importing the Mongoose Library
const mongoose = require('mongoose');

// Database Connection URI
const uri = "mongodb://127.0.0.1/nodeData";

// Connecting to MongoDB
mongoose.connect(uri)

// Schema Definition
const productSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    category: String,
    price: Number,
    stock: Number,
    ratings: [Number],
    manufacturer: { name: String, location: String },
    createdAt: Date
});

// Creating a Model
const Product = mongoose.model('Product', productSchema);

// Update Function
const updateProduct = async () => {
    try {
        // Update a specific product (_id: 4)
        const updatedProduct = await Product.updateOne(
            { _id: 4 }, // Filter: Find the product with _id 4
            { 
                $set: { 
                            price: 550, 
                            stock: 8, 
                            "manufacturer.location": "Orlando" 
                       }       
            }
        );

        // Check if the update was successful
        if (updatedProduct.matchedCount > 0) 
        {
            console.log("Product updated successfully!");
        } 
        else 
        {
            console.log("No product found with the specified _id.");
        }

        // Fetch and display the updated product
        const product = await Product.findOne({ _id: 4 });
        console.log("Updated Product:", product);
    } 
    catch (error) 
    {
        console.error("Error updating product:", error);
    } 
    finally 
    {
        mongoose.connection.close();
    }
};

// Call the Function
updateProduct();
