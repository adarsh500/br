import { useEffect, createContext, useState, useContext } from 'react';
import { BASE_URL } from '../utils/commons';

const EmployeeContext = createContext({});

export const EmployeeProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [defaultData, setDefaultData] = useState({});
  const [filteredData, setFilteredData] = useState({});

  const fetchData = async () => {
    try {
      const res = await fetch(BASE_URL + '/employees');
      const data = await res.json();
      setData(data);
      setFilteredData(data);
      setDefaultData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <EmployeeContext.Provider
      value={{
        loading: !data.length,
        defaultData,
        data,
        setData,
        filteredData,
        setFilteredData,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeData = () => useContext(EmployeeContext);
