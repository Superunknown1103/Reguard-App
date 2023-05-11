import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DataTable(props) {
  const [tableData, setTableData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [detailView, setDetailView] = useState('');

  const classes = useStyles();

  const getTableData = async () => {
    (async () => {
      const query = window.location.href.split('/').pop();
      const uuidRegex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$');
      const detailView = uuidRegex.test(query);
    })
    await fetch(`http://localhost:3000/${props.dataType}/${detailView ? query : ''}`)
      .then(res => res.json())
      .then((result) => {
        setTableData(result[props.dataType])
        setIsDataLoaded(true);
        console.log(tableData);
      });
  };

  useEffect(() => {
    getTableData();
  }, [isDataLoaded]);


  return isDataLoaded ? (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Object.keys(tableData[0]).map((key) => {
              return <TableCell align="right">{key}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow onClick={() => { alert(row.id) }} key={row.id}>
              {Object.values(row).map((value) => {
                return <TableCell align="right">{value}</TableCell>
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (<div>Loading data...</div>)
}
