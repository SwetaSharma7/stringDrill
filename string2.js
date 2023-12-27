// ==== String Problem #2 ====
// Given an IP address - "111.139.161.143". Split it into its component parts 111, 139, 161, 143 and return it in an array in numeric values. [111, 139, 161, 143]
// Support IPV4 addresses only. If there are other characters detected, return an empty array.

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
  