function seqlist(first, c, l) {
  let sequence = [];
  for(let i=0; i<l; i++){
    let term = first + (i*c);
    sequence.push(term);
  }
  return sequence;
}
​