import React from 'react';
import { useParams } from 'react-router-dom';
import { useEmployeeData } from '../../contexts/EmployeeContext';

import './EmployeeDetail.css';

const Employee = () => {
  const { id } = useParams();
  const { data } = useEmployeeData();
  console.log('haha i have data now', data);

  return (
    <div className='container'>
      {/* {data?.map()} */}
    </div>
  );
};

export default Employee;
