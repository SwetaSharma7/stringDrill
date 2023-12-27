//Creating String
//In JavaScript, strings can be represented using either a primitive data type or an object type.
//String Primitives : String Primitive: A string primitive is a simple,
//immutable data type that represents a sequence of characters.
//It is created using string literals, enclosed in single (') or double (") quotes.
// const str1 = "A str primitive"
// const str2 = 'also a str primitive'
// const str3 = `yet another str primitive`
// console.log(str3);

//String Object: A string object is an instance of the String object, which is a wrapper around the primitive string data type.
//It is created using the String constructor.
// const str4 = new String("A String object");
// console.log(str4);

// const str5 = "2+2";
// const str6 = new String("2+2");
// const str7 = new String(2+2);
// console.log(str5);
// console.log(eval(str5)); // eval is treated as source code
// console.log(str6);
// console.log(str7);

//String Methods:-

// 1. toUpperCase() and toLowerCase():
    // toUpperCase: Converts all characters in a string to uppercase.
    // toLowerCase: Converts all characters in a string to lowercase.

    let str = 'Hello World';
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());

// 2. trim(), trimEnd(), and trimStart():
    // trim: Removes whitespace from both ends of a string.
    // trimEnd: Removes trailing whitespace from the end of a string.
    // trimStart: Removes leading whitespace from the beginning of a string.

    let paddedStr = "    Hello MountBlue   "
    console.log(paddedStr.trim());
    console.log(paddedStr.trimEnd());
    console.log(paddedStr.trimStart());

//3. concat():
    //Concatenates two or more strings.  
    
    const str1 = "welcome";
    const str2 = "Back";
    console.log(str1.concat(" ", str2));

// 4.endsWith():
    // Checks if a string ends with a specified substring.

    let str8 = "hello sweta is here";
    console.log(str8.endsWith('here'));

// 5.  includes():
    // Checks if a string contains a specified substring.
    let str9 = "hello I am here";
    console.log(str9.includes("am"));

// 6. indexOf() and lastIndexOf():
    // indexOf: Returns the index of the first occurrence of a substring.
    // lastIndexOf: Returns the index of the last occurrence of a substring.
     let str10  = "Hello World";
     console.log(str10.indexOf('o'));
     console.log(str10.lastIndexOf('l'));

//7. padEnd() and padStart():
    // padEnd: Pads a string with a specified character until it reaches a specified length from the end.
    // padStart: Pads a string with a specified character until it reaches a specified length from the start.  
    let str11 = "Sweta";
    console.log(str11.padEnd(10, "*"));
    console.log(str11.padStart(10, "^")); 

  8.    // repeat():
//   Repeats a string a specified number of times.
    let str12 = "Sweta";
    console.log(str12.repeat(5));

// 9.  replace():
    // Replaces a specified substring or pattern with another string.
    let name = "Sweta Singh";
    console.log(name.replace("Singh", "Sharma"));

// 10.  slice():
    // Extracts a section of a string and returns a new string.

    let name1 = "Sweta Sharma";
    console.log(name1.slice(6, 12));
    
// 11.  split():
    // Splits a string into an array of substrings based on a specified delimiter.
 
console.log(name1.split(6,12));

// 12. substring():
// Returns a subset of a string between two specified indices.
 
console.log(str.substring(7, 10));

