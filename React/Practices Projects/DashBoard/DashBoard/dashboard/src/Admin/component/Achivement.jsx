import { Card, CardContent, Button, styled, Typography } from '@mui/material'
import React from 'react'

const TrignleImg = styled('img')({
  right: 0,
  bottom: 0,
  position: 'absolute',
  height: 120,
  zIndex: 1,
  opacity: 0.2,
})

const TrophyImg = styled('img')({
  position: 'absolute',
  right: 24,
  bottom: 24,
  height: 80,
  zIndex: 2,
})

const Achivement = () => {
  return (
    <Card sx={{ position: 'relative', overflow: 'visible', minWidth: 300, minHeight: 180, backgroundColor: '#242B2E', color:'white' }}>
      <CardContent sx={{ position: 'relative', zIndex: 3 }}>
        <Typography variant='h6' sx={{ letterSpacing: '.25px', fontWeight: 600, mb: 0.5 }}>
          Shop With Zosh
        </Typography>
        <Typography variant='body2' sx={{ mb: 2 }}>
          Congratulations 😍
        </Typography>
        <Typography variant='h4' sx={{ my: 2, fontWeight: 700 }}>
          420.8k
        </Typography>
        <Button size='small' variant='contained'>
          View Details
        </Button>
      </CardContent>
      <TrignleImg src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TriangleArrow-Right.svg/1200px-TriangleArrow-Right.svg.png' alt='triangle' />
      <TrophyImg src='https://t4.ftcdn.net/jpg/02/62/19/49/360_F_262194985_SKUAj65mvUvhtxg2cTE7vxjQ7Z6qhUUz.jpg' alt='trophy' />
    </Card>
  )
}

export default Achivement