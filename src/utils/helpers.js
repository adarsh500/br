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

export { exists };
