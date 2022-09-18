const exists = (array, query) => {
  console.log('this', array, query);
  array.forEach((item) => {
    console.log(item.toLowerCase().includes(query.toLowerCase()));
    if (item.toLowerCase().includes(query.toLowerCase())) {
      return true;
    }
    return false;
  });
};

const removeCommas = (number) => {
  const formattedNumber = number.replaceAll(',', '');
  return Number(formattedNumber);
};

const normalizeDates = (date) => {
  const formattedDate = date.split('/').reverse().join();
  return formattedDate;
};

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const beautify = (attribute) => {
  const result = attribute.replaceAll('_', ' ');
  return capitalize(result);
};

const sortData = (data, sortKey) => {
  if (sortKey === 'id') {
    return data;
  }
  const sortedData = data?.slice().sort((a, b) => {
    if (sortKey === 'salary') {
      return removeCommas(a[sortKey]) > removeCommas(b[sortKey]) ? 1 : -1;
    } else if (sortKey === 'date_of_birth' || sortKey === 'date_of_joining') {
      const a1 = normalizeDates(a[sortKey]);
      const b1 = normalizeDates(b[sortKey]);
      console.log('in sort', a1, b1);
      return a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
    }
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  return sortedData;
};

const fetchEmployees = (data, manager_id) => {
  const set = data.filter(
    (item) => item.manager_id.toLowerCase() === manager_id.toLowerCase()
  );
  return set;
};

const generateTree = () => {};

export {
  generateTree,
  fetchEmployees,
  exists,
  sortData,
  removeCommas,
  normalizeDates,
  beautify,
};
