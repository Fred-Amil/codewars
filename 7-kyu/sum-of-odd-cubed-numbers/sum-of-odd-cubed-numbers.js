function cubeOdd(arr) {
  let sum = 0;
​
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
​
    if (typeof value !== 'number') {
      return undefined;
    }
​
    let cube = value ** 3;
​
    if (cube % 2 !== 0) {
      sum += cube;
    }
  }
​
  return sum;
}
​
​