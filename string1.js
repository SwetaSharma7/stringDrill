// ==== String Problem #1 ====
// There are numbers that are stored in the format "$100.45", "$1,002.22", "-$123", and so on.
// Write a function to convert the given strings into their equivalent numeric format without any precision 
// loss - 100.45, 1002.22, -123 and so on. There could be typing mistakes in the string so if the number is invalid, return 0.

function convertToNumeric(str) {
    const numericValue = parseFloat(str.replace(/[$,]/g, ''));
    return isNaN(numericValue) ? 0 : numericValue;
  }
  
  module.exports = convertToNumeric;
  