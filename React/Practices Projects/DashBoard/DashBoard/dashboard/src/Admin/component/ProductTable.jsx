import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import { Card, CardHeader } from '@mui/material'

/**
 * ProductTable component fetches and displays a list of products in a Material-UI table.
 * Each row shows product details including image, name, price, stock, and provides Update and Delete actions.
 *
 * @component
 * @returns {JSX.Element} A table displaying product information with action buttons.
 *
 * @example
 * <ProductTable />
 */

const ProductTable = () => {
  //  It uses the useState hook to manage the products state, which is initially an empty array.
  // creates a state variable called products that starts as an empty list. This will hold all the product information you get from the API.
  const [products, setProducts] = useState([])


  // The useEffect block runs once when the component loads (because of the empty [] at the end).
  // Inside useEffect, it uses axios.get('https://dummyjson.com/products') to fetch product data from the API.
  
  useEffect(() => {
      //  fetches a list of products from the API endpoint
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.error(err))
      //  If the API call fails, the error is logged to the console.
  }, [])

  // When the data comes back successfully, it takes the list of products from the response (res.data.products) and saves it in the products state using setProducts.
  // If there is an error (for example, if the internet is not working or the API is down), it will print the error in the browser console.

  // Delete product handler
    // When you click the Delete button, handleDelete is called with the product's id.
    // It sends a DELETE request to the API: fetch('https://dummyjson.com/products/PRODUCT_ID', { method: 'DELETE' })

  const handleDelete = async (id) => {
    try {
      await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE',
      })
      // Remove the deleted product from the state
      setProducts(products.filter(product => product.id !== id))
    } catch (error) {
      console.error('Failed to delete product:', error)
    }
  }




        const handleUpdate = async (id) => {
        try {
          // Example: Update the product title to "Updated Product"
          const response = await fetch(`https://dummyjson.com/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'Updated Product' }),
          });
          const updatedProduct = await response.json();
          // Update the product in the local state
          setProducts(products =>
            products.map(product =>
              product.id === id ? { ...product, ...updatedProduct } : product
            )
          );
        } catch (error) {
          console.error('Failed to update product:', error);
        }
      };

  // In short: This code fetches the product list from the API when the page loads and saves it in a variable so you can display it in your table.


  
  return (

            <div>
                <Card className='mt-2'>
                      <CardHeader title="All Product List" />
                      <TableContainer component={Paper}>
                              <Table sx={{ minWidth: 650 }} aria-label="product table">
                                <TableHead>
                                {/* TableHead defines the header row of the table  */}
                                {/* The product's title, price, and stock are shown in their respective columns. */}
                                  <TableRow>
                                    <TableCell>Sr. No.</TableCell>
                                    <TableCell>Image</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Price ($)</TableCell>
                                    <TableCell>Stock</TableCell>
                                    <TableCell>Update</TableCell>
                                    <TableCell>Delete</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {/* TableBody renders the table rows dynamically using the products state. */}
                                  {/* Each row displays product information and provides Update and Delete actions. */}
                                  {products.map((product, idx) => (
                                    <TableRow key={product.id}>
                                      <TableCell>{idx + 1}</TableCell>
                                      <TableCell>
                                        <Avatar
                                          variant="square"
                                          src={product.thumbnail || product.images?.[0]}
                                          alt={product.title}
                                          sx={{ width: 56, height: 56 }}
                                        />
                                      </TableCell>
                                      <TableCell>{product.title}</TableCell>
                                      <TableCell>${product.price}</TableCell>
                                      <TableCell>{product.stock}</TableCell>
                                      <TableCell>
                                        <Button variant="outlined" color="primary" size="small" onClick={() => handleUpdate(product.id)}>
                                          Update
                                        </Button>
                                      </TableCell>
                                      <TableCell>
                                        <Button variant="outlined" color="error" size="small" onClick={() => handleDelete(product.id)}>
                                          Delete
                                        </Button>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                      </TableContainer>
                </Card>
            </div>

        )
}

export default ProductTable