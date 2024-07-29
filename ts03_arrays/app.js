// TypeScript Arrays
// Syntax
// const names: string[] = [];
// names.push('usama');
// names.push(3); 
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// console.log(names);
// Readonly
// const names: readonly string[] = ['John'];
// names.push('usama');
// Property 'push' does not exist on type 'readonly string[]'.ts(2339)
// try removing the readonly modifier and see if it works
// Type Inference
const myNumbers = [1, 2, 3, 4];
myNumbers.push(5); // no error
// comment line below out to see the successfull assignment
// myNumbers.push('5'); 
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
console.log(myNumbers);
let myNumbers2 = myNumbers[0];
console.log(myNumbers2);
export {};
