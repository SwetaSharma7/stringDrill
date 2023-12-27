function convertToNumeric(str) {
    const numericValue = parseFloat(str.replace(/[$,]/g, ''));
    return isNaN(numericValue) ? 0 : numericValue;
  }
  
  module.exports = convertToNumeric;
  