import { useState, useEffect, useCallback } from 'react';
import EmployeeTable from './components/EmployeeTable';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './App.css';

const BASE_URL =
  'https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees';

function App() {
  const [data, setData] = useState({});
  const [filteredData, setFilteredData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [sortValue, setSortValue] = useState('default');
  const employeeProperties = [
    'First name',
    'Last name',
    'Address',
    'Designation',
    'ID',
    'Manager ID',
    'Salary',
    'Date of birth',
    'Date of joining',
  ];

  const handleChange = useCallback((e) => {
    setSearchTerm(e.target.value);
    filterRows();
  });

  const fetchData = async () => {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setData(data);
      setFilteredData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const filterRows = () => {
    if (searchTerm === '' || searchTerm === ' ') {
      return;
    }
    const queriedData = data?.filter(
      ({
        first_name,
        details,
        last_name,
        address,
        designation,
        id,
        manager_id,
        salary,
        date_of_birth,
        date_of_joining,
      }) => first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('queried data', queriedData);
    setFilteredData(queriedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(filteredData, searchTerm);
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
          <FormControl>
            <InputLabel>Sort by</InputLabel>
            <Select
              value={sortValue}
              label="Sort By"
              onChange={(e) => setSortValue(e.target.value)}
            >
              <MenuItem value="default">Default</MenuItem>
              {employeeProperties.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <EmployeeTable className="employee-table" employees={filteredData} />
    </div>
  );
}

export default App;
