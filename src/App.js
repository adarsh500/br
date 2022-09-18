import { useState } from 'react';
import EmployeeTable from './components/EmployeeTable';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { sortData } from './utils/helpers';
import { employeeProperties } from './utils/commons';
import { useEmployeeData } from './contexts/EmployeeContext';
import './App.css';

function App() {
  const { data } = useEmployeeData();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortValue, setSortValue] = useState('id');

  const sortedData = () => {
    return sortData(data, sortValue);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <div className="nav">
        <div className="searchbar">
          <TextField
            label="Search..."
            type="search"
            onChange={handleChange}
            value={searchTerm}
          />
        </div>
        <div>
          <Link to="/hierarchy">hierarchy</Link>
        </div>
        <div className="sorter">
          <FormControl className="select">
            <InputLabel>Sort by</InputLabel>
            <Select
              value={sortValue}
              label="Sort By"
              onChange={(e) => setSortValue(e.target.value)}
              defaultValue="ID"
            >
              {employeeProperties.map((item, index) => (
                <MenuItem key={index} value={item.key}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <EmployeeTable
        className="employee-table"
        employees={sortedData()}
        query={searchTerm}
      />
    </div>
  );
}

export default App;
