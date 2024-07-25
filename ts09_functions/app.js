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
function usama(a, b, c) {
    return a + b + (c || 0);
}
console.log(usama(2, 4, 7));
export {};
