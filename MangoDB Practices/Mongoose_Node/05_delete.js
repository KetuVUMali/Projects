// 05_delete.js


// Importing the Mongoose Library
const mongoose = require('mongoose');

// Database Connection URI
const uri = "mongodb://127.0.0.1/nodeData";

// Connecting to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Connection error:", err));

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

// Delete Function
const deleteProduct = async () => {
    try {
        // Delete a specific product (_id: 4)
        const deleteResult = await Product.deleteOne({ _id: 4 });

        // Check if the deletion was successful
        if (deleteResult.deletedCount > 0) {
            console.log("Product deleted successfully!");
        }
        else 
        {
            console.log("No product found with the specified _id.");
        }

        // Fetch and display all remaining products
        const products = await Product.find();
        console.log("Remaining Products:", products);
    } 
    catch (error) 
    {
        console.error("Error deleting product:", error);
    } 
    finally 
    {
        mongoose.connection.close();
    }
};

// Call the Function
deleteProduct();
