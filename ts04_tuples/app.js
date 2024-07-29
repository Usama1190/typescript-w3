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
let ourTuple;
ourTuple = [12, true, 'usama'];
ourTuple.push('something new and wrong');
console.log(ourTuple);
