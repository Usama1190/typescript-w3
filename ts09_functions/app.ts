// TypeScript Functions



// Return Type
// this `: number` here specifies that this function return a number

// function getTime(): number {
//   return new Date().getTime();
// }

// console.log(getTime());





// Void Return Type
// function printHello(): void {
//   console.log('Hello!');
  
// }

// printHello();






// Parameters
// function multiply(a: number, b: number) {
//   return a * b;
// }

// console.log(multiply(2, 5));





// Optional Parameters
// The `?` operator here marks parameter `c` as optional
// function add(a: number, b: number, c?: number) {
//   return a + b + (c || 0);
// }

// console.log(add(2, 4));





// Default Parameters
// function pow(value: number, exponent: number = 10) {
//   return value ** exponent
// }

// console.log(pow(10));





// Named Parameters
// function divide( { dividend, divisor }: { dividend: number, divisor: number }) {
//   return dividend / divisor;
// }

// console.log(divide({ dividend: 12, divisor: 2 }));





// Rest Parameters
// function add(a: number, b: number, ...rest: number[]) {
//   return a + b + rest.reduce((c, d) => c + d + 0)
// }

// console.log(add(2, 3, 4, 5, 6, 7));





// Type Alias
type Negate = (value: number) => number;

/* In this function the parameter `value` automatically gets assign the 
`number` from the type Negate */
const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(12));
