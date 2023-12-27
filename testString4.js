const getTitleCaseFullName = require('./string4.js');

// Test cases
const result1 = getTitleCaseFullName({"first_name": "JoHN", "last_name": "SMith"});
const result2 = getTitleCaseFullName({"first_name": "JoHN", "middle_name": "doe", "last_name": "SMith"});

console.log(result1); // Should print "John Smith"
console.log(result2); // Should print "John Doe Smith"
