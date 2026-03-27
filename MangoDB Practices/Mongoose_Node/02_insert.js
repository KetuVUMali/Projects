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

// New Product Data
const newProduct = new Product({
    _id: 4,
    name: "Washing Machine",
    category: "Home Appliances",
    price: 500,
    stock: 5,
    ratings: [4.6, 4.4],
    manufacturer: { name: "CleanCo", location: "Florida" },
    createdAt: new Date()
});

// Function to Insert and Read Data
const readAllProducts = async () => {
    try 
    {
        // Save the new product to the database
        const savedProduct = await newProduct.save();
        console.log("Product Saved:", savedProduct);

        // Read all products from the database
        const products = await Product.find();
        console.log("All Products:", products);
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

// Call the Function
readAllProducts();
