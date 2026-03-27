import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Admin from '../Admin/component/Admin';
import Dashboard from '../Admin/component/Dashboard';
import ProductTable from '../Admin/component/ProductTable';
import CreateProduct from '../Admin/component/CreateProduct';
import OrderTable from '../Admin/component/OrderTable';
import CustomerTable from '../Admin/component/CustomerTable';

const AdminRouting = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<Admin />}>
    //     <Route index element={<div>Dashboard</div>} />
    //     <Route path="products" element={<div>Products Page</div>} />
    //     <Route path="categories" element={<div>Categories Page</div>} />
    //     <Route path="customers" element={<div>Customers Page</div>} />
    //     <Route path="orders" element={<div>Orders Page</div>} />
    //     <Route path="products/create" element={<div>Add Product Page</div>} />
    //   </Route>
    // </Routes>

    <div>
      <Routes>
      <Route path="/" element={<Admin />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<ProductTable />} />
        <Route path="products/create" element={<CreateProduct />} />
        <Route path="orders" element={<OrderTable />} />
        <Route path="customers" element={<CustomerTable />} />
      </Route>
    </Routes>
    </div>
  );
};

export default AdminRouting;