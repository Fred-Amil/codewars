  function modifyMultiply(str, index, repeat) {
  const words = str.split(" ");           
  const targetWord = words[index];  
  return Array(repeat).fill(targetWord).join("-");
}
​