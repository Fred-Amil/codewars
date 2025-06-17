function filterHomogenous(arrays) {
  return arrays.filter(subArr => {
    if (subArr.length === 0) return false;
    const type = typeof subArr[0];
    return subArr.every(item => typeof item === type);
  });
}
​