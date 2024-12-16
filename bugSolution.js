function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x === undefined) {
    return 1; 
  } else if (typeof x !== 'number') {
    return NaN; 
  }

  // Check if multiplication would cause an overflow
  if (x > Number.MAX_SAFE_INTEGER / 2 || x < Number.MIN_SAFE_INTEGER / 2) {
    return Infinity; //Or throw an error: throw new Error("Integer overflow");
  } else {
    return x * 2;
  }
} 