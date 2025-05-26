function capitalize(s,arr){
  let chars = s.split('');
  arr.forEach(index => {
    if(index >= 0 && index < chars.length){
      chars[index] = chars[index].toUpperCase();
    }
  });
  return chars.join("");
};