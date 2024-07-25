// TypeScript Union Types

/* Union | (OR)
Using the | we are saying our parameter is a string or number: */

// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code}.`);
    
// }

// printStatusCode(404);
// printStatusCode('404');





/* Union Type Errors
Note: you need to know what your type is when union types are being used 
to avoid type errors: */

// function printStatusCode(code: string | number) {
//     // console.log(`My status code is ${code.toUpperCase()}`);
    
// }

// error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'





/* Specify that the paramater "myVar" for the function can be either string or number:


function myFunc(myVar: string | number) {
  console.log(myVar)
} */