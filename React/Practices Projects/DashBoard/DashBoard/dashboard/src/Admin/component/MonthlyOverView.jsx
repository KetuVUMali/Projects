import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const salesData = [
    {
        stats:'245k',
        title:'Sales',
        color:'#E5D68A',
        icon: <TrendingUpIcon sx={{fontSize:'1.75rem'}} />
    },
    {
        stats:'12.5K',
        title:'Customer',
        color:'#22CB5C',
        icon: <AccountCircleIcon sx={{fontSize:'1.75rem'}} />
    },
    {
        stats:'1.54k',
        title:'Product',
        color:'#DE4839',
        icon: <PhonelinkIcon sx={{fontSize:'1.75rem'}} />
    },
    {
        stats:'88k',
        title:'Revenue',
        color:'#12B0E8',
        icon: <AttachMoneyIcon sx={{fontSize:'1.75rem'}} />
    }
]

const renderState=()=>{
    return salesData.map((item, index) => (
        <Grid item xs={12} sm={3} key={index}>
                <Box sx={{display:'flex', alignItems:'center',marginLeft:2}}>
                    <Avatar variant='rounded' sx={{mr:3, width:44, height:44, boxShadow:3, color:'white', backgroundColor:`${item.color}`}}>
                        {item.icon}
                    </Avatar>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography variant='caption'>  {item.title} </Typography>
                        <Typography variant='h6' style={{ marginRight:'10px'}}>{item.stats}</Typography>
                    </Box>
                </Box>
        </Grid>
    ))
}

const MonthlyOverView = () => {
  return (
    <Card sx={{bgcolor:'#242B2E',color:'white'}}>
        <CardHeader title='Monthly Overview' 
                    action={
                        <IconButton size='small'>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    subheader={
                        <Typography variant='body2' >
                            <Box component='span' sx={{fontWeight:600}}>
                                Total 48.5% Groth
                            </Box>
                        😎 this month
                        </Typography>
                    }
                    titleTypographyProps={{
                        sx: {
                            mb:2.5,
                            lineHeight:'2rem !important',
                            letterSpacing:'.15px !important',
                        }
                    }}
        />
        <CardContent sx={{pt:theme=>'${theme.spacing(3)} !important'}}>
            <Grid container spacing={[5,0]}>
                {renderState()}
            </Grid>
        </CardContent>
    </Card>
  )
}

export default MonthlyOverView