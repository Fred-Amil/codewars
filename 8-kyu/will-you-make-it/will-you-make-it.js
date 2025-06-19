function zeroFuel(distanceToPump, mpg, fuelLeft) {
  const distancePossible = mpg * fuelLeft;
​
  if (distancePossible >= distanceToPump) {
    return true;
  } else {
    return false;
  }
}
​