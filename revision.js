//# 1 # Write a JavaScript function to check whether an `input` is a string or not
/*
function isString(data)
{
  if(typeof(data)=='string')
  return true;
  else
  return false;
}
console.log("Exercice 1 : ");
console.log(isString('hello65656'));// true
console.log(isString([1,6,9])); // false
console.log(isString(5)); // false
console.log(isString("Is54545et")); // true

*/

//# 2 # Write a JavaScript function to check whether a string is blank or not 
/*
function isBlank (input) 
{
   
    //if(input=='')
    //return true;
    //else
    //return false;
   
     if(input.length==0)
     return true;
     else
     return false;
}
console.log(isBlank('')); // true
console.log(isBlank('hjhjh')); // false 
 */
/*
//# 3 # Write a JavaScript function to split a string and convert it into an array of words
function stringToArray(str) {
     return str.split(" ");
};
console.log(stringToArray ("ISET Tataouine 2023 Groupe1er"));
["ISET", "Tataouine", "2023"]

*/

/*
//# 4 # Write a JavaScript function to extract a specified number of characters from a string
function extractString(str1, length) 
{
  
     return str1.slice(0,length);    
};

console.log(extractString("Robin Singh",4)); // "Robi"
console.log(extractString("ISET Tataouine",7)); // "ISET Ta"

*/

//# 5 # Write a JavaScript function to hide email addresses to protect from unauthorized user
function protectEmail (user_email) {
    splitted = user_email.split("@");
    part1 = splitted[0];
    part2 = splitted[1];
    avg = part1.length/2; 
    part1 = part1.substring(0,avg);
    return part1+'...@'+part2;
};
console.log(protectEmail("isettataouine@gmail.com"));
//"isetta...@gmail.com"

//protectEmail("isettataouine@gmail.com");
