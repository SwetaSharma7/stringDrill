function splitIPAddress(ipAddress) {
    const parts = ipAddress.split('.');
    const numericParts = parts.map(part => parseInt(part, 10));
  
    // Check for invalid characters
    if (numericParts.some(isNaN)) {
      return [];
    }
  
    return numericParts;
  }
  
  module.exports = splitIPAddress;
  