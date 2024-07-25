TypeScript Union Types

Union types are used when a value can be more than a single type.

Such as when a property would be string or number.


________________________________________________________________________

Union | (OR)
Using the | we are saying our parameter is a string or number:

Example
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}

printStatusCode(404);
printStatusCode('404');


________________________________________________________________________

Union Type Errors
Note: you need to know what your type is when union types are being used to avoid type errors:

Example
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
  Property 'toUpperCase' does not exist on type 'number'
}

In our example we are having an issue invoking toUpperCase() as its a string method and number doesn't have access to it.


________________________________________________________________________


Specify that the paramater "myVar" for the function can be either string or number:


function myFunc(myVar: string | number) {
  console.log(myVar)
}