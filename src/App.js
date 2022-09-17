import { useState, useEffect, useCallback } from 'react';
import EmployeeTable from './components/EmployeeTable';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BASE_URL } from './utils/commons';
import { sortData, employeeProperties } from './utils/helpers';
import { useEmployeeData } from './contexts/EmployeeContext';

import './App.css';

function App() {
  const { data, setData } = useEmployeeData();
  const { filteredData, setFilteredData } = useEmployeeData();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortValue, setSortValue] = useState('default');

  const sortedData = useCallback(() => {
    if (sortValue === 'default') {
      return sortData(data, sortValue);
    }
    return sortData(data, sortValue);
  }, [sortValue, data]);

  const handleChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  });

  console.log(searchTerm, sortValue, sortedData());
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
        <div className="sorter">
          <FormControl className="select">
            <InputLabel>Sort by</InputLabel>
            <Select
              value={sortValue}
              label="Sort By"
              onChange={(e) => setSortValue(e.target.value)}
              defaultValue="Default"
            >
              <MenuItem value="id">Default</MenuItem>
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
