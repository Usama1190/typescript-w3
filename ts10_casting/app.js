// TypeScript Casting
// Casting with as
// let x: unknown = 'hello';
// console.log((x as string).length);
// let x: unknown = 12;
// console.log((x as string).length);
// Prints undefined since numbers dont have a length
// console.log((4 as string).length);
/* Conversion of type 'number' to type 'string' may be a mistake
because neither type sufficiently overlaps with the other. If this
was intentional, convert the expression to 'unknown' first.ts(2352) */
// Casting with <>
let x = 'hello';
console.log(x.length);
export {};
