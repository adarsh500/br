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
            <>
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
            </>
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
  const { loading, data } = useEmployeeData();
  let firstSet;

  if (loading) {
    return 'loading...';
  }

  if (!loading) {
    firstSet = fetchEmployees(data, 'emp001');
  }

  console.log('core', data[0]);

  return (
    <div className="tree">
      {/* {firstSet?.map((item) => {
        const children = fetchEmployees(data, item.manager_id);
        console.log(children);
        if (!!children.length) {
          return (
            <div key={item.id}>
              <h3 key={item.id}>
                {item.id} {item.first_name}
              </h3>
              <div>
                <Tree data={children} />
              </div>
            </div>
          );
        }
        return (
          <h3 key={item.id}>
            {item.id}
            {item.first_name}
          </h3>
        );
      })} */}
      <h3 className="parent" key={data[0].id}>
        {data[0].id} {data[0].first_name}
      </h3>
      <div className="child">
        <Tree data={data} startData={firstSet} />
      </div>
    </div>
  );
};

export default Heirarchy;
