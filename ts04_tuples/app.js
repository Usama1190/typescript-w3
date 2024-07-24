"use strict";
// TypeScript Tuples
// define our tuple
// let ourTuple: [number, boolean, string];
// // initialize correctly
// ourTuple = [2, true, 'usama'];
// console.log(ourTuple);
/* As you can see we have a number, boolean and a string. But what
happens if we try to set them in the wrong order: */
// let ourTuple: [number, boolean, string];
// initialize incorrectly throws an error
// ourTuple = [false, 'usama', 2];
// console.log(ourTuple);
/* Readonly Tuple
A good practice is to make your tuple readonly.

Tuples only have strongly defined types for the initial values: */
// define out tuple
let ourTuple;
// initialize correctly
ourTuple = [3, true, 'usama'];
// we have no type saftey in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);
