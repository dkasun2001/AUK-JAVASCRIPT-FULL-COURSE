let arr = [1, 2, 3, 4, 5, 6];

/* let result = arr.reduce((prevoiusValue, currentValue) => {
  return prevoiusValue + currentValue;
},-1); */

// mulinma previousValue ek widiht -1 gnnwa

let result = arr.reduce((prevoiusValue, currentValue, index) => {
  prevoiusValue[`newObj${index + 1}`] = {
    eCurrentValue: currentValue + 5 * 3,
    oCurrentValue: currentValue,
  };
  return prevoiusValue;
}, {});

console.log(result);
