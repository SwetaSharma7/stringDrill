const convertToNumeric = require('./string1.js');

// Test cases
const result1 = convertToNumeric("$100.45");
const result2 = convertToNumeric("$1,002.22");
const result3 = convertToNumeric("-$123");
const result4 = convertToNumeric("invalid");

console.log(result1); // Should print 100.45
console.log(result2); // Should print 1002.22
console.log(result3); // Should print -123
console.log(result4); // Should print 0
