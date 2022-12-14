import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import './EmployeeTable.css';

const EmployeeTable = (props) => {
  const { employees, query } = props;

  if (!employees?.length) {
    return <h4>No employees found</h4>;
  }
  return (
    <div className="employee-table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Designation</TableCell>
              <TableCell align="center">Manager ID</TableCell>
              <TableCell align="center">Salary</TableCell>
              <TableCell align="center">Date of birth</TableCell>
              <TableCell align="center">Date of joining</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees
              ?.filter(
                ({
                  first_name,
                  last_name,
                  address,
                  designation,
                  id,
                  manager_id,
                  salary,
                  date_of_birth,
                  date_of_joining,
                }) =>
                  first_name.toLowerCase().includes(query.toLowerCase()) ||
                  last_name.toLowerCase().includes(query.toLowerCase()) ||
                  id.toLowerCase().includes(query.toLowerCase())
              )
              ?.map(
                ({
                  first_name,
                  last_name,
                  address,
                  designation,
                  id,
                  manager_id,
                  salary,
                  date_of_birth,
                  date_of_joining,
                }) => (
                  <TableRow key={id}>
                    <TableCell>
                      <Link to={`/${id.toLowerCase()}`}>{id}</Link>
                    </TableCell>
                    <TableCell align="center">{first_name}</TableCell>
                    <TableCell align="center">{last_name}</TableCell>
                    <TableCell align="center">{address}</TableCell>
                    <TableCell align="center">{designation}</TableCell>
                    <TableCell align="center">{manager_id}</TableCell>
                    <TableCell align="center">{salary}</TableCell>
                    <TableCell align="center">{date_of_birth}</TableCell>
                    <TableCell align="center">{date_of_joining}</TableCell>
                  </TableRow>
                )
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EmployeeTable;
