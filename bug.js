function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (x === undefined) {
    return 1; // Handle undefined case
  } else if (typeof x !== 'number') {
    return NaN; // Handle non-numeric case
  }

  // Note the bug: integer overflow can occur if the value of x is too large
  return x * 2; 
}