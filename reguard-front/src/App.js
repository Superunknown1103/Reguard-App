import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import DataTable from './components/DataTable';
import Pagination from './components/Pagination';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [tableData, setTableData] = useState([]);
  const [dataType, setDataType] = useState('customers');
  const [rowCount, setRowCount] = useState(0);
  const [page, setPage] = useState(1);

  const getTableData = async () => {
    await fetch(`http://localhost:3000/${dataType}/getAll${dataType}?limit=10&page=${page}`)
    .then(res => res.json())
    .then((result) => { 
      console.log('Here is my api result ', result);
      console.log(dataType)
      setTableData(result[dataType])
      setRowCount(result.count);
    })
  }

  useEffect(() => { 
    getTableData();
  }, [dataType]);

  useEffect(() => { 
    getTableData();
  }, [page]);

  return (
    <div className="App">
      <Nav setDataType={setDataType}/>
      <div style={{padding: "10px"}}>Currently viewing items {tableData.length * page - tableData.length} - {tableData.length * page} of {rowCount} Total Records</div>
      {/* <Metrics /> */}
      {tableData.length > 0 ? <DataTable rows={tableData} dataType={dataType} /> : <div>No data</div>}
      <Pagination page={page} setPage={setPage} /> 
      {/* <Route path="/customer/:id" component={CustomerDetails} />
      <Route path="/claims/:id" component={ClaimDetails} />
      <Route path="/purchase/:id" component={PurchaseDetails} /> */}
    </div>
  );
}

export default App;
