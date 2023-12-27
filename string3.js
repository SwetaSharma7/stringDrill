// ==== String Problem #3 ====
// Given a string in the format of "20/1/2021", print the month in which the date is present in.

function getMonthFromDate(dateString) {
    const parts = dateString.split('/');
    const month = parseInt(parts[1], 10);
  
    // Check for invalid characters
    if (isNaN(month) || month < 1 || month > 12) {
      return "Invalid Date";
    }
  
    const months = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    return months[month - 1];
  }
  
  module.exports = getMonthFromDate;
  