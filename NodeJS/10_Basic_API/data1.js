// data1.js

//const { Module } = require("module");       // required "Module" when module export.


// const products = { id: 1, name: 'Laptop', price: 60000 };


const products = [
    { id: 1, name: 'Laptop', price: 60000 },
    { id: 2, name: 'Smartphone', price: 20000 },
    { id: 3, name: 'Tablet', price: 30000 }
];


module.exports = products;              // Exports "products"
