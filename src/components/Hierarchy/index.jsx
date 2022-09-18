import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
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
        if (!children.length) {
          return (
            <p className="parent" key={item.id}>
              {item.id} {item.first_name}
            </p>
          );
        }

        return (
          <div key={item.id}>
            <div className="node" onClick={() => setExpanded(!expanded)}>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              <p className="parent" key={item.id}>
                {item.id} {item.first_name}
              </p>
            </div>
            {expanded && (
              <div className="child">
                <Tree data={data} startData={children} />
              </div>
            )}
          </div>
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
      <Tree data={defaultData} startData={defaultData.slice(0, 1)} />
    </div>
  );
};

export default Heirarchy;
