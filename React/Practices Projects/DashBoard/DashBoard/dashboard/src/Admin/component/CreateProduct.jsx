import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
  MenuItem,
} from '@mui/material'
import axios from 'axios'

const categories = [
  'beauty', 'electronics', 'fashion', 'home', 'sports', 'toys', 'other'
]

const CreateProduct = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    discountPercentage: '',
    stock: '',
    brand: '',
    sku: '',
    thumbnail: '',
  })
  // sku : Stock Keeping Unit.
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      // Prepare payload with only filled fields
      const payload = {
        ...form,
        price: Number(form.price),
        discountPercentage: Number(form.discountPercentage),
        stock: Number(form.stock),
      }
      await axios.post('https://dummyjson.com/products/add', payload)
      setSuccess(true)
      setForm({
        title: '',
        description: '',
        category: '',
        price: '',
        discountPercentage: '',
        stock: '',
        brand: '',
        sku: '',
        thumbnail: '',
      })
    } catch (err) {
      setError('Failed to add product. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card sx={{ maxWidth: 600, margin: '40px auto', p: 2 }}>
      <CardHeader title="Add New Product" />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Product Name"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                multiline
                rows={2}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                label="Category"
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                fullWidth
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Brand"
                name="brand"
                value={form.brand}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Price"
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                required
                fullWidth
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Discount (%)"
                name="discountPercentage"
                type="number"
                value={form.discountPercentage}
                onChange={handleChange}
                fullWidth
                inputProps={{ min: 0, max: 100, step: 0.01 }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Stock"
                name="stock"
                type="number"
                value={form.stock}
                onChange={handleChange}
                required
                fullWidth
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="SKU"
                name="sku"
                value={form.sku}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Image URL"
                name="thumbnail"
                value={form.thumbnail}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Add Product'}
              </Button>
            </Grid>
          </Grid>
        </form>
        <Snackbar
          open={success}
          autoHideDuration={3000}
          onClose={() => setSuccess(false)}
        >
          <Alert severity="success" sx={{ width: '100%' }}>
            Product added successfully!
          </Alert>
        </Snackbar>
        <Snackbar
          open={!!error}
          autoHideDuration={3000}
          onClose={() => setError('')}
        >
          <Alert severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      </CardContent>
    </Card>
  )
}

export default CreateProduct