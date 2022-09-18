import React, { useState } from 'react';
import { useEmployeeData } from '../../contexts/EmployeeContext';
import { fetchEmployees } from '../../utils/helpers';
import './Hierarchy.css';

const Tree = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { data, startData } = props;

  return (
    <>
      {startData?.map((item) => {
        const children = fetchEmployees(data, item.id);
        console.log('this is chlid', children);
        if (!!children.length) {
          return (
            <div key={item.id}>
              <h3
                className="parent"
                key={item.id}
                onClick={() => setExpanded(!expanded)}
              >
                {item.id} {item.first_name}
              </h3>
              <div className="child">
                {expanded && <Tree data={data} startData={children} />}
              </div>
            </div>
          );
        }
        return (
          <h3 className="parent" key={item.id}>
            {item.id} {item.first_name}
          </h3>
        );
      })}
    </>
  );
};

const Heirarchy = () => {
  const { loading, defaultData } = useEmployeeData();

  if (loading) {
    return 'loading...';
  }

  return (
    <div className="tree">
      <div className="parent">
        <Tree data={defaultData} startData={defaultData.slice(0, 1)} />
      </div>
    </div>
  );
};

export default Heirarchy;
