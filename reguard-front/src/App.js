import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import DataTable from './components/DataTable';
import Pagination from './components/Pagination';
import Error from './components/Error';
import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/customers/:id',
      element: <DataTable dataType={'customers'} />,
      errorElement: <Error />
    },
    {
      path: '/purchases/:id',
      element: <DataTable dataType={'purchases'} />,
      errorElement: <Error />
    },
    {
      path: '/claims/:id',
      element: <DataTable dataType={'claims'} />,
      errorElement: <Error />
    },
  ]);

  return (
    <div className="App">
      <Nav />
      <RouterProvider router={router} />
      {/* <div style={{padding: "10px"}}>Currently viewing items {tableData.length * page - tableData.length} - {tableData.length * page} of {rowCount} Total Records</div> */}
      {/* <Metrics /> */}
      {/* {<DataTable rows={tableData} dataType={dataType} />} */}
      {/* <Pagination page={page} setPage={setPage} />  */}
      {/* <Route path="/customer/:id" component={CustomerDetails} />
      <Route path="/claims/:id" component={ClaimDetails} />
      <Route path="/purchase/:id" component={PurchaseDetails} /> */}
    </div>
  );
}

export default App;
