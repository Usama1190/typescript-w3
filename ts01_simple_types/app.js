// TypeScript Simple Types
// Explicit Type
// let firstName: string = 'Usama';    // type string
// console.log(typeof firstName);
// Implicit Type
// let firstName = 'Usama';
// console.log(typeof firstName);
// Error in Type Assignment  ( explicit )
// let firstName: string = 'Usama';    // type string
// firstName = 33;  // attempts to re-assign a value to a different type
// Error: Type 'number' is not assignable to type 'string'.ts(2322)
// Error in Type Assignment  ( implicit )
// let firstName = 'Usama';
// firstName = 23;   // attempts to re-assign a value to a different type
// Error: Type 'number' is not assignable to type 'string'.ts(2322)
// Enable to Infer
// Implicit any as JSON.parse doesn't known what type of data it returns
// so it can be "any" things...
let json = JSON.parse('55');
// Most expect json to be an object, but it can be a string or a number
// like this example
console.log(typeof json);
export {};
