function intersect(...arrays) {
  if (arrays.length === 0) return [];
​
  return arrays[0].filter(item =>
    arrays.every(arr => arr.includes(item))
  );
}
​