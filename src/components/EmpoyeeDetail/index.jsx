import { Table, TableCell } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import { useEmployeeData } from '../../contexts/EmployeeContext';
import { beautify } from '../../utils/helpers';

import './EmployeeDetail.css';

const Employee = () => {
  const { id } = useParams();
  const { data, loading } = useEmployeeData();
  let empData, titles;

  console.log(loading);

  if (!loading) {
    empData = data.filter((item) => item.id.toLowerCase() === id);
    titles = Object.keys(empData[0]);
    const index = titles.indexOf('details');
    titles.splice(index, 1);
  }

  return (
    <div className="container">
      <div className="detail-table">
        <TableContainer component={Paper}>
          <Table>
            {titles?.map((title) => {
              console.log(title);
              return (
                <TableRow>
                  <TableCell align="center">{beautify(title)}</TableCell>
                  <TableCell align="center">{empData[0][title]}</TableCell>
                </TableRow>
              );
            })}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Employee;
