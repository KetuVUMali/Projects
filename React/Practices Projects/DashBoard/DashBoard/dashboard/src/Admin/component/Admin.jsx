// import React, { useState } from 'react';
// import { useNavigate, Outlet } from 'react-router-dom';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import {
//   Box,
//   CssBaseline,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   ListItemButton,
//   Toolbar,
//   AppBar,
//   IconButton,
//   Typography
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import CategoryIcon from '@mui/icons-material/Category';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// import { Routes, Route } from 'react-router-dom';
// // import Dashboard from './Dashboard';
// import CreateProduct from './CreateProduct';
// import ProductTable from './ProductTable';
// import OrderTable from './OrderTable';
// import CustomerTable from './CustomerTable';
// import AdminDashboard from './Dashboard';


// // Array Of Object Routing : 
// const menu = [
//   { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
//   { name: "Products", path: "/admin/products", icon: <ShoppingCartIcon /> },
//   { name: "Customers", path: "/admin/customers", icon: <SupportAgentIcon /> },
//   { name: "Orders", path: "/admin/orders", icon: <AddShoppingCartIcon /> },
//   { name: "AddProduct", path: "/admin/products/create", icon: <AddShoppingCartIcon /> }
// ];


// const Admin = () => {
//   const theme = useTheme();
//   // Check Screen SIze
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
//   const [sideBarVisible, setSideBarVisible] = useState(false);
//   // Naviagation
//   const navigate = useNavigate();

//   // Side Bar Code
//   const drawer = (
//     <Box sx={{
//       width: 200, display: 'flex', flexDirection: 'column',
//       justifyContent: 'space-between', height: '100%'
//     }}>


//       {/* { isLargeScreen && <Toolbar /> } */}
//       <List>
//         {menu.map((item) => (
//           <ListItem key={item.name} disablePadding>
//             <ListItemButton onClick={() => navigate(item.path)}>
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.name} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>

//       <List sx={{ marginTop: 'auto' }}>
//         <ListItem disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <AccountCircleIcon />
//             </ListItemIcon>
//             <ListItemText> Account </ListItemText>
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     // drawer (Side Bar)
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />

//       <AppBar position="fixed">
//         <Toolbar>
//           <IconButton color="inherit" edge="start"
//             onClick={() => setSideBarVisible(!sideBarVisible)}
//             sx={{ mr: 2, display: { lg: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Typography variant="h6" noWrap component="div" >
//             {/* <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} /> */}
//             Admin Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>

//           <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '64px', marginTop: '64px' }}> 
//             <Drawer
//               variant={isLargeScreen ? "permanent" : "temporary"}
//               open={isLargeScreen ? true : sideBarVisible}
//               onClose={() => setSideBarVisible(false)}
//               sx={{
//                 width: 240,
//                 flexShrink: 0,
//                 '& .MuiDrawer-paper': {
//                   width: 240,
//                   boxSizing: 'border-box',
//                   position: 'fixed', // Add this line
//                   height: '100%',    // Add this line
//                   top: 0,           // Add this line
//                   left: 0,         // Add this line
//                 //  marginTop: '64px', // Adjust for AppBar height
//                 },
//               }}
//             >
//               {drawer}
//             </Drawer>
//       </div>

//       <Box component="main" sx={{
//         flexGrow: 1,
//         p: 3,
//         // ml: { lg: '240px' },  // Add margin for large screens
//         // width: { lg: `calc(100% - 240px)` }  // Add this line
//       }}>
//         <Toolbar />
//         <Outlet />
//       </Box>

//       {/* Routing */}
//       <Box>
//         <Routes>
//           <Route path='/' element={<AdminDashboard />} />
//           <Route path="/admin/product/create" element={<CreateProduct />} />
//           <Route path='/admin/products' element={<ProductTable />} />
//           <Route path='/admin/orders' element={<OrderTable />} />
//           <Route path='/admin/customers' element={<CustomerTable />} />
//         </Routes>
//       </Box>

//     </Box>
//   );
// };

// export default Admin;


// 00:58:00






import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Toolbar,
  AppBar,
  IconButton,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Routes, Route } from 'react-router-dom';
// import Dashboard from './Dashboard';
import CreateProduct from './CreateProduct';
import ProductTable from './ProductTable';
import OrderTable from './OrderTable';
import CustomerTable from './CustomerTable';
import AdminDashboard from './Dashboard';


// Array Of Object Routing : 
const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <ShoppingCartIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <SupportAgentIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <AddShoppingCartIcon /> },
  { name: "AddProduct", path: "/admin/products/create", icon: <AddShoppingCartIcon /> }
];


const Admin = () => {
  const theme = useTheme();
  // Check Screen SIze
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  // Naviagation
  const navigate = useNavigate();

  // Side Bar Code
  const drawer = (
    <Box sx={{
      width: 200, display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between', height: '100%'
    }}>


      {/* { isLargeScreen && <Toolbar /> } */}
      <List>
        {menu.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ marginTop: 'auto' }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText> Account </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    // drawer (Side Bar)
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" edge="start"
            onClick={() => setSideBarVisible(!sideBarVisible)}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" >
            {/* <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} /> */}
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '64px', marginTop: '64px' }}>
        <Drawer
          variant={isLargeScreen ? "permanent" : "temporary"}
          open={isLargeScreen ? true : sideBarVisible}
          onClose={() => setSideBarVisible(false)}
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
              position: 'fixed', // Add this line
              height: '100%',    // Add this line
              top: 0,           // Add this line
              left: 0,         // Add this line
            //  marginTop: '64px', // Adjust for AppBar height
            },
          }}
        >
          {drawer}
        </Drawer>
      </div>

      <Box component="main" sx={{
        flexGrow: 1,
        p: 3,
      }}>
        <Toolbar />
        <Outlet />
      </Box>

    </Box>
  );
};

export default Admin;