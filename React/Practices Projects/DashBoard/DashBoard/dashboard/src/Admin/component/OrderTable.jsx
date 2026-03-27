// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
// import TableRow from '@mui/material/TableRow'
// import Paper from '@mui/material/Paper'
// import Button from '@mui/material/Button'
// import { Card, CardHeader } from '@mui/material'

// const OrderTable = () => {
//   const [orders, setOrders] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState('')

//   useEffect(() => {
//     axios.get('https://fake-store-api.mock.beeceptor.com/api/orders')
//       .then(res => setOrders(res.data))
//       .catch(() => setError('Failed to fetch orders'))
//       .finally(() => setLoading(false))
//   }, [])

//   return (
//     <Card sx={{ maxWidth: 1000, margin: '40px auto', p: 2 }}>
//       <CardHeader title="Order List" />
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="order table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Order ID</TableCell>
//               <TableCell>Customer</TableCell>
//               <TableCell>Product</TableCell>
//               <TableCell>Quantity</TableCell>
//               <TableCell>Total Price</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Date</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {loading ? (
//               <TableRow>
//                 <TableCell colSpan={8} align="center">Loading...</TableCell>
//               </TableRow>
//             ) : error ? (
//               <TableRow>
//                 <TableCell colSpan={8} align="center" style={{ color: 'red' }}>{error}</TableCell>
//               </TableRow>
//             ) : orders.length === 0 ? (
//               <TableRow>
//                 <TableCell colSpan={8} align="center">No orders found.</TableCell>
//               </TableRow>
//             ) : (
//               orders.map(order => (
//                 <TableRow key={order.id}>
//                   <TableCell>{order.id}</TableCell>
//                   <TableCell>{order.customerName || '-'}</TableCell>
//                   <TableCell>{order.productName || '-'}</TableCell>
//                   <TableCell>{order.quantity || '-'}</TableCell>
//                   <TableCell>${order.totalPrice || '-'}</TableCell>
//                   <TableCell>{order.status || '-'}</TableCell>
//                   <TableCell>{order.date ? new Date(order.date).toLocaleDateString() : '-'}</TableCell>
//                   <TableCell>
//                     <Button variant="outlined" color="primary" size="small">
//                       View
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Card>
//   )
// }

// export default OrderTable;








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
import { Card, CardHeader } from '@mui/material'
import { Box } from '@mui/material'

const OrderTable = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get('https://fake-store-api.mock.beeceptor.com/api/orders/status/')
      .then(res => setOrders(res.data))
      .catch(() => setError('Failed to fetch orders'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Card sx={{ maxWidth: 1100, margin: '40px auto', p: 2 }}>
      <CardHeader title="Order List" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }} aria-label="order table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Products</TableCell>
              <TableCell>Quantities</TableCell>
              <TableCell>Total Price</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} align="center">Loading...</TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={7} align="center" style={{ color: 'red' }}>{error}</TableCell>
              </TableRow>
            ) : orders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">No orders found.</TableCell>
              </TableRow>
            ) : (
              orders.map(order => (
                <TableRow key={order.order_id}>
                  <TableCell>{order.order_id}</TableCell>
                  <TableCell>{order.user_id}</TableCell>
                  <TableCell>
                    {order.items.map(item => (
                      <div key={item.product_id}> Product #{item.product_id}</div>
                    ))}
                  </TableCell>
                  <TableCell>
                    {order.items.map(item => (
                      <div key={item.product_id}> {item.quantity} </div>
                    ))}
                  </TableCell>
                  <TableCell>${order.total_price}</TableCell>
                  <TableCell>
                      <Box
                          sx={{ color: 'white',  px: 2,  py: 1,  borderRadius: '16px',  display: 'inline-block',
                            bgcolor:
                              order.status === 'Pending'
                                ? 'warning.main'
                                : order.status === 'Delivered'
                                ? 'success.main'
                                : order.status === 'Cancelled'
                                ? 'info.main'
                                : order.status === 'Processing'
                                ? 'orange'
                                : order.status === 'Shipped'
                                ? 'pink'
                                : 'error.main',
                          }}
                      >
                        {order.status}
                      </Box>
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

export default OrderTable;