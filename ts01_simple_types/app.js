// Explicit Type
// Explicit - writing out the type:
// let firstName: string = 'Usama';     // type string
// console.log(typeof firstName);
// Implicit Type
// Implicit - TypeScript will "guess" the type, based on the assigned value:
// let firstName = 'Usama';
// console.log(typeof firstName1);
// Error In Type Assignment
// TypeScript will throw an error if data types do not match.
// let firstName: string = 'Usama';        // type string
// firstName = 33;    // error
//                    Type 'number' is not assignable to type 'string'
// attempts to re-assign the value to a different type
// console.log(firstName);
// Implicit type assignment would have made firstName less noticeable as 
//  a string, but both will throw an error:
let firstName = 'Usama'; // Inferred to type string
// firstName = 33;   // attempts to re-assign the value to a different type
// console.log(firstName);
// Implicit any as JSON.parse doesn't known what type of data it returns
// so it can be "any" thing...
const json = JSON.parse('55');
// Most expect json to be an object, but it can be a string or a number
// like this example
console.log(typeof json);
export {};
