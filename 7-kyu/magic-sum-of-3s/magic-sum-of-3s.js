function magicSum(arr) {
  let sum = 0;
​
  for (let num of arr) {
    if (num % 2 !== 0 && num.toString().includes('3')) {
      sum += num;
    }
  }
  return sum;
}
​