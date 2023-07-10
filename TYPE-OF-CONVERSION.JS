/* 1. Type Conversion.
Write a function called convertToNumber that takes a string as an argument and returns the equivalent
number. If the string cannot be converted to a number, the function should return the string "Invalid number".
Use error handling in javascript to achieve this output. */

let string ="121323";

// function that convert string in to  number 

function convertToNumber(string) {

    try{

        return parseInt(string);// parseInt is  function use to change the string number in to a number
    }
    catch(error)
    {
        console.log("invalid number "+error)
    }
}

console.log(convertToNumber(string));// calling function 
    
