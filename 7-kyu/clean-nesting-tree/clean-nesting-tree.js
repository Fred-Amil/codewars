function isCleanlyNested(structure) {
  if (!Array.isArray(structure)) return true;
​
  if (structure.length === 0) return true;
​
  let allEmpty = structure.every(child => Array.isArray(child) && child.length === 0);
  let allNested = structure.every(child => Array.isArray(child) && child.length > 0);
​
  if (!allEmpty && !allNested) return false; // mixed = invalid
​
  if (allNested) {
    return structure.every(child => isCleanlyNested(child));
  }
​
  return true;
}
​