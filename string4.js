// / ==== String Problem #4 ====
// Given an object in the following format, return the full name in title case.
// {"first_name": "JoHN", "last_name": "SMith"}
// {"first_name": "JoHN", "middle_name": "doe", "last_name": "SMith"}

function getTitleCaseFullName(person) {
    const firstName = person.first_name || '';
    const middleName = person.middle_name || '';
    const lastName = person.last_name || '';
  
    const fullName = [firstName, middleName, lastName].map(name =>
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    ).join(' ').trim();
  
    return fullName;
  }
  
  module.exports = getTitleCaseFullName;
  