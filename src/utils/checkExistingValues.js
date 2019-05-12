const checkExistingValues = (value, arr, target) => {
  let isExist;
  let error = false;
  if (value) {
    isExist = arr.filter(el => {
      return value === el[target];
    });
  }

  if (isExist && isExist.length > 0) {
    error = true;
  }

  return error
};

export default checkExistingValues;
