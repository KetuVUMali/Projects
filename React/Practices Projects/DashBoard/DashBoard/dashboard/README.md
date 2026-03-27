https://youtu.be/dv5kQrmHqTo?si=wyq1Zuf9Ad68--72
https://youtu.be/dv5kQrmHqTo?si=GPAiWckb_MVJ8npE

00:00
 Project Create

00:00
 Remove Default Template

07:00
 Create Admin Folder To Store Admn Realted All Components.
    src / Admin


07:10 
 Create Admin Component folder & Admin Main File/component
    src / Admin / component / Admin.jsx


07.20 
 Ceate Router Folder & File For handling Admin Routing
    src / Routing / AdminRoute.jsx


08.05  AdminRoute.jsx
 install : npm i react-router-dom
 Create Routing 
 main.jsx : Add  <BrowserRouter> <App />  </BrowserRouter>
 AdminRoute.jsx : Create Admin Routing : /admin (Main Admin File)



09.15 App.jsx
 Create Admin Route : /admin/*


10.10 Admin Dashboard defines an routing array 
  Make  Admin Dashboard Child / Navigation Routing array: menu=[]
  <!-- <outlet /> -->
    // Means defines an array 
  And 
  Create : Meadia query, sideBarVisible (var), navigate


14.25 Dashboard Side Bar Code Create (vaertical Bar)
 const drawer = (...)
 Material UI : Material UI is an open-source React Components library
     npm install @mui/material @emotion/react @emotion/styled
     npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
     npm install @mui/material @mui/icons-material @emotion/react @emotion/styled


25.20 Nav Bar (User Icon)
  Add Account Icon


26.00 Dore Verient (--- dash Icon For Responsive Design)
  Display On UI Side Bar
  <!-- <Box sx={{ display: 'flex' }}> ... </ Box> -->


35.40 Now Create Child Routing For Components.
  <!-- <Box> <Routes> ... </Routes> </Box> -->


40.35  Fix All Page SideBar & Nav Bar
       Routing : /* (ADR.jsx)
 

48.00 : Dashboard UI Start
        Work On Home UI


50:00 : Achivement Component (Home Tropy Component)
Achivement.jsx


01:01:00  Monthly Over-view Component (Home Tropy Right Side Component)
MonthiyOverview.jsx


01:27:10   Product Table
 Side Bar 2nd Menu.
 Add Api To Display Productos.
  API : https://dummyjson.com/docs/products
  npm i axios
  npm install react-axios
  npm install axios --force
  npm install react-axios --legacy-peer-deps
 Add Update & Delete Product Buttons.


01:56:50 Add Product. (02:20:37)
  CreateProduct.jsx Component Functinality Add Product


02:02:40 Delete Product.
  ProductTable.jsx Component Functinality Delete Product On Button Click


02:50:45 Order Table
  OrderTable.jsx Component Functinality Order Status Product
 API : https://fake-store-api.mock.beeceptor.com/api/orders/status/?order_id={order_id}
  Status Change : Pending, Shipped, Delivered, Cancelled
  Order Status : Cancel, Delete.

04:00:00  Dashboard Home UI
          Recent Order UI, Recent Product ADD/Display.


End :


Users Table API :  'https://dummyjson.com/users' 
                    https://dummyjson.com/users/search?q=${encodeURIComponent(query)}
npm install @mui/icons-material


