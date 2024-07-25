// TypeScript Functions

/* Return Type
The type of the value returned by the function can be explicitly defined. */

// function getTime(): number {
//     return new Date().getTime();
// }

// console.log(getTime());






/* Void Return Type
The type void can be used to indicate a function doesn't return any 
value. */

// function printHello(): void {
//     console.log('Hello!');
    
// }

// printHello();





/* Parameters
Function parameters are typed with a similar syntax as variable 
declarations. */

// function multiply(a: number, b: number) {
//     return a * b;
// }

// console.log(multiply(2, 6));






/* Optional Parameters
By default TypeScript will assume all parameters are required, but they 
can be explicitly marked as optional. */

// The '?' operator here marks parameter `c` as optional

// function add(a: number, b: number, c?: number) {
//     return a + b + (c || 0);
// }

// console.log(add(2, 5));





/* Default Parameters
For parameters with default values, the default value goes after the 
type annotation: */

// function pow(value: number, exponent: number = 10) {
//     return value ** exponent;
// }

// console.log(pow(2));





/* Named Parameters
Typing named parameters follows the same pattern as typing normal 
parameters. */

// function divide( {dividend, divisor}: {dividend: number, divisor: number}) {
//     return dividend / divisor;
// }

// console.log(divide({dividend: 10, divisor: 2}));





/* Rest Parameters
Rest parameters can be typed like normal parameters, but the type must 
be an array as rest parameters are always arrays. */

// function add(a: number, b: number, ...rest: number[]) {
//     return a + b + rest.reduce((p, c) => p + c, 0);
// }

// console.log(add(10, 10, 10, 10, 10));





/* Type Alias
Function types can be specified separately from functions with type 
aliases. */

type Negate = (value: number) => number

// In this function the parameter `value` automatically gets assigned the
// type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(10));






/* Create a function that returns the string "Learning is Fun!", with the return type explicitly defined:


function myFunc(): string{
  return
 "Learning is Fun!";
}





Create a function that specifically does not return a value:


function myFunc(): void {
  console.log("Learning is Fun!");
}




Create a function with 2 parameters (myVar1 and myVar2), that are both strings:


function myFunc(myVar1: string, myVar2: string) {
  return(myVar1 + myVar2);
}





Create a function with 2 parameters (myVar1 and myVar2,in that order), that are both strings.

Specify that myVar2 should be optional:


function myFunc(myVar1: string, myVar2?: string) {
  return(myVar1 + (myVar2 || ""));
}
*/