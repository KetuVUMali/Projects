import React from 'react'
import { Grid } from '@mui/material'
import Achivement from './Achivement'
import MonthlyOverView from './MonthlyOverView'

const AdminDashboard = () => {
  return (
    <div className='p-10'>
      <Grid container spacing={2}>
        <Grid>
          <Achivement />
        </Grid>
        <Grid item xs={12} md={8}>
          <MonthlyOverView />
        </Grid>
        <Grid item xs={12} md={6}>
              
        </Grid>
      </Grid>
    </div>
  )
}

export default AdminDashboard