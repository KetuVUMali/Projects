import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { Card, CardHeader, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const CustomerTable = () => {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')

  // Fetch all customers on mount
  useEffect(() => {
    fetchCustomers()
  }, [])

  // Fetch customers by search
  const fetchCustomers = async (query = '') => {
    setLoading(true)
    setError('')
    try {
      let url = 'https://dummyjson.com/users'
      if (query) {
        url = `https://dummyjson.com/users/search?q=${encodeURIComponent(query)}`
      }
      const res = await axios.get(url)
      setCustomers(res.data.users)
    } catch {
      setError('Failed to fetch customers')
    } finally {
      setLoading(false)
    }
  }

  // Handle search input
  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearch(value)
    // Fetch filtered customers
    fetchCustomers(value)
  }

  return (
    <Card sx={{ maxWidth: 1200, margin: '40px auto', p: 2 }}>
      <CardHeader title="Customer List" />
      <TableContainer component={Paper}>
        <TextField
          placeholder="Search customer by name, email, etc."
          value={search}
          onChange={handleSearchChange}
          fullWidth
          sx={{ my: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Table sx={{ minWidth: 1100 }} aria-label="customer table">
          <TableHead>
            <TableRow>
              <TableCell>Sr No</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={10} align="center">Loading...</TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={10} align="center" style={{ color: 'red' }}>{error}</TableCell>
              </TableRow>
            ) : customers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={10} align="center">No customers found.</TableCell>
              </TableRow>
            ) : (
              customers.map((user, idx) => (
                <TableRow key={user.id}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>
                    <Avatar src={user.image} alt={user.firstName} sx={{ width: 48, height: 48 }} />
                  </TableCell>
                  <TableCell>
                    {user.firstName} {user.lastName}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>
                    {user.address?.address}, {user.address?.city}, {user.address?.state}
                  </TableCell>
                  <TableCell>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '12px',
                      color: 'white',
                      background:
                        user.role === 'admin'
                          ? '#1976d2'
                          : user.role === 'moderator'
                          ? '#9c27b0'
                          : '#43a047'
                    }}>
                      {user.role}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" color="primary" size="small">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default CustomerTable