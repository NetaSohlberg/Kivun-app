import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function Users({users,filterName,filterEmail}){

    // console.log('table',filters);

    // const rows = users? users.map(user => (
    //     {
    //         id: user.id,
    //         name: user.name,
    //         email: user.email,
    //         companyName: user.company.name
    //     }
    // )) : {};

    const rows = users.filter(user => (user.name.toLowerCase().includes(filterName) || filterName === '') && (user.email.toLowerCase().includes(filterEmail) || filterEmail ===''))
    .map(user => (
      {
          id: user.id,
          name: user.name,
          email: user.email,
          companyName: user.company.name
      }));

    console.log('rows',rows)




    return(
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Company Name</TableCell>
            <TableCell align="left">Posts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.companyName}</TableCell>
              <TableCell align="left"><Button>show posts</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    );
}

export default Users;