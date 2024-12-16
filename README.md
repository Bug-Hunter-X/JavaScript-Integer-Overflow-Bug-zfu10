# JavaScript Integer Overflow Bug

This repository demonstrates a common error in JavaScript: integer overflow.  The `foo` function multiplies an input number by 2. However, it fails to account for the possibility of exceeding JavaScript's safe integer limits. This can lead to unexpected and incorrect results.

The `bug.js` file contains the buggy code. The `bugSolution.js` file shows a corrected version that handles potential integer overflows.