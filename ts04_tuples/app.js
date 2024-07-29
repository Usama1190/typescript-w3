"use strict";
// TypeScript Tuples
// define our tuple
// let myTuple: [number, boolean, string];
// initialized correctly
// myTuple = [23, true, 'usama'];
// console.log(myTuple);
// wrong order
// define out Tuple
// let myTuple: [number, boolean, string];
// initialized incorrectly throws an error
// myTuple = [false, 'usama', 23];
// console.log(myTuple);
// readonly      ( without )
// define our tuple
// let ourTuple: [number, boolean, string];
// initialize correctly
// ourTuple = [12, true, 'usama'];
// we have no type safety in our tuple for indexes 3+
// ourTuple.push('something new and wrong');
// console.log(ourTuple);
// with readonly modifier
// define our tuple
// let ourTuple: [number, boolean, string];
// initialize correctly
// ourTuple = [12, true, 'usama'];
// we have no type safety in our tuple for indexes 3+
// ourTuple.push('something new and wrong');
// instead use our readonly tuple
// const ourReadonlyTuple: readonly [number, boolean, string] = 
// [23, true, 'usama'];
// throws error as it is readonly
// ourReadonlyTuple.push('sami');
//Property 'push' does not exist on type 'readonly [number, boolean, string]'.ts(2339)
// Named Tuple
// const graph: [x: number, y: number] = [12.3, 45.2];
// Destructuring Tuple
const graph = [12.4, 45.8];
const [x, y] = graph;
console.log(x);
console.log(y);
